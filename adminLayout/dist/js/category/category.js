$(document).ready(function () {
    $.ajax({
        url: END_POINT + "/api/v1/category",
        success:function(data) {
            console.log(data.data);
            var listCategory = data.data;
            var content = "";
            for (var i = 0; i < listCategory.length; i++) {
                content += "<tr>\n" +
                    "     <td>\n" + listCategory[i].name +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" + listCategory[i].description.split('100', 20) + " ..." +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" + getTimeHuman(listCategory[i].created_at) +
                    "         \n" +
                    "     </td>\n" +
                    "     <td>\n" +
                    "         <a href='add.html?id="+ listCategory[i].id +"' style=\"margin-right:6px; color:forestgreen\">\n" +
                    "             <i class=\"fa fa-list-alt\" aria-hidden=\"true\" data-toggle=\"tooltip\" title=\"Details\"></i>\n" +
                    "         </a>\n" +
                    "         <a href='#' style=\"color:red\">\n" +
                    "             <i class=\"fa fa-trash-o\" aria-hidden=\"true\" data-toggle=\"tooltip\" title=\"Delete\"></i>\n" +
                    "         </a>\n" +
                    "     </td>\n" +
                    " </tr>";
            }
            $("#myTable tbody").html(content);
        }
    });
});

