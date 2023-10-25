const whereWeAt = () => {
    console.log(window.location.href)
    console.log(window.location.hash)
    console.log(window.location.host)
    console.log(window.location.hostname)
    console.log(window.location.port)
    console.log(window.location.search)
}
const goToGoogle = () => window.location.href = "https://www.google.com/"
const replaceUrl = () => window.location.replace("https://www.google.com/")
const openPopup = () => popupWindow = window.open("", "", "width=600,height=550,top=120,left=100");
const fillContent = () => popupWindow.document.write("<h1>Welcome To PopUp</h1>")
const assignUrl = () => popupWindow.location.assign("https://saylaniwelfare.com/")
const closePopup = () => popupWindow.close()
const alertCheck = () => {
    try {
        alrt("Alert")
    } catch (error) {
        alert(error)
    }
}