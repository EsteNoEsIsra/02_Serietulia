/* **********************************************/
/*                 FORMALIDATION                */
/* **********************************************/
const TOPFORM = document.getElementById("newsletter-topform");

const MIDDLEFORM = document.getElementById("newsletter-middleform");


TOPFORM.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inEmail = document.getElementById("top-email");
    let email = inEmail.value;
    let checkbox = document.getElementById("top-checkbox").checked;

    let emRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (!emRegex.test(email)){
        alert("Email invalido");
        inEmail.style.outline = "2px solid red";
        return ;
    }
    else if (!checkbox){
        alert("Deves acceptar los terminos y condiciones");
        return ;
    }
});
MIDDLEFORM.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inEmail = document.getElementById("middle-email");
    let email = inEmail.value;
    let checkbox = document.getElementById("middle-checkbox").checked;

    let emRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (!emRegex.test(email)){
        alert("Email invalido");
        inEmail.style.outline = "2px solid red";
        return ;
    }
    else if (!checkbox){
        alert("Deves acceptar los terminos y condiciones");
        return ;
    }
});
/* **********************************************/