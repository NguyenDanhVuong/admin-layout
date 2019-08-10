$(document).ready(function () {
    $(document).on('click', '.btn-show-modal', function () {
        $("#myModal").modal();
        var idArticle = $(this).attr("id");


        $.ajax({
            url: END_POINT + "/api/v1/article/approval?id=" + idArticle,
            success: function (data) {
                console.log(data.data);
                var listArticle = data.data;
                getDetailArticleInList(listArticle, idArticle);

            }
        });
    })
});

function getDetailArticleInList(list, id) {
    for (var i = 0; i < list.length; i++) {
        console.log(idArticle);
        if(idArticle[i].id == id) {
            console.log(idArticle[i].id);
            var detailArticle = idArticle[i];
            var content =
                "<div class=\"modal-content\">\n" +
                "                <div class=\"modal-header\">\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
                "                  <h4 class=\"modal-title\">New Article</h4>\n" +
                "                  <a href=\"category.html?id="+detailArticle.category.id+"\" class=\"post-catagory\">"+detailArticle.category.name+"</a>\n" +
                "                </div>\n" +
                // "                <table class=\"tplCaption\" cellspacing=\"0\" cellpadding=\"3\" border=\"0\" align=\"center\" style=\"width: 500px;\">\n" +
                // "                    <tbody>\n" +
                // "                        <tr>\n" +
                // "                            <td>\n" +
                // "                                <img alt=\"\" data-natural-h=\"309\" data-natural-width=\"500\" src=\""+detailArticle.thumnail+"\" data-width=\"500\" data-pwidth=\"500\"/>\n" +
                // "                            </td>\n" +
                // "                        </tr>   \n" +
                // "                    </tbody>\n" +
                // "                </table>\n" +
                "                <div class=\"modal-body\">\n" +
                "                    <section class=\"sidebar_1\">\n" +
                "                        <header class=\"clearfix\">\n" +
                "                            <span class=\"time left\">"+getTimeHuman(detailArticle.update_at)+"</span>\n" +
                "                        </header>\n" +
                "                        <h1 class=\"title_news_detail mb10\"> "+detailArticle.title+" </h1>\n" +
                "                        <p class=\"description\">"+detailArticle.description+"</p>\n" +
                "                        <article class=\"content_detail fck_detail width_common block_ads_connect\">\n" +
                "                            <p class=\"Normal\">"+detailArticle.content+"</p>\n" +
                "                            <style>img{max-width: 100% !important;,height:auto}</style>" +
                "                            <p class=\"Normal\" style=\"text-align:right;\">\n" +
                "                        </article>\n" +
                "                    </section>\n" +
                "                </div>\n" +
                "            </div> \n+";
            $("#myModal .modal-dialog").html(content);
        }
    }
}

