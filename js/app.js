var allProjects = [];

$(document).ready(function() {
    $('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000
			});
});

var Project = function(input) {
  for (key in input) {
    this[key] = input[key];
  }
  // this.title = input.title,
  // this.category = input.category,
  // this.authorUrl = input.authorUrl,
  // this.publishedOn = input.publishedOn,
  // this.body = input.body
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  // var $newProjectItem = $('li.template').clone().removeClass('template');
  // $newProjectItem.attr('data-category', this.category);
  // $newProjectItem.find('h1').text(this.title);
  // $newProjectItem.find('a').text(this.authorUrl).attr('href', this.authorUrl);
  // $newProjectItem.find('article-body').html(this.body);
  // $newProjectItem.find('time')
  //                .attr('datetime', this.publishedOn)
  //                .text('Published ' + this.publishedOn);
  // return $newProjectItem;
  return templateRender(this);
}

function getData() {
  if (localStorage.portfolioData) {
    console.log('found data in localStorage');
    // load from local storage
  } else {
    // read from file
    console.log('data not found in localStorage');
    var temp = $.getJSON('../data/projects.old.json')
    console.log('temp:', temp);
    localStorage.setItem('portfolioData', JSON.stringify(temp));
    console.log(JSON.stringify(temp));
    // write to local storage
  }
}

projectList.forEach(function(projectListItem) {
  allProjects.push(new Project(projectListItem));
});

allProjects.forEach(function(a){
  $('#fullpage').append(a.toHtml());
});
