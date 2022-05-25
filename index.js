
const sout = console.log.bind();
const id = id => document.getElementById(id);
const img = (src, index) => {
    const img = document.createElement("img")
    img.src = src;
    img.width = 300;
    img.height = 200;
    img.style.position = "absolute";
    img.style.left = ~~ (Math.random() * window.innerWidth - 300) + "px"
    img.style.top = index * 200 + "px"; // i hate my life!
    img.style.zIndex = -1;
    img.speed = 2;
    document.body.appendChild(img)
    return img
}
let java;
function setup(){
    java = new Java()
}

function draw(){
    java.gravity()
    java.updatePosition()
    java.draw()

}

document.body.onload = function (){

    id("search").onchange = function (){
        sout("awgh")
        document.location.href = "https://www.google.com/search?q=" + encodeURI(id("search").value);
    }

    id("title").innerText = "Ult1's " + ohboi[~~ (Math.random() * 1000)] + " Home Page"

    let images = []
    for(let i = 0; i < 5; i ++)
        images.push(  img("assets/nyancat.gif", i)  )

    setInterval(() => {
        for(let i in images){
            let x = parseInt(images[i].style.left, 10)

            images[i].style.left = x + images[i].speed + "px"
            if(x + 300 >= window.innerWidth){
                images[i].speed = -2
                images[i].style.transform = "scaleX(-1)"
            }
            else if (x <= 0){
                images[i].speed = 2
                images[i].style.transform = "scaleX(1)"
            }

        }
    }, 1)

    id("left-hidden-clickable").onclick = () =>
        window.open("https://www.buzzfeed.com/sarahaspler/which-salad-are-you");
    
    id("right-hidden-clickable").onclick = function() {
        let a = document.createElement("a");
        a.href = "spooky-virus.exe";
        a.click();;
    }

}

// TODO Gravitational attraction of nyan cat structs, which's graphics face the direction as their vector sum's dir.
// * p e r f e c t  s e n t e n c e  ^




