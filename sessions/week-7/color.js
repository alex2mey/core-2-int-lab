


fetch("color.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
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
});