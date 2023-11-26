
const jq = require('node-jq');
const jsonPath = './sample/movies.json';

const filter = '.movies[].title'

const options = {}

console.log("Star Wars titles 2");

jq.run(filter, jsonPath, options)
  .then((output) => {
    console.log(output)
  })
  .catch((err) => {
    console.error(err)
    // Something went wrong...
  })
