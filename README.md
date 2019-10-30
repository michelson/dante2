# Dante 2 - The rematch

## just another medium clone built on top of DraftJs

> Dante 2 is a complete rewrite of [DanteEditor](https://michelson.github.io/Dante). This version is built on top of Facebook's Draft-Js and reaches all Dante's features with a shiny ultra mega super uber maintainable architecture.

See the demo at: [https://michelson.github.io/dante2/](https://michelson.github.io/dante2/)

## Why rewrite a new version of Dante?

The previous version of Dante relies a lot on DOM manipulation which causes a mix of presentation and logic. Even with their modular plugin system this condition suppose an sphagetti model to work with on every feature. The biggest problem with this approach is: if you want to make a change that affects the presentation of your users content, let's say you might want to change the default markup for paragraphs, you'll probably end updating all your content in your database, because dealing with "DOM only" suppose that you are going to save html into database, right ?


## A redesign was needed!

Draft-Js handles selection, ranges and markup blocks as a data layer contained in a structure known as editorState, with a clear separation on how rendering, styling and interaction works. So you save content data, not html. That's awesome because you can change the appearance of articles (styles & markup) without database changes.

In Draft every change provided from user input is stacked in this editorState building an history of changes, out of the box. This means that pasting, undo/redo and replace/insert blocks at certain selection points are basically calls to the DraftJs API that updates the editorState without DOM manipulation. Also, all the custom blocks are composed as React components!. So, this version have some dependencies which are included in source. DraftJs, React, Immutable. no Jquery.

**New Features:**
+ Improved undo/redo.
+ Save Content as a data JSON structure.
+ Load Content as a data JSON structure.
+ Handle image blocks on Copy/Paste and Drop.
+ Global storage lock to handle file uploads.
+ Styled components Theme support.

**Features**:

+ Image upload for paste html.
+ Image upload for legacy images on existent texts.
+ The medium (+) Tooltip to embed or upload media.
+ Tab navigation.
+ Pluggins are React components

**Embeds**:

+ Image Uploader with preview and caption option with a lock system.
+ Embed data for pasted link through OEmbed services.
+ Embed media information for pasted links through OEmbed services.
+ Add or remove tooltip buttons with ease with plugin system.
+ Add custom blocks many with custom options

## Installation

`npm install Dante2@next` or `yarn add Dante2@next`

## Usage

Since version 0.5.x there is only a component based way to use the editor. If you need a non component based use versions below 0.5.x

```
Component Based
```javascript
<DanteEditor
  config={this.config}
  content={this.demo}
/>
```

### Options:

Many configuration options and plugin usage can be found on the documentation page:

See [https://michelson.github.io/dante2/doc.html](https://michelson.github.io/dante2)


## Development

### Installation
+ `git clone https://github.com/michelson/dante2`

**dependencies**
 
+ `npm install` or `yarn install`
 
### Run Dante2

+ `npm start` or `yarn start`

Then open http://localhost:8080 

### Building

+ `npm build` or `yarn build`

#### Upload test server (optional)

For development purposes we have a server, written in ruby, to handle file uploading
 
+ `bundle install`

+ `bundle exec rackup`

and open http://localhost:9292

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/michelson/dante2/graphs/contributors"><img src="https://opencollective.com/dante2/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/dante2/contribute)]

#### Individuals

<a href="https://opencollective.com/dante2"><img src="https://opencollective.com/dante2/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/dante2/contribute)]

<a href="https://opencollective.com/dante2/organization/0/website"><img src="https://opencollective.com/dante2/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/1/website"><img src="https://opencollective.com/dante2/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/2/website"><img src="https://opencollective.com/dante2/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/3/website"><img src="https://opencollective.com/dante2/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/4/website"><img src="https://opencollective.com/dante2/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/5/website"><img src="https://opencollective.com/dante2/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/6/website"><img src="https://opencollective.com/dante2/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/7/website"><img src="https://opencollective.com/dante2/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/8/website"><img src="https://opencollective.com/dante2/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/dante2/organization/9/website"><img src="https://opencollective.com/dante2/organization/9/avatar.svg"></a>

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use Dante2 under the terms of the GPLv3.[Read more about Dante2's license](https://michelson.github.io/dante2/#/license).


### Alternatives

If you are looking for alternatives you can always use the [MIT licensed Dante (1)](https://michelson.github.io/Dante) or choose along others [medium clones](http://howtox.com/medium-editor-clones-in-js) or check out [many many awesome draft-js based editors](https://github.com/nikgraf/awesome-draft-js)

### Acknowledgments

The code from `tools` is based on the build tools from [ReactBoostrap](https://github.com/react-bootstrap/react-bootstrap)
