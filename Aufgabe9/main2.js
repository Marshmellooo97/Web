console.log("Hallosjdfnaös")

class Rechteck {
    constructor(top,left,width,height,color){
        this.top = top
        this.left = left
        this.width = width
        this.height = height
        this.color = color
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.top, this.left, this.width, this.height)
    }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#abc"
ctx.fillRect(15,20,30,40)

let r = new Rechteck(40,40,40,40,"#ccc")
r.draw()

var arr = new Array()

document.getElementById("myCanvas").addEventListener("click", function(e){
    let zufall = new Rechteck(e.clientX, e.clientY,20,20,"#aaa")
    //zufall.draw()
    arr.push(zufall)
    arr.forEach(element => {
        element.draw()
    });
    console.log(arr)

})
document.getElementById("löschen").addEventListener("click", function(){
    console.log("hakjlsdf")
    arr.forEach(element => {
        arr.splice(element)
    });
    arr.forEach(element => {
        element.draw()
    });
    console.log(arr)

})



