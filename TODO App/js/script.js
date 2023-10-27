let values = JSON.parse(localStorage.getItem("Todo")) || []
setInterval(() => document.getElementById("time").innerHTML = dayjs().format("dddd,DD-MM-YYYY hh:mm:ss A "), 1000)
document.getElementById("name").innerHTML = prompt("Please enter Your Name")
const inputValue = id => document.getElementById(id).value
const randomId = () => Math.random().toString(36).slice(2)
const clearTable = () => document.getElementById("ifEmpty").innerHTML = ""
const setFields = (title, location, description) => {
    document.getElementById("title").value = title
    document.getElementById("location").value = location
    document.getElementById("description").value = description
}
const localStorageData = (array) => {
    localStorage.setItem("Todo", JSON.stringify(array))
}
const dateCreated = () => {
    let date = new Date()
    return date = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}
const findValue = (idOfElementToBeFind) => {
    for (let value of values) if (idOfElementToBeFind === value.id) return values.indexOf(value)
}
const deleteData = (element) => {
    let dataToBeDeleted = element.value
    let indexToBeRemovedFromArray = findValue(dataToBeDeleted)
    values.splice(indexToBeRemovedFromArray, 1)
    notify("The Task Has Been Deleted ", "success")
    localStorageData(values)
    showtable()
}
const editData = (element) => {
    document.getElementById("changeTask").style.display = "block";
    document.getElementById("addTask").style.display = "none";
    let dataToBeEdited = element.value
    let indexToBeEdited = findValue(dataToBeEdited)
    setFields(values[indexToBeEdited].title, values[indexToBeEdited].location, values[indexToBeEdited].description)
    document.getElementById("changeTask").onclick = () => {
        let editedTitleValue = inputValue("title").trim()
        if (!editedTitleValue || editedTitleValue.length < 3) return notify("Enter the Title Please", "error")
        let editedLocationValue = inputValue("location").trim()
        if (!editedLocationValue || editedLocationValue.length < 3) return notify("Enter the Location Please", "error")
        let editedDescriptionValue = inputValue("description").trim()
        if (!editedDescriptionValue || editedDescriptionValue < 10) return notify("Enter the Description Please", "error")
        values[indexToBeEdited].title = editedTitleValue
        values[indexToBeEdited].location = editedLocationValue
        values[indexToBeEdited].description = editedDescriptionValue
        values[indexToBeEdited].created = "Modified at " + dateCreated()
        notify("The Task Has Been Edited ", "success")
        document.getElementById("changeTask").style.display = "none";
        document.getElementById("addTask").style.display = "block";
        localStorageData(values)
        setFields("", "", "")
        showtable()
    }
}
const showtable = () => {
    clearTable()
    if (!values.length) return document.getElementById("ifEmpty").innerHTML = "<h1 class='text-center text-primary'>No Task yet,Hurry Up!Click Add Task button to add Task </h1>"
    document.getElementById("ifEmpty").innerHTML = `<table class="table mw-100"><thead><tr><th scope="col">#</th><th scope="col">Title</th><th scope="col">Location</th><th scope="col">Discription</th><th scope="col">Action</th></tr></thead><tbody id="tableBody"></tbody></table>`
    for (let value of values) {
        document.getElementById("tableBody").innerHTML += `<tr><th scope="row">${values.indexOf(value) + 1}</th><td>${value.title}</td><td>${value.location}</td><td>${value.description}</td><td><button value="${value.id}" onclick="editData(this)" id="editData" class="btn btn-success px-1 m-1">Edit</button><button value="${value.id}" onclick="deleteData(this)" class=" btn btn-danger px-1 m-1">Delete</button></td></tr>`
    }
}
const addTask = () => {
    event.preventDefault()
    let titleValue = inputValue("title").trim()
    if (!titleValue || titleValue.length < 3) return notify("Enter the Title Please", "error")
    let locationValue = inputValue("location").trim()
    if (!locationValue || locationValue.length < 3) return notify("Enter the Location Please", "error")
    let descriptionValue = inputValue("description").trim()
    if (!descriptionValue || descriptionValue < 10) return notify("Enter the Description Please", "error")
    let allVlaues = {
        title: titleValue,
        location: locationValue,
        description: descriptionValue,
        created: dateCreated(),
        id: randomId(),
    }
    values.push(allVlaues)
    localStorageData(values)
    setFields("", "", "")
    notify("The Task Has Been Added", "success")
    showtable()
}
showtable()
const notify = (msg, type) => {
    let color = "black"
    switch (type) {
        case "success":
            color = "linear-gradient(to right,#82CD47,#379237)"
            break
        case "error":
            color = "linear-gradient(to right,#E21818,#EA5455)"
            break
        default:
            color = color
    }
    Toastify({
        text: msg,
        duration: 3000,
        colse: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: { background: color, },
    }).showToast();
}