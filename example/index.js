'use strict'

// example
import getLinks from 'get-links'

// get links from the es6 course
const url = 'https://egghead.io/courses/learn-es6-ecmascript-2015'
const selector = '.title a'

getLinks(url, selector)
  .then(links => {
    console.log('Egghead Video Links:')
    links.forEach(v => console.log(v))
  })