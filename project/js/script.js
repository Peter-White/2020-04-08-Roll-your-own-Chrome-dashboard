$(document).ready(function() {
  let $title = $("h1#title");
  let $data = $("div#data");
  const data = {
    "Dog" : "https://random.dog/woof.json",
    "Cat" : "https://aws.random.cat/meow"
  };


  let random = Math.floor(Math.random() * Object.keys(data).length);
  let head = Object.keys(data)[random];
  $title.html(head);

  switch(random){
    case 0:
    $.get(data[head]).done(function(data) {
      $data.html(`<img src=${data.url} />`)
    });
      break;
    case 1:
    $.get(data[head]).done(function(data) {
      $data.html(`<img src=${data.file} />`)
    });
      break;
  }
});
