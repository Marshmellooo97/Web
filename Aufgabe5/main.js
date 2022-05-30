
console.log("Hallo")

const mitglieder = [
    {
        name : "Smith",
        vorname: "John",
        email : "foo@bar.com"
    },
    {
        name : "Doe",
        vorname: "Jane",
        email : "jane@doe.org"
    },
    {
        name: "Mustermann",
        vorname: "Max",
        email: "max@mustermann.de"
    },
    {
        name: "Smith",
        vorname: "John",
        email: "foo@bar.com"
    }
]


console.log(mitglieder.length)

document.getElementById("button").addEventListener("click", () => {
    let darein = document.getElementById("darein")
    let tabelle = document.createElement("table")
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let trHead = document.createElement("tr")

    for(let head in mitglieder[0]){
        let th = document.createElement("th")
        console.log(head)
        th.innerHTML = head
        trHead.appendChild(th)
    }
    let th = document.createElement("th")
    th.innerHTML = "Hinzufügen"
    trHead.appendChild(th)
    thead.appendChild(trHead)
    tabelle.appendChild(thead)

    for(let i in mitglieder){
        let trBody = document.createElement("tr")
        console.log(mitglieder)
        let row = mitglieder[i]
        for(value in mitglieder[i]){
            let td = document.createElement("td")
            console.log(row[value])
            td.innerHTML = row[value]
            trBody.appendChild(td)
        }

        let buttonHinzu = document.createElement("button")
        let buttonDelet = document.createElement("button")
        buttonHinzu.innerHTML = "Hinzufügen"
        buttonDelet.innerHTML = "Löschen"
        trBody.appendChild(buttonHinzu)
        trBody.appendChild(buttonDelet)
        tbody.appendChild(trBody)
    }
    tabelle.appendChild(tbody)
    darein.appendChild(tabelle)
})
