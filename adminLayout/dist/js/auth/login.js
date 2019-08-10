$(document).ready(function () {
    $(document).on('click', '.btn-login', function () {
        var email = $("input[name=email]").val();
        var data = {
            'email' : email
        };
        console.log(data);
        $.ajax({
            url: END_POINT + "/api/v1/account",
            type: "POST",
            data : JSON.stringify(data),
            success:function(data) {
                localStorage.setItem('email', email);
                window.location.href = "lockscreen.html?email="+email;
            },
            error: function(err) {
                $(".response-error").text(err.responseJSON.message);
            }
        });
    });
});

