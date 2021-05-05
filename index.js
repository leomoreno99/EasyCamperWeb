let header = document.getElementById("header");
let titulo = document.getElementById("titulo");
let tagline = document.getElementById("tagline");
let tarjetas = document.getElementsByClassName("card");

console.log(tarjetas[2].className);
// tarjetas.setAttribute("class", "card animacionTarjetas");


window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    
    let posicion = () => {
        // console.log(value)
        if (value < 956.566650390625){
            header.style.bottom = "auto";
            header.style.top = 0 + "px";
            return "fixed";
        }
        else{
            header.style.bottom = 0 + "px";
            header.style.top = "auto";
            return "absolute";
            
        }
    }


        if (value > 408){
            for(i=0; i<tarjetas.length; i++){
                tarjetas[i].className += " animacionTarjetas";
            }
        }


    header.style.position = posicion();
    header.style.background = `rgba(0, 134, 100, ${value/1000})`;



    // titulo.style.translate = value * 2 + 'px';
    // tagline.style.top = value * 0.2 + 'px';
})