function stuurEmail() {
    var bericht = document.getElementById("bericht").value;
    var onderwerp = document.getElementById("onderwerp").value;
    var email ="mailto:fedej.izaguirre@gmail.com?subject=" + onderwerp + "&body=" + bericht;

    window = window.open(email, 'emailWindow')
}