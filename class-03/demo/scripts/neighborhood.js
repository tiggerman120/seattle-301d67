'use strict';

let templateId = '#neighborhood-template';
let neighborhoods = [];

function Neighborhood(rawDataObject) {
  for (let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {
  // 1. grab the template from our HTML document
  let template = $(templateId).html();
  // 2. use Mustache to "render" the new html by merging it with data
  let html = Mustache.render(template, this);
  // 3. return our html so it can be put on the page
  return html;
}

neighborhoodDataSet.forEach(item => {
  neighborhoods.push(new Neighborhood(item));
});

console.log('original data set from the dataSet.js file', neighborhoodDataSet);
console.log('our custom data array:', neighborhoods);

neighborhoods.forEach(hood => {
  $('#neighborhoods').append(hood.toHtml());
});