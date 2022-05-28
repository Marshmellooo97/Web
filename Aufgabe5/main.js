
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
    //let th = document.createAttribute("th")
    for(let head in mitglieder[0]){
        let th = document.createAttribute("th")
        console.log(head)
        th.innerHTML = "Bla"
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    tabelle.appendChild(thead)
    /*
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
    */
    darein.appendChild(tabelle)
})
