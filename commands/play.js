const { blue, green, yellow, red } = require(`./colors.json`)
const { MessageEmbed } = require('discord.js');
const ytdl = require("ytdl-core");
const ytSearch = require('yt-search');
const message = require('../events/guild/message');
const queue = new Map();

const list = [];

module.exports = {
    name: 'play',
    aliases: ['pl', 'stop', 'skip', 'sk', 'queue', 'list'],
    description: 'Jouer de la musique',

    
    async execute(client, message, args, cmd) {

        const voice_channel = message.member.voice.channel;

        if(!message.guild)return;
        const receivedEmbed = message.embeds[0];

        const server_queue = queue.get(message.guild.id);


        if(cmd == 'play' || 'pl') {

            if(args == 0){
                const embed = new MessageEmbed(receivedEmbed)
                    .setTitle(`Erreur`)
                    .setColor(`${red}`)
                    .setDescription(`:x: Veuillez entrer un lien youtube`)
                return message.channel.send(embed); 
            }

            if(!voice_channel) {
                const embed = new MessageEmbed(receivedEmbed)
                    .setTitle(`Erreur`)
                    .setColor(`${red}`)
                    .setDescription(`:x: Vous n'êtes pas dans un salon vocal`)
                return message.channel.send(embed);
            }

            let song = {};

            if(ytdl.validateURL(args[0])) {
                const embed1 = new MessageEmbed()
                    .setTitle(`Recherche`)
                    .setColor(`${yellow}`)
                    .setDescription(`:arrows_counterclockwise: Recherche de la vidéo`)
                message.channel.send(embed1);

                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url, videoID: song_info.videoDetails.videoId}
                
                const embed = new MessageEmbed()
                    .setAuthor(`Chargement`)
                    .setTitle(`${song.title}`)
                    .setURL(`${song.url}`)
                    .setColor(`${yellow}`)
                    .setDescription(`:arrows_counterclockwise: Chargement de la vidéo`)
                    .setThumbnail(`https://img.youtube.com/vi/${song.videoID}/maxresdefault.jpg`)
                message.channel.send(embed);
                const connection = await message.member.voice.channel.join();

            //     const dispatcher = connection.play(ytdl(args[0]), {
            //         volume: 0.5,

            // });

            // // Event Start
            // dispatcher.on("start", () => {
            //     message.client.user.setActivity("Youtube", {type: "LISTENING"})
            //     const embed = new MessageEmbed()
            //         .setAuthor(`Lecture`)
            //         .setTitle(`${song.title}`)
            //         .setURL(`${song.url}`)
            //         .setColor(`${green}`)
            //         .setDescription(`:white_check_mark: Lecture de la vidéo`)
            //         .setThumbnail(`https://img.youtube.com/vi/${song.videoID}/maxresdefault.jpg`)
            //     message.channel.send(embed);
            // })

            // // Event Error
            // dispatcher.on("error", () => {
            //     const embed = new MessageEmbed(receivedEmbed)
            //         .setTitle(`Erreur`)
            //         .setColor(`${red}`)
            //         .setDescription(`:x: La vidéo est introuvable ou le lien est invalide`)
            //     message.channel.send(embed);
            //     message.member.voice.channel.leave();
            //  })

            // // Event Finish
            // dispatcher.on("finish", () => {
            //     message.member.voice.channel.leave();
            // })

            } else {
                const video_finder = async (query) => {
                    const embed1 = new MessageEmbed()
                        .setTitle(`Recherche`)
                        .setColor(`${yellow}`)
                        .setDescription(`:arrows_counterclockwise: Recherche de la vidéo`)
                    message.channel.send(embed1);

                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await video_finder(args.join(' '));
                if(video){
                    song = {title: video.title, url:video.url, videoID: video.videoId}
                    const embed = new MessageEmbed()
                        .setAuthor(`Chargement`)
                        .setTitle(`${song.title}`)
                        .setURL(`${song.url}`)
                        .setColor(`${yellow}`)
                        .setDescription(`:arrows_counterclockwise: Chargement de la vidéo`)
                        .setThumbnail(`https://img.youtube.com/vi/${song.videoID}/maxresdefault.jpg`)
                    message.channel.send(embed);
                } else {
                    const embed = new MessageEmbed(receivedEmbed)
                        .setTitle(`Erreur`)
                        .setColor(`${red}`)
                        .setDescription(`:x: La vidéo est introuvable ou le lien est invalide`)
                    message.channel.send(embed);
                }
            }

            if(!server_queue) {
                const queue_constructor = {
                    voice_channel: voice_channel,
                        text_channel: message.channel,
                        connection: null,
                        songs: []
                }
    
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
                list.push(`${song.title}`);
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    const embed = new MessageEmbed(receivedEmbed)
                        .setTitle(`Erreur`)
                        .setColor(`${red}`)
                        .setDescription(`:x: Le salon est inaccessible !`)
                    message.channel.send(embed);
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                list.push(`${song.title}`);
                const embed = new MessageEmbed()
                        .setAuthor(`Ajout réussi`)
                        .setTitle(`${song.title}`)
                        .setURL(`${song.url}`)
                        .setColor(`${green}`)
                        .setDescription(`:white_check_mark: Vidéo ajouté a la liste !`)
                        .setThumbnail(`https://img.youtube.com/vi/${song.videoID}/maxresdefault.jpg`)
                    message.channel.send(embed);
            }

        }

        else if(cmd == 'stop') stop_song(message, server_queue);
        else if(cmd == 'skip' || 'sk') skip_song(message, server_queue);
        else if(cmd == 'queue' || 'list') queue_list(message, server_queue);


    }
    
};

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if(!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return
    }
    
    const stream = ytdl(song.url, { filter: 'audioonly'});

    song_queue.connection.play(stream, { seek: 0, volume: 0.5})
        .on('finish',() => {
            list.shift();
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0]);
        });

    const embed = new MessageEmbed()
        .setAuthor(`Lecture`)
        .setTitle(`${song.title}`)
        .setURL(`${song.url}`)
        .setColor(`${green}`)
        .setDescription(`:white_check_mark: Lecture de la vidéo`)
        .setThumbnail(`https://img.youtube.com/vi/${song.videoID}/maxresdefault.jpg`)
    await song_queue.text_channel.send(embed);
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    if(!server_queue){
        return message.channel.send(`There are no songs in queue 😔`);
    }

    const embed = new MessageEmbed()
        .setTitle(`Skip`)
        .setColor(`${blue}`)
        .setDescription(`:white_check_mark: Vous avez sauté une musique`)
    message.channel.send(embed);

    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();

    const embed = new MessageEmbed()
        .setTitle(`Arrêt`)
        .setColor(`${blue}`)
        .setDescription(`:white_check_mark: Vous avez arrété la musique`)
        message.channel.send(embed);
}

const queue_list = (message) => {
    msg = [];
    msgSend = "";
    for( i = 0; i < list.length; i++) {
        //message.channel.send(list[i]);
        msg.push(`${i+1} - ${list[i]}\n`)
    
    }
    msgSend = `${msg}`
    msgSend = msgSend.replace(",", "")
    //.replace(",", "")
    const embed = new MessageEmbed()
        .setTitle(`Liste d'attente`)
        .setColor(`${blue}`)
        .setDescription(`${msgSend}`)
    message.channel.send(embed);
    
}