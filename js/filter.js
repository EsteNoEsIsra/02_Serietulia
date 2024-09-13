/* //////////////////////////////////////////// */
/*                    FILTER                    */
/*  only wiht js vanilla                        */
/* //////////////////////////////////////////// */

/* Get the filters */
const FILTERS = document.querySelectorAll(".filters button");

/* Content that will be filtered */
const CARDS = document.querySelectorAll(".caratule-card");

for (let i = 0; i < FILTERS.length; i++)
{
    FILTERS[i].addEventListener("click", ()=> {
        ActualFilter(i);
        Filter(FILTERS[i]);
    });
}

function ActualFilter(actual) {
    for (let i = 0; i < FILTERS.length; i++)
        FILTERS[i].classList.remove("selected");
    FILTERS[actual].classList.add("selected");
}

function Filter(actual) {
    let tmp;

    for (let i = 0; i < CARDS.length; i++)
    {
        tmp = CARDS[i].getAttribute("filter-by");
        CARDS[i].classList.add("hide");
        if (actual.getAttribute("filter-name") == "*")
            CARDS[i].classList.remove("hide");
        else if (tmp.match(actual.getAttribute("filter-name")))
            CARDS[i].classList.remove("hide");
    }
}

/* ******************************************** */