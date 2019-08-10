$(document).ready(function () {
    var email = getUrlParameter('email');
    $('.lockscreen-name').text(email);
    $('#form-verify').submit(function (e) {
        e.preventDefault();
        console.log("123");
        var code = $("input[name=code]").val();
        var data = {
            'email' : email,
            'code' : code
        };
        console.log(data);
        $.ajax({
            url: END_POINT + "/api/v1/active",
            type: "POST",
            data : JSON.stringify(data),
            success:function(data) {
                localStorage.setItem('token', data.data.token);
                window.location.href = "../admin.html?email="+email;
            },
            error: function(err) {
                $(".response-error").text(err.responseJSON.message);
            }
        });
    });
});

