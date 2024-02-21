console.log("Let's get this party started!");
const $gifArea = $("#gifArea");
const $searchInput = $("#searchInput");

//Add Gif
function addGif(res) {
  if (res.data.length > 0) {
      let randomIdx = Math.floor(Math.random() * res.data.length);
      let $newCol = $("<div>", { class: "gif-container" });
      let $newGif = $("<img>", {
          src: res.data[randomIdx].images.original.url,
          class: "gif"
      });
      $newCol.append($newGif);
      $gifArea.append($newCol);
  } else {
      console.log('No results found for the given search term.');
  }
}

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  try {
      const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
          params: {
              q: searchTerm,
              api_key: "sM84nJmV8FVFp3De8e5neBVO0jRkYqQ9"
          }
      });
      console.log(response);
      addGif(response.data);
  } catch (error) {
      console.error(error);
  }
});

//Remove Images
  $("#removeImages").on("click", function() {
    $("#gifArea").empty();
  });
