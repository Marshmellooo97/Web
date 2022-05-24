
console.log("Hallo")

let mitglieder = [
    {
        name : "Smith",
        vorname : "John",
        email : "foo@bar.com"
    },
    {
        name : "Doe",
        vorname : "Jane",
        email : "jane@doe.org"
    }
]


console.log(mitglieder.length)

document.getElementById("button").addEventListener("click", function(){
    let darein = document.getElementById("darein")
    let tabelle = document.createElement("table")
    let thead = document.createElement("thead")
    let body = document.createElement("body")

    let tr = document.createElement("tr")
    for(head in mitglieder[0])


    for(let i = 0; i < mitglieder.length; i++){
        let tr = document.createElement("tr")
        for(let j = 0; j < 4; j++){
            var td = document.createElement("td")
            var text = document.createTextNode("Bla")
            td.innerHTML("text")
            tr.appendChild(td)
        }
        tabelle.appendChild(tr)
    }
    darein.appendChild(tabelle)
})
