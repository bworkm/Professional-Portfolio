var allProjects = [];

var Project = function(input) {
  this.title = input.title,
  this.category = input.category,
  this.authorUrl = input.authorUrl,
  this.publishedOn = input.publishedOn,
  this.body = input.body
}

Project.prototype.toHtml = function() {
  var $newProjectItem = $('li.template').clone().removeClass('template');

  $newProjectItem.attr('data-category', this.category);
  $newProjectItem.find('h1').text(this.title);
  $newProjectItem.find('a').text(this.authorUrl);
  $newProjectItem.find('article-body').html(this.body);
  $newProjectItem.find('time')
                 .attr('datetime', this.publishedOn)
                 .text('Published ' + this.publishedOn);
  return $newProjectItem;
}

projectList.forEach(function(projectListItem) {
  allProjects.push(new Project(projectListItem));
});

allProjects.forEach(function(a){
  $('#projectListNav').append(a.toHtml());
});
