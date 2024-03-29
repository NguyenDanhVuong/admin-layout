$(document).ready(function () {
    var sourceId = getUrlParameter('id');
    console.log(sourceId);
    console.log("1");

    $('#cate_form').validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "url": {
                required: true
            },
            "title_selector": {
                required: true
            },
            "link_selector": {
                required: true
            },
            "content_selector": {
                required: true
            },
            "description_selector": {
                required: true
            },
            "thumnail_selector": {
                required: true
            },
            "remove_selector": {
                required: true
            },
            "author_selector": {
                required: true
            },
            "category_id": {
                required: true
            }
        }
    });


    $.ajax({
        url: END_POINT + "/api/v1/category",
        success:function(data) {
            console.log(data.data);
            var listCategory = data.data;
            var content = "";
            for (var i = 0; i < listCategory.length; i++) {
                content += "<option value=\""+listCategory[i].id+"\">"+listCategory[i].name+"</option>";
            }
            $("select[name=category_id]").html(content);
        }
    });

    if (sourceId != undefined) {
        $.ajax({
            url: END_POINT+"/api/v1/source?id="+sourceId,
            success:function(data) {
                console.log(data.data);
                var source = data.data;
                $("input[name=url]").val(source.url);
                $("input[name=title_selector]").val(source.title_selector);
                $("input[name=link_selector]").val(source.link_selector);
                $("input[name=content_selector]").val(source.content_selector);
                $("input[name=description_selector]").val(source.description_selector);
                $("input[name=thumnail_selector]").val(source.thumnail_selector);
                $("input[name=remove_selector]").val(source.remove_selector);
                $("input[name=author_selector]").val(source.author_selector);

            }
        });


        $(document).on('click', '.btn-save', function () {
            var url = $("input[name=url]").val();
            var title_selector = $("input[name=title_selector]").val();
            var link_selector = $("input[name=link_selector]").val();
            var content_selector = $("input[name=content_selector]").val();
            var description_selector = $("input[name=description_selector]").val();
            var thumnail_selector = $("input[name=thumnail_selector]").val();
            var remove_selector = $("input[name=remove_selector]").val();
            var author_selector = $("input[name=author_selector]").val();
            var category_id = $("select[name=category_id]").val();

            console.log(category_id);
            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    var data = {
                        "url" : url,
                        "title_selector" : title_selector,
                        "link_selector" : link_selector,
                        "content_selector" : content_selector,
                        "description_selector" : description_selector,
                        "thumnail_selector" : thumnail_selector,
                        "remove_selector" : remove_selector,
                        "author_selector" : author_selector,
                        "category_id" : category_id
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
            var title_selector = $("input[name=title_selector]").val();
            var link_selector = $("input[name=link_selector]").val();
            var content_selector = $("input[name=content_selector]").val();
            var description_selector = $("input[name=description_selector]").val();
            var thumnail_selector = $("input[name=thumnail_selector]").val();
            var remove_selector = $("input[name=remove_selector]").val();
            var author_selector = $("input[name=author_selector]").val();
            var category_id = $("select[name=category_id]").val();

            console.log(category_id);
            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    var data = {
                        "url" : url,
                        "title_selector" : title_selector,
                        "link_selector" : link_selector,
                        "content_selector" : content_selector,
                        "description_selector" : description_selector,
                        "thumnail_selector" : thumnail_selector,
                        "remove_selector" : remove_selector,
                        "author_selector" : author_selector,
                        "category_id" : category_id
                    };

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