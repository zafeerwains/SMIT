
function clear1() {
    document.getElementById("inputvalue").value = ""
}
let otext = "I Love My Country Pakistan<br>I Love My City Faisalabad<br>I Love My Homeland"
let cities = ["Faisalabad", "Lahore", "karachi ", "Islamabad", "Burewala", "Sheikhupura ", "Kashmir"];
function lowercase() {
    document.getElementById("output").innerHTML = ""
    let valueOriginal = document.getElementById("inputvalue").value
    let lowervalue = valueOriginal.toLowerCase();
    document.getElementById("output").innerHTML = lowervalue;
}
function uppercase() {
    document.getElementById("output").innerHTML = ""
    let valueOriginal = document.getElementById("inputvalue").value
    let lowervalue = valueOriginal.toUpperCase();
    document.getElementById("output").innerHTML = lowervalue;
}
function capatalize() {
    document.getElementById("output").innerHTML = ""
    let valueOriginal = document.getElementById("inputvalue").value
    document.getElementById("output").innerHTML = '<span style="text-transform: capitalize;">' + valueOriginal + '</span>'
}
function better() {
    document.getElementById("output").innerHTML = ""
    let valueOriginal = document.getElementById("inputvalue").value
    valueOriginal = valueOriginal.toLowerCase();
    document.getElementById("output").innerHTML = '<span style="text-transform: capitalize;">' + valueOriginal + '</span>'
}
function printAll() {
    document.getElementById("output").innerHTML = ""
    for (let z = 0; z < cities.length; z++) {
        let num = z + 1;
        document.getElementById("output").innerHTML += num + ')' + cities[z] + '<br>'
    }
}
function add() {
    document.getElementById("output").innerHTML = ""
    let Original = document.getElementById("inputvalue").value
    if (Original.length < 3) {
        alert("Enter Complete name ")
        return
    }
    let value1 = Original.slice(0, 1).toUpperCase();
    let value2 = Original.slice(1).toLowerCase();
    let valueOriginal = value1 + value2
    if (!valueOriginal) {
        alert("Enter the City Name")
        return
    }
    for (let z = 0; z < cities.length; z++) {
        if (valueOriginal == cities[z]) {
            document.getElementById("output").innerHTML = 'The city <span style="color:red; font-size:28px;">"' + valueOriginal + '"</span> is already in list'
            return
        }
    }
    cities.push(valueOriginal)
    document.getElementById("output").innerHTML = 'The city <span style="color:green; font-size:28px;">"' + valueOriginal + '"</span> is successfully added in list'

}
function checkCity() {
    document.getElementById("output").innerHTML = ""
    let Original = document.getElementById("inputvalue").value
    if (Original.length < 3) {
        alert("Enter Complete name ")
        return
    }
    let value1 = Original.slice(0, 1).toUpperCase();
    let value2 = Original.slice(1).toLowerCase();
    let valueOriginal = value1 + value2
    if (!valueOriginal) {
        alert("Enter the City Name")
        return
    }
    for (let z = 0; z < cities.length; z++) {
        if (valueOriginal == cities[z]) {
            document.getElementById("output").innerHTML = 'The city <span style="color:green; font-size:28px;">"' + valueOriginal + '"</span> is at index ' + z + ' in list'
            return
        }
    }
    document.getElementById("output").innerHTML = 'The city <span style="color:red; font-size:28px;">"' + valueOriginal + '"</span> is not in list'

}
function findword() {
    document.getElementById("output").innerHTML = ""
    otext = otext.toLowerCase()
    let Original = document.getElementById("inputvalue").value
    Original = Original.toLowerCase()
    if (!Original) {
        alert("Enter the  Word")
        return
    }

    document.getElementById("output").innerHTML = 'The index of word "' + Original + '" <span style="color:green; font-size:28px;">"' + otext.indexOf(Original) + '"</span> '
    if (otext.indexOf(Original) == -1) {
        document.getElementById("output").innerHTML = 'The word  <span style="color:green; font-size:28px;">"' + Original + '" </span> is not present  '
    }

}
function replace() {
    document.getElementById("output").innerHTML = ""
    let Original = document.getElementById("inputvalue").value
    let Original1 = Original.toLowerCase()
    otext = otext.toLowerCase()
    if (!Original) {
        alert("Enter the WOrd want to replace")
        return
    }
    let replaceWith = prompt("Enter a Word");

    if (!replaceWith) {
        alert('please type a word to Replace with ' + Original);
        return;
    }
    let replaceWith1 = replaceWith.toLowerCase()
    Original1 = new RegExp(Original1, 'g')
    let replacedWord = otext.replace(Original1, replaceWith1);
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML = '<span style="text-transform: capitalize;">' + replacedWord + '</span>'

}
document.getElementById("btn").onclick = function clear(){
  output.innerHTML=" " 
}

