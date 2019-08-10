$(document).ready(function () {
    var limit = 10;
    var total = getTotalItem(1000);
    loadArticle(limit, 0);

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
                "Authorization": token
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
    
    $(document).on('click', '.page-item', function () {
        var page = $(this).attr('page');
        var last_page = parseInt(total/page) + 1;
        var off_set = (page-1)*limit;
        loadArticle(limit, off_set);
        $(this).attr('class', 'page-item active');
        $(this).siblings().attr('class', 'page-item');


        // var contentPaginate = "<nav aria-label=\"Page navigation example\">\n" +
        //     "                                    <ul class=\"pagination\">\n";
        // if (page == 0) {
        //     contentPaginate += "<li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n";
        // } else {
        //     contentPaginate += "<li class=\"page-item\"><a class=\"page-link\" page='"+(page-1)+"' href=\"#\">Previous</a></li>\n"
        // }
        //
        // for (var i = 1; i <= last_page; i++) {
        //     if (i >= (page-2) && i <= (page+2)) {
        //         if (i == page) {
        //             contentPaginate += "<li class=\"page-item active\"><a class=\"page-link\" page='"+i+"' href=\"#\">"+i+"</a></li>\n";
        //         } else {
        //             contentPaginate += "<li class=\"page-item\"><a class=\"page-link\" page='"+i+"' href=\"#\">"+i+"</a></li>\n";
        //         }
        //     }
        // }
        //
        // if (page == last_page) {
        //     contentPaginate += "<li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">Next</a></li>\n";
        // } else {
        //     contentPaginate += "<li class=\"page-item\"><a class=\"page-link\" page='"+(page+1)+"' href=\"#\">Next</a></li>\n"
        // }
        //
        // contentPaginate += "</ul>\n" +
        //     "</nav>";
        //
        // $(".paginate-render").html(contentPaginate);
    })
});

function loadArticle(limit, off_set) {
    $.ajax({
        url: END_POINT + "/api/v1/article/approval?limit="+limit+"&off_set="+off_set,
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

function getTotalItem (limit) {
    var total = 0;
    $.ajax({
        url: END_POINT + "/api/v1/article/approval?limit="+limit+"&off_set=0",
        // headers: {
        //     "token": "Bz0tRnVB2CBAllaOpvdhuvf_6fjnSR3R"
        // },
        success:function(data) {
            var listArticle = data.data;
            total = listArticle.length;
        },
        error :function(err) {
            console.log(err);
            console.log(err.responseJSON.message);
        }
    });
    return total;
}