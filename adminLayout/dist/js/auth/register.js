$(document).ready(function () {
    $('#form-register').submit(function (e) {
        e.preventDefault();

        var email = $("input[name=email]").val();
        var full_name = $("input[name=full_name]").val();
        var phone = $("input[name=phone]").val();
        var data = {
            'email' : email,
            'phone' : phone,
            'full_name' : full_name
        };
        console.log(data);
        $.ajax({
            url: END_POINT + "/api/v1/account",
            type: "POST",
            data : JSON.stringify(data),
            success:function(data) {
                window.location.href = "lockscreen.html?email="+email;
            },
            error: function(err) {
                $(".response-error").text(err.responseJSON.message);
            }
        });
    });
});

