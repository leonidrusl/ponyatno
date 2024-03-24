function scrollToTarget() {
    const target = document.getElementById('target-location');
    target.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function scrollToTarget2() {
    const target = document.getElementById('target-location2');
    target.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function scrollToTarget3() {
    const target = document.getElementById('target-location3');
    target.scrollIntoView({
      behavior: 'smooth',
    });
  }


document.querySelectorAll('.image-container img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
}
document.title = "Мой первый сайт";