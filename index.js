//side bar code
$(".menu").click(function () {
    $(".nav-links").css("left", "0")
});
$(".bx-x").click(function () {
    $(".nav-links").css("left", "-100%")
});

//darkmode code

$(".darkmode").click(function () {
    if ($("#switch").attr("class") === "bx bxs-moon") {
        //changin icon 
        $("#switch").addClass("bx-sun");
        $("#switch").removeClass("bxs-moon");
        //githubbtn        
        $(".github-btn").addClass("btn-outline-light");
        $(".github-btn").removeClass("btn-outline-dark");

        //changin colors
        $("body").css("background-image", "url('images/waves.png')")
        $(":root").css("--maincolor", "#24292d")
        $(":root").css("--text", "#f0f8ff")
        $(":root").css("--cardback", "rgba(36,41,45,0.7)")
    }
    else {
        $("#switch").addClass("bxs-moon");
        $("#switch").removeClass("bx-sun");
        
        $(".github-btn").addClass("btn-outline-dark");
        $(".github-btn").removeClass("btn-outline-light");

        $("body").css("background-image", "url('images/waves-white.png')")
        $(":root").css("--maincolor", "#2559e7")
        $(":root").css("--text", "#24292d")
        $(":root").css("--cardback", "rgba(255,255,255,0.5)")

    }

})

//hover cards
$(".work-card").hover(function(e){
    $(this).find(".work-img").toggleClass("hidden");
    $(this).find(".info").toggleClass("hidden");
})