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

    var test = JSON.parse("json.json")
    document.write(test)




})