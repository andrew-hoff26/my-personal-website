const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelectorSelector("body").appendChild(h2);
const sadCatImage = document.getElementById('sad-cat-image');
sadCatImage.addEventListener('click', function() {
    console.log('Image clicked!');
    sadCatImage.src = 'https://media.istockphoto.com/id/1267021092/photo/funny-winking-kitten.jpg?s=612x612&w=0&k=20&c=9PoFYkqKZ30F_ubxX90_azwsR22ENwrFnOjxV0RaoTo=';
});
