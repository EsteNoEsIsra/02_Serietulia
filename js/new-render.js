/* **********************************************/
/*                 FETCH && JSON                */
/* **********************************************/
import { GetJSONdata } from "./fetch.js";

//Sin templetate
export async function CreateCards() {
    let data = await GetJSONdata("json/guests.json");
    let guestsContainer = document.getElementById("guests");

    if (!data)
        return ;
    console.log(data);
    data.forEach(element => {

        /* Create elemenets */
        let card = document.createElement("article");
        let dd = document.createElement("div")
        let nom = document.createElement("h3");
        let descr = document.createElement("p");
        /* ---------------- */

        /* Place Content */
        nom.textContent = element.name;
        descr.textContent = element.description;
        /* ------------- */

        /* Join elements */
        card.classList.add("guest-card");
        card.appendChild(document.createElement("picture"));
        card.appendChild(dd);
        dd.appendChild(nom);
        dd.appendChild(descr);

        guestsContainer.appendChild(card);
        /* ------------- */
    });
}
/************************************************/