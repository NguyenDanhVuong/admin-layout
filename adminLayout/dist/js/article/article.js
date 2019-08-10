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
                    "    <td>\n" + listArticle[i].description.split(' ', 25).join(' ') + "..." +
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
                    "        <a style=\"color:red\" class='btn-delete' id='"+listArticle[i].id+"' onclick='return confirm(\"Are you sure?\")'>\n" +
                    "            <i class=\"fa fa-trash-o\" aria-hidden=\"true\" data-toggle=\"tooltip\" title=\"Delete\"></i>\n" +
                    "        </a>\n" +
                    "    </td>\n" +
                    "</tr>";
            }
            $("#myTable tbody").html(content);
        }
    });

    $(document).on('click', '.btn-delete', function () {
        var articleId = $(this).attr("id");

        $.ajax({
           url: END_POINT + "/api/v1/article?id=" + articleId,
           type: 'DELETE',
            success: function () {
                console.log('Delete success...');
                window.location.href = "article.html?status=success";
            },
            error: function () {
                console.log(onmessageerror);
            }
        });
    })
});

