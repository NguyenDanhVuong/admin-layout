$(document).ready(function () {
    var categoryId = getUrlParameter('id');

    $('#cate_form').validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "name": {
                required: true,
                maxlength: 255
            },
            "description": {
                required: true
            }
        }
    });


    if (categoryId != undefined) {
        $.ajax({
            url: END_POINT+"/api/v1/category?id="+categoryId,
            success:function(data) {
                console.log(data.data);
                var category = data.data;
                $("input[name=name]").val(category.name);
                $("textarea[name=description]").html(category.description);
            }
        });

        $(document).on('click', '.btn-save', function () {
            var name = $("input[name=name]").val();
            var description = $("textarea[name=description]").val();

            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    var data = {
                        "name" : name,
                        "description" : description
                    };
                    $.ajax({
                        url: END_POINT+"/api/v1/category?id="+categoryId,
                        type: 'PUT',
                        data : JSON.stringify(data),
                        success:function(data) {
                            console.log(data.data);
                            window.location.href = "add.html?id="+categoryId+"&status=success"
                        }
                    });
                }
            });
        })

    }
    else {
        $(document).on('click', '.btn-save', function () {
            var name = $("input[name=name]").val();
            var description = $("textarea[name=description]").val();
            var data = {
                "name" : name,
                "description" : description
            };
            console.log(data);
            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    $.ajax({
                        url: END_POINT+"/api/v1/category",
                        type: 'POST',
                        data : JSON.stringify(data),
                        success:function(data) {
                            console.log(data.data);
                            window.location.href = "category.html?status=success"
                        }
                    });
                }
            });
        })
    }
    
});