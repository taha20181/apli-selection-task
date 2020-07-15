var gradeValue;
var ctx = document.getElementById('performanceChart').getContext('2d');


var radarChart = new Chart (ctx, {
    type: 'radar',
    data: {
        labels: ["O", "C", "E", "A", "N"],
        dataset: [{
            label: "something",
            backgroundColor: 'rgb(255,211,11)',
            data: [1, 2, 3, 4, 5],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 10
        }]
    }
});


var finalResultArray = []

var totalVideo = $('#video-frame-container .video-frame').length

videoPerPage = 1;
$("#video-frame-container .video-frame:gt(" + (videoPerPage - 1) + ")").hide();

var totalPages = totalVideo / videoPerPage;

// ---------------------------------------- Appending the list item of pagination -----------------------------
$('.pagination').append("<li class='page-item currentPage active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i=2; i<=totalPages; i++) {
    $('.pagination').append("<li class='page-item currentPage'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}

$('.pagination').append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>");
// javascript:void(0) -----------------------------------------------------------------------------------------








// var noOfCurrentPages = $(".pagination li.currentPage").length


// ------------------- page switch --------------------

$(".pagination li.currentPage").on("click", function() {
    if($(this).hasClass("active")) {
        alert("already active");
    } else {
        var currentPage = $(this).index();
        // var lengthofli = $('.pagination li').length;
        // alert("length of li " + lengthofli);
        $('.pagination li').removeClass("active");
        $(this).addClass("active");
        $('#video-frame-container .video-frame').hide();
    }

    var grandTotal = videoPerPage * currentPage;

    for (var i = grandTotal - videoPerPage; i<grandTotal; i++) {
        $('.comment-bar .input-comment').val("");
        console.log("inside for loop");
        $("#video-frame-container .video-frame:eq(" + i + ")").show();
    }
});






// ------------------- page switch with next button --------------------

$("#next-page").on("click", function () {

    // $('.comment-bar .input-comment').val("");
    var currentPage = $(".pagination li.active").index();

    if(currentPage === totalPages) {
        return false;
    } else {
        currentPage++;
        $(".pagination li.currentPage").removeClass("active");
        $('.comment-bar .input-comment').val("");
        $("#video-frame-container .video-frame").hide();

        var grandTotal = videoPerPage * currentPage;

        for (var i = grandTotal - videoPerPage; i<grandTotal; i++) {
            $("#video-frame-container .video-frame:eq(" + i + ")").show();
        }
        $(".pagination li.currentPage:eq(" + (currentPage - 1) + ")").addClass("active");
    }
});


// ------------------- page switch with previous button --------------------

$("#prev-page").on("click", function () {

    // $('.comment-bar .input-comment').val("");
    var currentPage = $(".pagination li.active").index();

    if(currentPage === 1) {
        return false;
    } else {
        currentPage--;
        $(".pagination li.currentPage").removeClass("active");
        $('.comment-bar .input-comment').val("");
        $("#video-frame-container .video-frame").hide();

        var grandTotal = videoPerPage * currentPage;

        for (var i = grandTotal - videoPerPage; i<grandTotal; i++) {
            $("#video-frame-container .video-frame:eq(" + i + ")").show();
        }
        $(".pagination li.currentPage:eq(" + (currentPage - 1) + ")").addClass("active");
    }
});



// ---------------------- submit -------------------------

$(".grade-ul .grade #grade").on("click", function() {

    gradeValue = this.text;

    console.log(gradeValue);

})



$(".save-button .input-save").on("click", function() {
    var responseArray = []

    var comment = $(".comment-bar .input-comment").val();
    console.log(comment);

    $(".comment-bar .input-comment").val("");

    var currentPage = $(".pagination li.active").index();

    responseArray.push(currentPage);
    responseArray.push(gradeValue);
    responseArray.push(comment);
    console.log(responseArray)

    finalResultArray.push({question: responseArray[0], grade: responseArray[1], comment: responseArray[2]})
    console.log(finalResultArray);



    if(currentPage === totalPages) {
        alert("here comes the result page");
    } else {
        currentPage++;
        $(".pagination li.currentPage").removeClass("active");
        $("#video-frame-container .video-frame").hide();

        var grandTotal = videoPerPage * currentPage;

        for (var i = grandTotal - videoPerPage; i<grandTotal; i++) {
            $("#video-frame-container .video-frame:eq(" + i + ")").show();
        }
        $(".pagination li.currentPage:eq(" + (currentPage - 1) + ")").addClass("active");
    }
});