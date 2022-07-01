console.log("Moin");

{
    document.getElementById("anzeigebutton").addEventListener("click", function (evt) {


        let xhr = new XMLHttpRequest();
        var mitglieder = new Array;
        xhr.onload = function () {
            mitglieder = JSON.parse(xhr.responseText);
            console.log(mitglieder);

            let test123 = document.getElementById("tabelle");
            let bodyelement = document.getElementById("bodyelement");

            let anzeigebutton = document.getElementById("anzeigebutton");
            bodyelement.removeChild(anzeigebutton);

            let tabel = document.createElement("table");
            tabel.id = "tabellemain"
            let tabellenkopf = document.createElement("thead");
            let trtag = document.createElement("tr");
            let thtageins = document.createElement("th");
            let thtagzwei = document.createElement("th");
            let thtagdrei = document.createElement("th");
            let thtagvier = document.createElement("th");

            tabel.appendChild(tabellenkopf);
            tabellenkopf.appendChild(trtag);

            thtageins.innerHTML = "Name";
            trtag.appendChild(thtageins);
            thtagzwei.innerHTML = "Vorname";
            trtag.appendChild(thtagzwei);
            thtagdrei.innerHTML = "Email";
            trtag.appendChild(thtagdrei);
            thtagvier.innerHTML = "Gruppe";
            trtag.appendChild(thtagvier);

            let tbodytag = document.createElement("tbody");

            tabel.appendChild(tbodytag);


            for (let index = 0; index < mitglieder.length; index++) {

                let trtagzwei = document.createElement("tr");

                tbodytag.appendChild(trtagzwei);

                for (let indexeins = 0; indexeins < 4; indexeins++) {

                    let tdtag = document.createElement("td");

                    if (index % 2 == 1) {
                        tdtag.className = "hellgrau";
                    }

                    if (indexeins == 0) tdtag.innerHTML = mitglieder[index].name;
                    if (indexeins == 1) tdtag.innerHTML = mitglieder[index].vorname;
                    if (indexeins == 2) tdtag.innerHTML = mitglieder[index].email;
                    if (indexeins == 3) {
                        let buttontageins = document.createElement("button");
                        let buttontag = document.createElement("button");
                        buttontag.innerHTML = "Add";
                        buttontag.id = "add" + index;
                        buttontag.className = "addclass";
                        buttontageins.innerHTML = "Remove";
                        buttontageins.id = "remove" + index;
                        buttontageins.className = "removeclass";
                        tdtag.appendChild(buttontag);
                        tdtag.appendChild(buttontageins);


                    }
                    trtagzwei.appendChild(tdtag);

                }

            }


            test123.appendChild(tabel);

            {
                let gruppecounter = 0;

                for (let index = 0; index < mitglieder.length; index++) {

                    let counter = 0;


                    document.getElementById("add" + index).addEventListener("click", function (evt1) {
                        if (gruppecounter == 0) {
                            let ptageins = document.createElement("p");
                            ptageins.id = "gruppen";
                            ptageins.innerHTML = "Gruppenmitglieder: ";
                            test123.appendChild(ptageins);


                        }
                        if (counter == 0) {
                            let ptag = document.createElement("span");
                            let brtag = document.createElement("br");
                            ptag.id = "ptag" + index;
                            brtag.id = "brtag" + index;
                            ptag.innerHTML = mitglieder[index].vorname + " " + mitglieder[index].name;
                            test123.appendChild(ptag);
                            test123.appendChild(brtag);
                            counter++;
                            gruppecounter++;
                        }

                    });
                    document.getElementById("remove" + index).addEventListener("click", function (evt1) {
                        if (counter == 1) {
                            let ptag = document.getElementById("ptag" + index);
                            let brtag = document.getElementById("brtag" + index);
                            test123.removeChild(ptag);
                            test123.removeChild(brtag);
                            counter--;
                            gruppecounter--;
                            if (gruppecounter == 0) {
                                let ptag = document.getElementById("gruppen");
                                test123.removeChild(ptag);
                            }
                        }


                    });

                }
            }
        }
        xhr.open("GET", "mitglieder.json", true);
        xhr.send();

    })



}