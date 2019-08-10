$(document).ready(function () {
    loadArticle();

    $(document).on('click', '#btn-check-all', function () {
        $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
    });

    $(document).on('click', '#btn-approve-multi', function () {
        var searchIDs = $("tbody input:checkbox:checked").map(function(){
            return parseInt($(this).val());
        }).get();
        console.log(searchIDs);
        var data = {
            "articleId" : searchIDs
        };
        $.ajax({
            url: END_POINT + "/api/v1/article/approval",
            type: "POST",
            data : JSON.stringify(data),
            headers: {
                "Authorization": "SE8EtHDKBUWjhTs51M7u8Hby09vSH3dW"
            },
            success:function(data) {
                loadArticle();
            },
            error :function(err) {
                console.log(err);
                console.log(err.responseJSON.message);
            }
        });
    });
});

function loadArticle() {
    $.ajax({
        url: END_POINT + "/api/v1/article/approval",
        // headers: {
        //     "token": "Bz0tRnVB2CBAllaOpvdhuvf_6fjnSR3R"
        // },
        success:function(data) {
            var str = "aasakdjsoajdsaljd;lsakjdlsakjd;lsakj ksjd; lks dljsadj  salj ds jdsljd kajsd lkasjd lsjadl ksjd; sad";
            var listArticle = data.data;
            var content = "";
            for (var i = 0; i < listArticle.length; i++) {
                content += "<tr>\n" +
                    "    <td>\n" +
                    "        <input type=\"checkbox\" value='"+listArticle[i].id+"'>\n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].category.name +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].title +
                    "        \n" +
                    "    </td>\n" +
                    "    <td>\n" + listArticle[i].description.split(' ', 10).join(' ') + "..." +
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
        },
        error :function(err) {
            console.log(err);
            console.log(err.responseJSON.message);
        }
    });
}