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
                    "    <td>\n" + listArticle[i].url +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].title +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].description.split('100', 5) + "..." +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].link +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].content.split('100', 5) + " ..." +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" +
                    "        <a href='add.html?id=" + listArticle[i].id + "' style=\"margin-right:6px; color: dodgerblue\">\n" +
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
});

