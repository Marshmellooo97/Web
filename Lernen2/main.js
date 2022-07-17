
console.log("Test")


let arr = new Array(10)
let arr2 = [3,4,7,9,5]
let arr3 = [5,5,6,2]



document.getElementById("a").addEventListener("click", function(e){
    console.log("jib")
    let a = document.getElementById("na").value
    let b = document.getElementById("nb").value
    console.log(a+b)
    document.getElementById("ta").innerHTML = a+b

    let erg = []
    for(number of arr2){
        if(number == 9){
            continue
        }
        erg.push(number)
        console.log(number)
        document.getElementById("pb").innerHTML = number
    }
    console.log(erg)
    console.log("________________")

    let add = new test()
    add.add(a,b)


})

var addfunk = function(a,b){
    console.log()
}

class test{

    add(a,b){
        this.a = a
        this.b = b
        console.log(this.a + this.b)
    }


}





