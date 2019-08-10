$(document).ready(function () {
    var articleId = getUrlParameter('id');
    console.log(articleId);

    $('#cate_form').validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "url":{
                required: true
            },
            "title": {
                required: true
            },
            "description": {
                required: true
            },
            "content": {
                required: true
            },
            "author": {
                required: true
            },
            "link": {
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

    if (articleId != undefined) {
        $.ajax({
            url: END_POINT+"/api/v1/article?id="+articleId,
            success:function(data) {
                console.log(data.data);
                var article = data.data;
                $("input[name=url]").val(article.url);
                $("input[name=title]").val(article.title);
                $("input[name=link]").val(article.link);
                $("#example .fr-view").html(article.content);
                $("input[name=description]").val(article.description);
                $("input[name=author]").val(article.author);

            }
        });

        $(document).on('click', '.btn-save', function () {
            var url = $("input[name=url]").val();
            var title = $("input[name=title]").val();
            var link = $("input[name=link]").val();
            var content = $("#example .fr-view").html();
            var description = $("input[name=description]").val();
            var author = $("input[name=author]").val();
            var category_id = $("select[name=category_id]").val();

            console.log(category_id)
            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    var data = {
                        "url" : url,
                        "title" : title,
                        "link_selector" : link,
                        "content" : content,
                        "description" : description,
                        "author" : author,
                        "category_id" : category_id
                    };
                    $.ajax({
                        url: END_POINT+"/api/v1/article?id="+articleId,
                        type: 'PUT',
                        data : JSON.stringify(data),
                        success:function(data) {
                            console.log(data.data);
                            window.location.href = "add.html?id=" + articleId + "&status=success"
                        }
                    });
                }
            });
        })
    }
    else {
        $(document).on('click', '.btn-save', function () {
            var url = $("input[name=url]").val();
            var title = $("input[name=title]").val();
            var link = $("input[name=link]").val();
            var content = $("#example .fr-view").html();
            var description = $("input[name=description]").val();
            var author = $("input[name=author]").val();
            var category_id = $("select[name=category_id]").val();

            console.log(category_id);
            var data = {
                "url" : url,
                "title" : title,
                "link" : link,
                "content" : content,
                "description" : description,
                "author" : author,
                "category_id" : category_id
            };

            $("#cate_form").submit(function (e) {
                e.preventDefault();
                if($(this).valid()) {
                    $.ajax({
                        url: END_POINT+"/api/v1/article",
                        type: 'POST',
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