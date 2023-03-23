//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python

fetch('./assets/emojis.json')
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => console.log(error));



function displayData( data ){
  data.forEach( function(item, index){
    console.log(item, index);
    let usage = item['general-usage'] * 10;
    console.log('usage', usage);
    let newItem = document.createElement("div");
    newItem.classList.add("icon");
    newItem.classList.add(item.categorykey);
    newItem.style.cssText = `font-size: ${usage}px`;
    newItem.innerHTML = `
      <div class="top></div>
      <div class="content">
      <div class="category">${item.category}</div>
      <div class="emoji">${item.emoji}</div>
      <div class="emoji">${item.description}</div>
      <br>
      <div class="phrase">${item.sample}</div>
      </div>`;
    container.appendChild(newItem);    
  });
}
