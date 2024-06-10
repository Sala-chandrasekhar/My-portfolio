document.addEventListener('DOMContentLoaded', function () {
    animateLetters();
  });
  
  function animateLetters() {
    const h1Text = document.querySelector('h1').textContent;
    const h1Element = document.querySelector('h1');
    const letters = h1Text.split('');
  
    // Clear the content of the h1 tag
    h1Element.innerHTML = '';
  
    // Use setInterval to continuously append letters with a delay
    let index = 0;
    const intervalId = setInterval(() => {

    const span = document.createElement('span');
    span.textContent = letters[index];
    h1Element.appendChild(span);
    index++;
    if (index == letters.length) {
        clearInterval(intervalId);
        setTimeout(() => {
            animateLetters();
        },1000);
    }
}, 500); // Adjust the delay (in milliseconds) as needed
}
  