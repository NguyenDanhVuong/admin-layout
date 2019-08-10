$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";
    $.ajax({
        url: END_POINT + "/api/v1/source",
        success:function(data) {
            console.log(data.data);
            var listSource = data.data;
            var content = "";
            for (var i = 0; i < listSource.length; i++) {
                content += "<tr>\n" +
                    "     <td>\n" + listSource[i].category.name +
                    "        \n" +
                    "     </td>\n" +
                    "     <td>\n" + listSource[i].url +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" + listSource[i].link_selector +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" + listSource[i].title_selector +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" + listSource[i].description_selector +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" + listSource[i].content_selector +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" + listSource[i].author_selector +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" +
                    "         <a href='add.html?id="+ listSource[i].id +"' style=\"margin-right:6px; color:forestgreen\">\n" +
                    "             <i class=\"fa fa-list-alt\" aria-hidden=\"true\" data-toggle=\"tooltip\" title=\"Details\"></i>\n" +
                    "         </a>\n" +
                    "         <a style=\"color:red\" class='btn-delete' id='"+listSource[i].id+"' onclick='return confirm(\"Are you sure?\")'>\n" +
                    "             <i class=\"fa fa-trash-o\" aria-hidden=\"true\" data-toggle=\"tooltip\" title=\"Delete\"></i>\n" +
                    "         </a>\n" +
                    "     </td>\n" +
                    " </tr>";
            }
            $("#myTable tbody").html(content);
        }
    });

    $(document).on('click', '.btn-delete', function () {
        var sourceId = $(this).attr("id");

        $.ajax({
            url: END_POINT + "/api/v1/source?id=" + sourceId,
            type: 'DELETE',
            headers: {'Authorization': '_oBovX8665OYlDn6sRD1vMnc22uL2B2G'},
            success: function () {
                console.log('Delete success...');
                window.location.href = "crawler.html?status=success";
            },
            error: function () {
                console.log(onmessageerror);
            }
        });
    })
});

