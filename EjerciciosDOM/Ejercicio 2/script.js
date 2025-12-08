// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
    
    const div1 = document.createElement("div");
    div1.className = "divisor1"
    document.body.appendChild(div1);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
    
    const div2 = document.createElement("div")
    div2.className = "divisor2"
    const p1 = document.createElement("p");
    p1.className = "parrafo"
    div2.appendChild(p1)
    document.body.appendChild(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

    const div3 = document.createElement("div");
    div3.className = "divisor3";
    for(i=1;i<=6;i++){
        parrafo =document.createElement("p");
        parrafo.className = `parrafo ${i}`;
        div3.append(parrafo);
    };
    document.body.appendChild(div3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

    const p2 =document. createElement("p");
    p2.textContent = 'Soy dinámico!';
    document.body.append(p2);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

    let textoRaro = document.querySelector("h2.fn-insert-here");
    textoRaro.textContent = "Wubba Lubba dub dub";


// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.

    const listaApps = document.createElement("ul");
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    apps.forEach(element => {
        let lista = document.createElement("li");
        lista.textContent = element;
        listaApps.appendChild(lista);
    });
    document.body.appendChild(listaApps);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
    
    const eliminar = document.querySelectorAll(".fn-remove-me");
    eliminar.forEach(elemento => {
        elemento.remove()
    });

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

    let divisores = document.querySelectorAll("div")[0]; // o document.querySelector("div");
    let p3 = document. createElement("p");
    p3.textContent = 'Voy en medio!';
    divisores.insertAdjacentElement("afterend",p3)
    

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

    let divInsert = document.querySelectorAll(".fn-insert-here");
    divInsert.forEach(element => {
        p = document. createElement("p");
        p.textContent = 'Voy dentro!';
        element.appendChild(p)
    });


