$(document).ready(function () {
    var categoryId = getUrlParameter('id');
    console.log(categoryId);
    if (categoryId != undefined) {
        $.ajax({
            url: END_POINT+"/api/v1/category?id="+categoryId,
            success:function(data) {
                console.log(data.data);
                var category = data.data;
                $("input[name=name]").text(category.name);
                $("input[name=description]").text(category.description);
            }
        });
    }

});