const title = $("div#site-title > a");
const desc = $("div#site-description");

let color = Math.random() * 0xFFFFFF;

let increasing = true;

setInterval(run, 100);

function run() {
    color += Math.random() * 0xFF * (increasing ? 1 : -1);
    if (color > 0xFFFFFF) {
        increasing = false;
        color = 0xFFFFFF;
    } else if (color < 0x0) {
        increasing = true;
        color = 0x0;
    }
    let style = Math.floor(color).toString(16);;
    console.log(style);
    style = "color:#" + "0".repeat(6 - style.length) + style + " !important;";
    title.attr("style", style);
    desc.attr("style", style);
}
