document.write("<h1>JavaScript</h1>")
document.write("Test")
// window.alert("Test")

let i = 0;
document.write("For", "<br>")
for(i = 0; i < 10; i++){
    if (i%2 == 0){
        document.write("Gerade: ", i, "<br>")
        
    }else{
        document.write("Ungerade: ", i, "<br>")
        
    }
    
}
i = 0;
document.write("<br>","while", "<br>")
while (i < 10) {
    document.write(i)
    i++
}
i = 0
document.write("<br>", "doWhile", "<br>")
do {
    document.write(i)
    i++
} while (i < 10);

document.write("<br>","<br>","<br>", "Aufgabe 3", "<br>")

const day = new Date()
const dayNumber = day.getDay()

switch (dayNumber) {
    case 1:
        document.write("Montag")
        break;
    case 2:
        document.write("Dienstag")
        break;
    case 3:
        document.write("Mittwoch")
        break;

    case 4:
        document.write("Donnerstag")
        break;
    case 5:
        document.write("Freitag")
        break;
    case 6:
        document.write("Samstag")
        break;
    case 7:
        document.write("Sonntag")
        break;
    default:
        break;
}

document.write("<br>","<br>","Aufgabe 4")
function add(a,b){
    return a + b
}
document.write("<br>",add(4,6))

function summe(a){
    if(a < 0){
        return 0
    }else if(a == 1){
        return 1;
    }else return summe(a -1) + a
}

document.write("<br>", summe(3))

function fakIt(a){
    let erg = 1;
    for(let i = 1; i <= a; i++){
        erg = erg * i
    }
    return erg
}
document.write("<br>","Iterativ: ", fakIt(5))

function fakRe(a){
    if(a == 0){
        return 1
    }else{ return fakRe(a-1) * a}
}
document.write("<br>","Rekrusiv: ", fakRe(5))

function pattern(a){

}

document.write("<br>","Aufgabe 4", "<br>")
let arr1 = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
document.write("Wochentag mit Array: ",arr1[dayNumber -1])

function randomArr(a,b,n){
    let arr2 = new Array(n)
    let x = Math.round(Math.random() * (b- a)) + a
    for (let index = 0; index < arr2.length; index++) {
        arr2[index] = Math.round(Math.random() * (b- a)) + a
    }
    return arr2
}
document.write("<br>", randomArr(1,10,10))