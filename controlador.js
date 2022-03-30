alert("Buenas Tardes")

let boton = document.getElementById("boton")
boton.addEventListener("click", function(evento){
    alert ("hiciste click")
    let selector = document.getElementById("selector").Value
    alert ("Usted eligio el" + selector)
    switch(selector){
        case"1":
         alert("Elejiste el #1")
        break
        case"2":
         alert("Elejiste el #2")
        break  
        case"3":
         alert("Elejiste el #3")
        break 
        case"4":
         alert("Elejiste el #4")
        break 
        case"5":
         alert("Elejiste el #5")
        break 
        case"6":
         alert("Elejiste el #6")
        break 
        case"7":
         alert("Elejiste el #7")
        break 
        case"8":
         alert("Elejiste el #8")
        break 
        case"9":
         alert("Elejiste el #9")
        break 
        case"10":
         alert("Elejiste el #10")
        break 
        default:
            alert("opcion no valida")
    }
})