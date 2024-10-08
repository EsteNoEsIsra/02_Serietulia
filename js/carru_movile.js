export function carusel_container()
{
    let slider = document.querySelector(".root_container");
    let innerSlider = document.querySelector(".cards_container");

    let pressed = false;
    let startx;
    let x;

    slider.addEventListener("mousedown", (e) => {
        pressed = true;
        startx = e.offsetX - innerSlider.offsetLeft;
    //    console.log(`OffsetX: ${e.offsetX}, InnerSlider OffsetLeft: ${innerSlider.offsetLeft}`);
        slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mouseenter", () => {
         slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseup", () => {
         slider.style.cursor = "grab";
    });

    window.addEventListener("mouseup", () => {
        pressed = false;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!pressed) return;
        e.preventDefault();

        x = e.offsetX;
     //   console.log(`x: ${x}, startx: ${startx}`);
     //   console.log(`Diff: ${x - startx}`);

        innerSlider.style.left = `${x - startx}px`;
        checkBoundary();
    });

    function checkBoundary() {
        let outer = slider.getBoundingClientRect();
        let inner = innerSlider.getBoundingClientRect();

        if (parseInt(innerSlider.style.left) > 0) {
            innerSlider.style.left = "0px";
        }
        if (inner.right < outer.right) {
            innerSlider.style.left = `-${inner.width - outer.width}px`;
            
            //console.log(innerSlider.style.left)
        }
    }
}
