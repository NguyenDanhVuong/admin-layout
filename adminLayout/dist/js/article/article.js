$(document).ready(function () {
    $.ajax({
        url: END_POINT + "/api/v1/home",
        success:function(data) {
            console.log(data.data);
            var listArticle = data.data;
            var content = "";
            for (var i = 0; i < listArticle.length; i++) {
                content += "<tr>\n" +
                    "    <td>\n" + listArticle[i].category.name +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].title +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].description.split('100', 5) + "..." +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].content.substring(0, 100) + " ..." +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" +
                    "        <a href='add.html?id='" + listArticle[i].id + " style=\"margin-right:6px; color: dodgerblue\">\n" +
                    "            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" data-toggle=\"tooltip\" title=\"Edit\"></i>\n" +
                    "        </a>\n" +
                    "\n" +
                    "        <a style=\"margin-right:6px; color:forestgreen\" class='btn-show-modal' id='"+listArticle[i].id+"'>\n" +
                    "            <i class=\"fa fa-list-alt\" data-toggle=\"tooltip\" title=\"Details\"></i>\n" +
                    "        </a>\n" +
                    "        <a style=\"color:red\">\n" +
                    "            <i class=\"fa fa-trash-o\" aria-hidden=\"true\" data-toggle=\"tooltip\" title=\"Delete\"></i>\n" +
                    "        </a>\n" +
                    "    </td>\n" +
                    "</tr>";
            }
            $("#myTable tbody").html(content);
        }
    });

    $(document).on('click', '.btn-show-modal', function () {
        $("#myModal").modal();
        var idArticle = $(this).attr("id");

        $.ajax({
            url: END_POINT + "/api/v1/article?id=" + idArticle,
            success: function (data) {
                console.log(data);
                var detailArticle = data.data;
                categoryId = detailArticle.category.id;
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
        });
    })
});

