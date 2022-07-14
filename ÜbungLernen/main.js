console.log("Test")
const arr = [1,2,3,4,5,6,7,8,9]


document.getElementById("ab").addEventListener("click", () => {
    let zahlA = +document.getElementById("zahl1").value
    let zahlB = +document.getElementById("zahl2").value
    document.getElementById("ergZahlen").innerHTML = zahlA + zahlB})


document.getElementById("tabelle").addEventListener("click", () => {
    console.log("Tabelle")
    for (let number of arr){
        document.write(number)
    }
    document.write("sdfgsdfsdf")
    var test = JSON.parse("json.json")
    document.write(test)
    document.write("12313243123")

})

class Hund{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getDog(){
        document.write(this.age + this.name)
    }
}

document.getElementById("klasse").addEventListener("click", function(e){
    let name = document.getElementById("name").value
    let dog = new Hund(name,10)
    dog.getDog()

})

class Form{
    constructor(farbe){this.farbe = farbe}
    info(){console.log("Falsch")}}
class Rechteck extends Form{
    constructor(farbe, höhe,breite){
        super(farbe)
        this.höhe = höhe
        this.breite = breite}
    fläche(){console.log(this.höhe*this.breite)}
    info(){console.log("Farbe ist: " + this.farbe)}}

document.getElementById("form").addEventListener("click", function(e){
    let höhe = document.getElementById("höhe").value
    let breite = document.getElementById("breite").value
    let form1 = new Rechteck("r",höhe,breite,1,2)
    form1.fläche()
    form1.info()
})

let sTest = ["O","T","T","O"]

let funkPol = function(sarr){
    if(sarr[i] == sarr[sarr.lenght -i]){

    }
}