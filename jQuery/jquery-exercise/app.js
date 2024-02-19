// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(function() {
    console.log("Let’s get ready to party with jQuery!");
});

// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass("image-center");

// 3. Remove the last paragraph in the article.
$("article p").last().remove();

// 4. Set the font size of the title to be a random pixel size from 0 to 100.
let randomSize = Math.floor(Math.random() * 101);
$("h1").css("font-size", randomSize);

// 5. Add an item to the list; it can say whatever you want.
$("ol").append($("<li>", {text: "Let's go to the beach!"}));

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside").empty().append("<p>", {text: "Sorry about the list!"});

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$("input").on("change", function() {
    let red = $("input").eq(0).val();
    let green = $("input").eq(1).val();
    let blue = $("input").eq(2).val();
    $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on("click", function() {
    $(this).remove();
});

