let statement = " "
document.getElementById("alert").onclick = function () {
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    alert("Muhammad zafeer wains")
    document.getElementById("statement").innerHTML = 'alert("Muhammad zafeer wains")'
}

document.getElementById("alertnumber").onclick = function () {
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    alert("03100073599")
    document.getElementById("statement").innerHTML = 'alert("03100073599")'
}
document.getElementById("variable").onclick = function () {
    let html="<ul><li> A variable name can't contain any spaces. </li><li>A variable name can contain only<code> letters, numbers, dollar signs, and under</code>scores. </li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and <code>myVar</code> are legal.</li><li> Capital letters are fine, but be careful Variable names  are case sensitive. A rose is not a<code> Rose</code>. If you assign the string 'Floribundas' to the variable rose and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>"
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = html
}
document.getElementById("example").onclick = function () {
    let cexapmle='<ul><li><code>heIsAWebDeveloper</code></li><li><code>webDesigning</code></li><li><code>goodProgramer</code></li><li><code>mobileAndWebApplicationDevelopment</code></li></ul>'
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = cexapmle

}
document.getElementById("sumn").onclick = function () {
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    let a = 3; let b = 4; let c = a + b;
    document.getElementById("statement").innerHTML = "let a=3;    let b=4;    let c=a+B;"
    document.getElementById("outputstatement").innerHTML = '<p class="text-center">'+c+'</p>'
}
document.getElementById("subn").onclick = function () {
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    let a = 3; let b = 4; let c = a - b;
    document.getElementById("statement").innerHTML = "let a=3;    let b=4;    let c=a-B;"
    document.getElementById("outputstatement").innerHTML = '<p class="text-center">'+c+'</p>'
}
document.getElementById("mn").onclick = function () {
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    let a = 3; let b = 4; let c = a * b;
    document.getElementById("statement").innerHTML = "let a=3;    let b=4;    let c=a*B;"
    document.getElementById("outputstatement").innerHTML = '<p class="text-center">'+c+'</p>'
}
document.getElementById("dn").onclick = function () {
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    let a = 3; let b = 4; let c = a / b ;
    document.getElementById("statement") .innerHTML = "let a=3;    let b=4;    let c=a/B;"
    document.getElementById("outputstatement").innerHTML = '<p class="text-center">'+c+'</p>'
}
document.getElementById("csn").onclick = function () {
    document.getElementById("statement").innerHTML = statement
    document.getElementById("outputstatement").innerHTML = statement
    let os='<ol><li>36/6*3+2**4-(3+5)</li><li>36/6*3+2**4-8</li><li>36/6*3+16-8</li><li>6*3+16-8</li><li>18+16-8</li><li>34-8</li><li>26</li></ol>'
    document.getElementById("statement").innerHTML = "36/6*3+2**4-(3+5)"
    document.getElementById("outputstatement").innerHTML = os
}
document.getElementById("output1").onclick = function () {
    document.getElementById("statement").innerHTML = statement
}
document.getElementById("output").onclick = function () {
    document.getElementById("outputstatement").innerHTML = statement
}