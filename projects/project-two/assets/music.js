//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python

fetch('./assets/music.json')
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => console.log(error));



function displayData( data ){
  data.forEach( function(item, index){
    console.log(item, index);

    let newItem = document.createElement("div");
    newItem.classList.add('item');
    if( index == 0){
      newItem.classList.add('active');
    }
    newItem.dataset.color = item.mood;
    newItem.innerHTML = `
    <section>
<div class="top"><span class="playing">Now Playing</span></div>
<div class="songnumber">${item.key} of 42</div>
<div class="inner-screen">
      <div class="image"><img src="assets/album-covers/${item['image-key']}"></div>
<div class="content">
${item['song-title']}
<br>
<br>
${item.artist}
<br>
<br>
${item.album}
<br>
<br>
${item.released}
<br>
<br>
</div>
</div>
      <div class="song"><audio class ="songplayer" id="songplayer" controls><source src="assets/song-files/${item['song-key']}"></audiio></div>
      <div class="song-length">${item['song-length']}</div>
      <br>
</div>
</section>`;
    container.appendChild(newItem);  
    
   
  });
}

document.getElementById('next').addEventListener('click', function(){
  let current = document.querySelector('.active');
  let next = current.nextElementSibling;
  current.classList.remove('active');
  next.classList.add('active');
  let moodclass = next.dataset.color;
  document.querySelector('body').classList.add(moodclass);
  let previous = current.previousElementSibling;
  let moodcolor = previous.dataset.color;
  document.querySelector('body').classList.remove(moodcolor);
  /* for (let i = 0; i < key.length; i++){
    container++;
  } */
});

document.getElementById('back').addEventListener('click', function(){
  let current = document.querySelector('.active');
  let back = current.previousElementSibling;
  current.classList.remove('active');
  back.classList.add('active');
  let moodcolor = back.dataset.color;
  document.querySelector('body').classList.add(moodcolor);
  let previous = current.nextElementSibling;
  let moodclass = previous.dataset.color;
  document.querySelector('body').classList.remove(moodclass);
});



/* var myAudio = document.getElementById("songplayer");
function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}; */