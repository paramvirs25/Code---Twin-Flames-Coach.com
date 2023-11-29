
function shuffleToolsList() {
    // Get the div element with class="tfcToolsList"
    let div = document.querySelector(".tfcToolsList");

    // Get all the div elements with class="vlp-link-title" inside the div
    let links = div.querySelectorAll(".vlp-link-title");

    // Create an empty array to store the text content
    let array = [];

    // Loop through the links and push the text content to the array
    for (let link of links) {
        array.push(link.textContent);
    }

    // Return the array
    console.log(array);

    // Get a random index from 0 to array.length - 1
    let randomIndex = Math.floor(Math.random() * array.length);

    // Return the element at the random index
    //alert(array[randomIndex]);

    // Get the element with class="tfcShuffleToolListResult"
    let element = document.querySelector(".tfcShuffleToolListResult");

    // Set the text content of the element to a desired value
    element.textContent = array[randomIndex];

    //return array[randomIndex];
    return false;
}