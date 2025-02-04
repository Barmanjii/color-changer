// Select all elements with the class 'button'
const buttons = document.querySelectorAll('.button');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    // Get the id of the clicked button
    const colorId = event.target.id;
    
    document.body.style.backgroundColor = colorId;
  });
});
