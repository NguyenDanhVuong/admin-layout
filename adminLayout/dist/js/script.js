var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";


$(document).ready(function () {
    var token = localStorage.getItem('token');
    var email = localStorage.getItem('email');
    console.log(email);

    var path      = window.location.href;
    var arr = path.split('/');
    var folder = arr[arr.length-2];
    if (folder == 'auth') {
        if (token != null) {
            window.location.href = "../home/admin.html";
        }
    } else {
        if (token == null) {
            window.location.href = "../auth/login.html";
        }
    }
    console.log(folder);

    $(document).on('click', '#logout', function () {
        logout();
    });
    $("aside.main-sidebar").load("../widgets/aside.html");
    $("header.main-header").load("../widgets/header.html");
    $('.user-email').text(email);
});

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.href = "../auth/login.html";
}


function getTimeHuman(timestamp) {
    var now = $.now();
    var time = (now - timestamp)/1000;

    if (time > (3600*24*30*12)) {
        return parseInt(time/(3600*24*30*12))+" Years Ago";
    }

    if (time > (3600*24*30)) {
        return parseInt(time/(3600*24*30))+" Months Ago";
    }

    if (time > (3600*24)) {
        return parseInt(time/(3600*24))+" Days Ago";
    }

    if (time > (3600)) {
        return parseInt(time/(3600))+" Hours ago";
    }

    if (time > (60)) {
        return parseInt(time/(60))+" Minutes ago";
    }
    return "Just Now";
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
