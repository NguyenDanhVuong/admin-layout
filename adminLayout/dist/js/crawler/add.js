$(document).ready(function () {
    var sourceId = getUrlParameter('id');
    console.log(sourceId);
    if (sourceId != undefined) {
        $.ajax({
            url: END_POINT + "/api/v1/source?id=" + sourceId,
            success:function(data) {
                console.log(data.data);
                var source = data.data;
                $("input[name=url]").text(source.url);
                $("input[name=linkSelector]").text(source.link_selector);
                $("input[name=limit]").text(source.limit);
                $("input[name=title]").text(source.title_selector);
                $("input[name=content]").text(source.content_selector);
                $("input[name=author]").text(source.author_selector);
            }
        });
    }
});