import { generateCard } from "./render.js";
import { carusel_container } from "./carru_movile.js";

generateCard();

//if (window.matchMedia("(min-width: 1199px)").matches)


window.addEventListener("resize", ()=> 
{
    if (window.screen.width < 1199)
    {
        carusel_container();
    }
    else 
        console.log("resize!!");
});


