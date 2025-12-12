// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

    const clickEvent = document.querySelector(".click");
    clickEvent.type="button";
    clickEvent.value = "ejercicio 1.1"
    clickEvent.addEventListener("click",(event)=> { 
        console.log(event); //evento
        console.log(event.target); //boton al que se le hace target
    })
    
    


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

    const focusEvent = document.querySelector(".focus");
    focusEvent.value = "Seleccióname";
    focusEvent.addEventListener("focus", (event) =>{
        event.target.style.background = "black";
        event.target.style.color = "white";
        event.target.value = "Estas haciendo foco aquí";
        console.log(event.target)
        console.log(event)
    }  )

    focusEvent.addEventListener("blur",(event) =>{
        event.target.style.background = "";
        event.target.style.color = "";
        event.target.value = "Seleccióname :(";
        console.log(event.target)
        console.log(event)
    }  )


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

    const inputEvent = document.querySelector(".value");
     inputEvent.addEventListener("input",(event) =>{
        console.log("valor :",event.target.value)
    }  )