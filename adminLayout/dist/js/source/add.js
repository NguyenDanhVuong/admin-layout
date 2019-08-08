$(document).ready(function () {
    var sourceId = getUrlParameter('id');

    $('#cate_form').validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "url": {
                required: true
            },
            "link_selector": {
                required: true
            },
            "description": {
                required: true
            },
            "title_selector": {
                required: true
            },
            "content_selector": {
                required: true
            },
            "author_selector": {
                required: true
            }
        }
    });


    if (sourceId != undefined) {
        $.ajax({
            url: END_POINT+"/api/v1/source?id="+sourceId,
            success:function(data) {
                console.log(data.data);
                var source = data.data;
                $("input[name=url]").text(source.url);
                $("input[name=link_selector]").text(source.link_selector);
                $("input[name=limit]").text(source.limit);
                $("textarea[name=description_selector]").text(source.description_selector);
                $("input[name=title_selector]").text(source.title_selector);
                $("input[name=content_selector]").text(source.content_selector);
                $("input[name=author_selector]").text(source.author_selector);
            }
        });

        $(document).on('click', '.btn-save', function () {
            var url = $("input[name=url]").val();
            var link_selector = $("input[name=link_selector]").val();
            var description_selector = $("textarea[name=description_selector]").val();
            var title_selector = $("input[name=title_selector]").val();
            var content_selector = $("input[name=content_selector]").val();
            var author_selector = $("input[name=author_selector]").val();

            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    var data = {
                        "url" : url,
                        "link_selector" : link_selector,
                        "description" : description_selector,
                        "title_selector" : title_selector,
                        "content_selector" : content_selector,
                        "author_selector" : author_selector,

                    };
                    $.ajax({
                        url: END_POINT+"/api/v1/source?id="+sourceId,
                        type: 'PUT',
                        contentType: "application/json; charset=utf-8",
                        data : JSON.stringify(data),
                        success:function(data) {
                            console.log(data.data);
                            window.location.href = "add.html?id="+sourceId+"&status=success"
                        }
                    });
                }
            });
        })

    }
    else {
        $(document).on('click', '.btn-save', function () {
            var url = $("input[name=url]").val();
            var link_selector = $("input[name=link_selector]").val();
            var description_selector = $("textarea[name=description_selector]").val();
            var title_selector = $("input[name=title_selector]").val();
            var content_selector = $("input[name=content_selector]").val();
            var author_selector = $("input[name=author_selector]").val();
            var data = {
                "url" : url,
                "link_selector" : link_selector,
                "description" : description_selector,
                "title_selector" : title_selector,
                "content_selector" : content_selector,
                "author_selector" : author_selector,
            };
            console.log(data);
            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    $.ajax({
                        url: END_POINT+"/api/v1/source",
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        data : JSON.stringify(data),
                        success:function(data) {
                            console.log(data.data);
                            window.location.href = "crawler.html?status=success"
                        }
                    });
                }
            });
        })
    }

});