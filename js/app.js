let line = document.querySelector('.text');
let marquee = document.querySelector('.marquee');

let corell = line.offsetWidth / marquee.offsetWidth;
if (corell > 1) {
    for (var i = 0; i < Math.floor(corell); i++) {
        Array.prototype.slice.call(marquee.children).forEach(el => {

            let newEl = el.cloneNode(true);
            marquee.appendChild(newEl);
            marquee.appendChild(document.createTextNode(' '))
        })
    }
}