'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

// first, we grab the template (or empty section) that will be used to hold content for every dog that lives in our dog json file
// next, we create add the copy of our template to the page
// then, we update the content of that with each dogs info
// then put it on the page
Dog.prototype.render = function() {
  let $dogClone = $('.dog-template').clone();
  $('main').append($dogClone);

  // "find" is traversing the template to find elements
  $dogClone.find('h2').text(this.name);
  $dogClone.find('img').attr('src', this.image_url);
  $dogClone.find('p').text(this.hobbies);
  $dogClone.removeClass('dog-template');
  $dogClone.attr('class', this.name);
}

Dog.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  }

  $.ajax('data.json', ajaxSettings)
    .then(data => {
      data.forEach(item => {
        let dog = new Dog(item);
        console.log('instantiated dog obj:', dog)
        dog.render();
      })
    })
}

$(() => Dog.readJson());