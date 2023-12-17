document.addEventListener("DOMContentLoaded", function() {
    // Function to reverse a string
    function string_reversal(my_string) {
        let reversed_string = "";
        for (let i = my_string.length - 1; i >= 0; i--) {
            reversed_string += my_string[i];
        }
        return reversed_string;
    }

    // Prompt the user for input
    let userString = prompt("Enter a string:");

    // Check if the user entered a string
    if (userString !== null) {
        // Get the <p> element by its tag name
        let paragraphElement = document.querySelector('p');

        // Reverse the user's input using the string_reversal function
        let reversedText = string_reversal(userString);

        // Set the reversed text as the new content of the <p> element
        paragraphElement.textContent = reversedText;
    } else {
        // Handle the case where the user clicked "Cancel" or entered an empty string
        console.log("User canceled or entered an empty string.");
    }
});
