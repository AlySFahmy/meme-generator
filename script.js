
let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");



let url = "https://meme-api.com/gimme/";

let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

function getMeme() {
  
  let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

 
  fetch(url + randomSubreddit).then(function(resp) {
      return resp.json();
    }).then(function(data) {
      let memeImg = new Image();

    
      memeImg.onload = function() {
        meme.src = data.url;
        title.innerHTML = data.title;
      };

      memeImg.src = data.url;
    });
}


getMemeBtn.addEventListener("click", getMeme);

window.addEventListener("load", getMeme);
