# [![][logo-img]][logo] emojis

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][version-img]][version]

Replaces emoji codes (like `:smiley:`) for emoji images (like :smiley:) or unicode characters (like 😃).

[logo]:                #-emojis
[logo-img]:            https://raw.githubusercontent.com/tallesl/node-emojis/master/logo.gif
[build]:               https://travis-ci.org/tallesl/node-emojis
[build-img]:           https://travis-ci.org/tallesl/node-emojis.svg
[coverage]:            https://coveralls.io/r/tallesl/node-emojis
[coverage-img]:        https://coveralls.io/repos/tallesl/node-emojis/badge.svg
[dependencies]:        https://david-dm.org/tallesl/node-emojis
[dependencies-img]:    https://david-dm.org/tallesl/node-emojis.svg
[devdependencies]:     https://david-dm.org/tallesl/node-emojis#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/node-emojis/dev-status.svg
[version]:             https://npmjs.com/package/emojis
[version-img]:         https://badge.fury.io/js/emojis.svg

## Usage

```js
$ npm install emojis
(...)
$ node
> let emojis = require('emojis')
undefined
> emojis.unicode('I :heart: you!')
'I ❤️ you!'
> emojis.html('I :heart: you!', 'http://example.org/images/')
'I <img class="emoji" width="20" height="20" src="http://example.org/images/heart.png" alt="heart"> you!'
```

## Emoji codes and images

The emoji codes used are the ones on [Emoji cheat sheet].
Their images are also provided here for you to use ([images.zip]), but consider [its copyright].

[Emoji cheat sheet]: http://emoji-cheat-sheet.com
[images.zip]:        https://raw.githubusercontent.com/tallesl/node-emojis/master/images.zip
[its copyright]:     https://github.com/arvida/emoji-cheat-sheet.com/blob/master/LICENSE

## Aligning the HTML image

One way to align the emoji image within the text would be using `align="absmiddle"`, just as GitHub does, but I didn't
do it because [it's obsolete].

A suggestion is to use [the following CSS]:

```css
.emoji {
  margin-bottom: .25em;
  vertical-align: middle;
}
```

[it's obsolete]:     https://html.spec.whatwg.org/multipage/obsolete.html#attr-img-align
[the following CSS]: http://stackoverflow.com/a/5203632/1316620
