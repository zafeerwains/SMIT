function showOutput(z) {
    return document.getElementById("output").innerHTML = '<span style="color:blue;,font-size:17px;">' + z + '</span>'
}
function clear1() {
    document.getElementById("output").innerHTML = ""
}
const ifelse = () => {
    let date = new Date()
    let today = date.getDay()
    if (today == 1) {
        alert("Today is Monday")
    } else if (today == 2) {
        alert("Today is Tuesday")
    }
    else if (today == 3) {
        alert("Today is Wednesday")
    } else if (today == 5) {
        alert("Today is Friday")
    }
    else if (today == 4) {
        alert("Today is Thursday")
    }
    else {
        alert("Today is Weekend and Class Day")
    }
}
const switchTest = () => {
    let date = new Date()
    let today = date.getDay()
    switch (today) {
        case 1:
            alert("Today is Monday")
            break;
        case 2:
            alert("Today is Tuesday")
            break;
        case 3:
            alert("Today is Wednesday")
            break;
        case 4:
            alert("Today is Thursday")
            break;
        case 5:
            alert("Today is Friday")
            break;

        default:
            alert("Today is Weekend and Class Day")
            break;
    }
}
const whileTest = () => {
    let name
    do {

        name = prompt("Enter the Name")
        if (name != null) {
            name = name.trim()
        }
        showOutput(name)
    } while (name==null || name.length<3)
}