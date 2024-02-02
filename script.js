// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Array of image URLs
    var imageArray = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg",
        // Add more image URLs as needed
    ];

    // Get a random index to select a random image
    var randomIndex = Math.floor(Math.random() * imageArray.length);

    // Get the image element by its ID
    var randomImageElement = document.getElementById("randomImage");

    // Set the source attribute of the image element to the randomly selected image URL
    randomImageElement.src = imageArray[randomIndex];
});
