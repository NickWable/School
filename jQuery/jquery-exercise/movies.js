// ## **Part Two - Movies App!**
// Build an application that uses jQuery to do the following:

// - Contains a form with two inputs for a title and rating along with a button to submit the form.
// - When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// - When the button to remove is clicked, remove each title and rating from the DOM.

// ## **Further Study**

// - Ensure that the rating of a movie can only be between 0 and 10.
// - Ensure that a title has at least 2 characters in it.
// - Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.


$(document).ready(function() {
    $('#movieForm').on('submit', function(e) {
        e.preventDefault();
        let title = $('#title').val();
        let rating = $('#rating').val();
        if (title.length < 2 || rating < 0 || rating > 10 || isNaN(rating)) {
            alert('Invalid input');
            return;
        }
        let listItem = $('<li>').addClass('movie').text(`Title: ${title}, Rating: ${rating}`).data('rating', rating).data('title', title);
        let removeButton = $('<button>').addClass('remove').text('Remove').click(function() {
            $(this).parent().remove();
        });
        listItem.append(removeButton);
        $('#list').append(listItem);
        $('#title').val('');
        $('#rating').val('');
    });

    $('#sortTitle').on('click', function() {
        let listItems = $('#list').children('li').get();
        listItems.sort(function(a, b) {
            return $(a).data('title').localeCompare($(b).data('title'));
        });
        $('#list').append(listItems);
    });

    $('#sortRating').on('click', function() {
        let listItems = $('#list').children('li').get();
        listItems.sort(function(a, b) {
            return $(a).data('rating') - $(b).data('rating');
        });
        $('#list').append(listItems);
    });
});

