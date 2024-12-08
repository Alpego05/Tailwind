const alert = document.getElementById("alert");
const alert_button = document.getElementById("alert_button");

const hideAlert = () => {
    console.log("hide_alert");
    alert.style.display = "none";
}

alert_button.addEventListener("click", hideAlert);