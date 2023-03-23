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
<div class="top"><span class="playing">Now Playing</span><span class="battery">(battery)</span></div>
<div>
      <div class="image"><img src="assets/album-covers/${item['image-key']}"></div>
<div class="content">
      <div class="song-title">${item['song-title']}</div>
      <div class="artist">${item.artist}</div>
      <div class="artist">${item.album}</div>
      <div class="released">${item.released}</div>
</div>
      <div class="song-length">${item['song-length']}</div>
      <div class="song"><audio controls><source src="assets/song-files/${item['song-key']}"></audiio></div>
      <br>
</div>`;
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
});