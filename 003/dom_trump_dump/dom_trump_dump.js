console.log('hello dom_trump_dump!');

var descriptions;
var links;
var divs;

function setup() {
  descriptions = selectAll('.st');
  links = selectAll('a');
  divs = selectAll('.kno-ecr-pt');
}

function draw() {
  for (var i = 0; i < descriptions.length; i++) {
    var thisDescContent = descriptions[i].html();
    var removedTrump = thisDescContent.replace('Trump', '<dump style="color:rgb('+int(random(255))+','+int(random(255))+','+int(random(255))+');">Dump</dump>');
    descriptions[i].html(removedTrump);
  }

  for (var i = 0; i < divs.length; i++) {
    var thisDivContent = divs[i].html();
    var removedTrump = thisDivContent.replace('Trump', '<dump style="color:rgb('+int(random(255))+','+int(random(255))+','+int(random(255))+');">Dump</dump>');
    divs[i].html(removedTrump);
  }

  for (var i = 0; i < links.length; i++) {
    var thisLinkContent = links[i].html(); 
    var removedTrump = thisLinkContent.replace('Trump', '<dump style="color:rgb('+int(random(255))+','+int(random(255))+','+int(random(255))+');">Dump</dump>');
    links[i].html(removedTrump);
  }
}
