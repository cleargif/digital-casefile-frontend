# digital-casefile

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Requirements

The usual suspects: Node, Bower

Other:
- [Yeoman](http://yeoman.io/),
- Yeoman Angular Generator `npm install -g generator-angular`,
- [Heroku Toolbelt](https://toolbelt.heroku.com/)


## Getting started:

1. Clone this git repo
2. Run `npm install` & `bower install`
3. Run `heroku git:clone --app "dcf-frontend" dist` (make sure you have access to the Heroku app, see Mark Ford)

## Development

Run `grunt serve` & `grunt karma:start` in two terminals for preview

## Build

Run `grunt build` for building

## Testing

- Run `grunt karma:unit` for unit testing
- Run `grunt karma:start` in a seperate terminal window for continuous testing

## Deploy

Run `grunt deploy` will build the app, commit and push the `dist` folder to heroku
