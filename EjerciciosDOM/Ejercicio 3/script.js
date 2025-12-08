// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
	const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
	const listaPaises = document.createElement("ul");
		countries1.forEach(element => {
			let li = document.createElement("li")
			li.textContent = element;
			listaPaises.appendChild(li);
		});
	document.body.appendChild(listaPaises)
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

	document.querySelector(`.fn-remove-me`).remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

	const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
	const listaCoches = document.createElement("ul");
		cars.forEach(element => {
			let li = document.createElement("li");
			li.textContent = element;
			listaCoches.appendChild(li);
		});
	
	document.querySelector(`div[data-function=printHere]`).appendChild(listaCoches)


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

	countries2.forEach(element => {
		//creo los div
		div = document.createElement("div");
		div.setAttribute("class","box");
		//creo los titulos
		h2  = document.createElement("h2");
		h2.textContent = element.title;
		h2.setAttribute("class","title");
		//creo las imagenes con su ruta especifica
		img = document.createElement("img");
		img.src = element.imgUrl;
		//agrego a div el titulo y las imagenes
		div.appendChild(h2);
		div.appendChild(img);
		//lo agrego al Body
		document.body.append(div);
	});


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
	
	let btnBorrarUltimo = document.createElement("button");
	btnBorrarUltimo.textContent="borrar ultimo elemento"
	const cajas = document.querySelectorAll(".box");
	let longitud = cajas.length;
	

	btnBorrarUltimo.addEventListener("click", ()=>{
		if(longitud>0){
			cajas[longitud-1].remove()
			longitud=longitud-1;
		}else{
			btnBorrarUltimo.remove()
		}
		console.log(longitud)
	})
		
	document.body.append(btnBorrarUltimo)
	
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

	cajas.forEach(element => {
		let btnBorrarSiMismo =   document.createElement("button");
		btnBorrarSiMismo.textContent = "para borrar a si mismo";
		btnBorrarSiMismo.addEventListener("click",()=>{element.remove()})
		element.appendChild(btnBorrarSiMismo)
	});