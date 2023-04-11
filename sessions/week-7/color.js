
const myList = document.querySelector("ul");
const myRequest = new Request("color.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
	console.log(data);
	console.log(data.colors[1].hexcode);

    for (const color of data.colors) {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createElement("strong")).textContent =
        color.colorname;
      listItem.append(` has the following hex value ${color.hexcode} `);
      listItem.appendChild(
        document.createElement("strong")
      ).style.background = `${color.hexcode}`;
      myList.appendChild(listItem);
    }
	console.log(data.colors[1].hexcode);

  })
  .catch(console.error);

/* fetch("color.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	data.forEach( function(item,index){
		let placeholder = document.querySelector("#data-output");
		let out = "";
		let newItem = document.createElement("div");
		newItem.classList.add(item.color);}

		newItem.innerHTML = `
		<div class="grid">
				<div>color name ${item.colorname}</div>
				<div>hexcode ${item.hexcode}</div>
				<div class ="backgroundcolor">color ${item.color}</div>
			</div>`;


 for(let product of products){
		out += `
			<tr>
				<td>${product.colorname}</td>
				<td>${product.hexcode}</td>
                <td>${product.color}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;

	/*newItem.innerHTML=`
	<span class="color">${item.color}${item.hexvalue}</span>`;
	container.appendChild
}); */