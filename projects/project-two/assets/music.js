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

    newItem.innerHTML = `
      <div class="song-title">${item['song-title']}</div>
      <div class="artist">${item.artist}</div>
      <div class="feature">${item.feature}</div>
      <div class="song-length">${item.song-length}</div>`;
    container.appendChild(newItem);        
  });
}
