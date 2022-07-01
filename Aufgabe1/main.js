
let link = "https://vulcan.informatik.hs-fulda.de/bmiRechnerAjax.php"

console.log("Test")
document.getElementById("berechnen").onclick = function(){

        let reg = document.getElementById("anmerkung").value
    let regExp = new RegExp("^(?!.*<[^>]+>).*")
    
    console.log("Test")
    console.log(reg)
    console.log(regExp.test(reg))
    if(!(regExp.test(reg))){
        alert("Falsch")
        return null
    }

    let gro = +document.getElementById("lableGröße").value
    let gewicht = +document.getElementById("lableGewicht").value
    console.log(gewicht)
    console.log(gro)
    let bmi = gewicht / (gro * gro)
    console.log(bmi)
    document.getElementById("erg").innerHTML = bmi.toFixed(2)

    console.log("kjladjklflsjkf")
}

document.getElementById("ajax").addEventListener("click", function(e) {
    console.log("jkadlhjdfks")
    let xhr = new XMLHttpRequest
    let gro = +document.getElementById("lableGröße").value
    let gewicht = +document.getElementById("lableGewicht").value

    xhr.onload = function(){
        console.log(xhr.responseText)
        document.getElementById("erg").innerHTML = xhr.responseText
    }

    let qstring = link + "?gewicht=" + gewicht + "&groesse=" + gro
    console.log(qstring)
    xhr.open("GET", qstring, true)
    xhr.send()
    
})


