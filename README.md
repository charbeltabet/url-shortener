# Url shortener
Simple url shortener web app with basic rebranding features such as custom title and description.

Demo here https://gentle-thicket-01498.herokuapp.com/

# Installation
To get a local version running on your machine you need:
- node and npm [here](https://nodejs.org/en/download/).
- a mongodb cluster you can get a 512 mb [here](http://cloud.mongodb.com/) for free.

After that, navigate to the .env file and:
- replace `DBURL` by your mongodb cluster url
- change `hostName` if you're using a custom domain.

Then install dependencies and run:
```
$ npm install
$ npm start
```