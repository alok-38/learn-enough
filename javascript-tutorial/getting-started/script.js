// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to reverse a string
    function string_reversal(my_string) {
        let reversed_string = "";
        for (let i = my_string.length - 1; i >= 0; i--) {
            reversed_string += my_string[i];
        }
        return reversed_string;
    }

    // Get the <p> element by its tag name
    let paragraphElement = document.querySelector('p');

    // Get the text content of the <p> element
    let originalText = paragraphElement.textContent;

    // Reverse the text using the string_reversal function
    let reversedText = string_reversal(originalText);

    // Set the reversed text as the new content of the <p> element
    paragraphElement.textContent = reversedText;
});
