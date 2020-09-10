function sendMail()
{
    var yourMessage = document.getElementById("comments").value;
    var subject = document.getElementById("email").value;
    document.location.href = "mailto:akashsahukara@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}