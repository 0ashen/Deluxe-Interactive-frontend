## BUILDER - <a href="https://github.com/tars/tars">Tars</a> nodejs version required - v8.17.0

##### Magical numbers:<br>
###### `3.75 = 375 px mobile design layout / 100`
###### `14.4 = 1440 desktop mobile layout / 100`
##### `@include media(())` = mixin for media queries, encapsulating them inside css property в scss/mixins/

##### Entry point js: `markup/components/main.js`
##### Scss vars _`markup/static/scss/vars.scss`_

#### Docker 
`docker build -t deluxe-tars-cli .`
`docker run -itp 3004:3004 -v /absolute_page_project:/project deluxe-tars-cli sh -c "cd /project && npm i && tars dev"`
