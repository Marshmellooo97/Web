
console.log("Test")
document.getElementById("berechnen").onclick = function(){
    let gro = +document.getElementById("lableGröße").value
    let gewicht = +document.getElementById("lableGewicht").value
    console.log(gewicht)
    console.log(gro)
    let bmi = gewicht / (gro * gro)
    console.log(bmi)
    document.getElementById("erg").innerHTML = bmi.toFixed(2)
}
