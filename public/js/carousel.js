var intervalId = window.setInterval(function(){
    changeImg();
  }, 3000);

const carousel = ["/img/carouselHomeBaixo1.jpg", "/img/222.jpg", "/img/carouselHomeBaixo3.png"];
let index = 0;

changeImg = () => {
    if (index >= carousel.length) index = 0;

    document.getElementById("bass").src = carousel[index];
    index++;
};

