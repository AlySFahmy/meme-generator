
let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");



let url = "https://meme-api.com/gimme/";

// Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

// Function To Get Random Meme
function getMeme() {
  // Choose a random subreddit from the subreddits array
  let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

  // Fetch data from the api
  fetch(url + randomSubreddit).then(function(resp) {
      return resp.json();
    }).then(function(data) {
      let memeImg = new Image();

      // Display meme image and title after the image loads
      memeImg.onload = function() {
        meme.src = data.url;
        title.innerHTML = data.title;
      };

      memeImg.src = data.url;
    });
}


getMemeBtn.addEventListener("click", getMeme);

window.addEventListener("load", getMeme);
