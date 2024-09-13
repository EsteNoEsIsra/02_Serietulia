import { readFilejson } from "./fetch.js";
// Crear las tarjetas con los datos del fetch
export async function generateCard() 
{
   
    //invoca la funcion y almacena los datos en la misma variable
    let data = await readFilejson();

    let inviContainer = document.querySelector(".cards_container");

    data.convidats.forEach((valor, i )=> {
        let card = document.createElement("article");
        let nomConvidat = document.createElement("h3");
        let descrip= document.createElement("p");
        let picture_tag= document.createElement("picture");
        let source_tag= document.createElement("source");
        let imgConvidat= document.createElement("img");
        let linkmodal = document.createElement("a");
        // escribe el nombre en el h3
        nomConvidat.textContent = valor.nom;
        descrip.textContent = valor.descripcio;
        linkmodal.textContent = valor.modal;
        //escribimos el valor de  Src
        source_tag.srcset = valor.img.srcset
        imgConvidat.src = valor.img.src;
        imgConvidat.alt = valor.img.alt;
        //adjuntar los elementos creados a al contenedor
        
        picture_tag.appendChild(source_tag);
        picture_tag.appendChild(imgConvidat)

        card.appendChild(picture_tag);

        card.appendChild(nomConvidat);

        card.appendChild(descrip);

        card.appendChild(linkmodal);

        card.setAttribute("class","carta_");

        inviContainer.appendChild(card);


    });
}