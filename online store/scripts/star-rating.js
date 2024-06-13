const starButton = document.querySelectorAll(".star-rating button");

const stars = document.querySelectorAll(".star-rating i");

starButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    const isClicked = button.classList.toggle('clicked');
    
    stars.forEach((star, starIndex) => {
      star.style.color = starIndex <= index ? (isClicked ? 'yellow' : 'grey') : 'grey';
    });

    // Reset other buttons
    starButton.forEach((otherButton, otherIndex) => {
      if (otherIndex !== index) {
        otherButton.classList.remove('clicked');
      }
    });
  });
});
