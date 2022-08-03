const $search = $("#search")
const $gifSection = $("#gifsection")

function addGif(res){
    let numOfResults = res.data.length
    let resultsIdx = Math.ceil(Math.random() * numOfResults);
    let $newGif = $("<img>", {
        src: res.data[resultsIdx].images.original.url,
        });
    $gifSection.append($newGif);
}

$("form").on("submit", async function(e){
    e.preventDefault();
    let search = $search.val();
    $search.val("");

    const response = await axios.get("https://api.giphy.com/v1/gifs/search", 
    { params: 
        { 
            q: search, 
            api_key: "y7VecEcpxZAXicJGQFAy9ZdroRnoQeRp",
        }
    });
    addGif(response.data);
})

$("#remove").on("click", function(){
    $gifSection.empty();
})

// removeBtn.addEventListener('click', function(){
//     $gifSection.empty();
// })