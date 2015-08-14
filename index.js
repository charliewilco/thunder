(function(){
  document.querySelectorAll('data-thunder');
};




function Thunder(){
  var images = document.querySelectorAll('[data-thunder]');
  var thunderImages = images[0].getAttribute('data-thunder');
  console.log(thunderImages);
}

Thunder();
