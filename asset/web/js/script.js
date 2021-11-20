// *********** DROP DOWN BOX ****************//
$(window).click(function(e){
    $('.drop-down-body').hide()
    if($(e.target).hasClass('drop-down-btn') || $(e.target).hasClass('drop-down-body')){
        e.preventDefault()
        $(e.target).parent().children('.drop-down-body').show()
    }
    if($(e.target).hasClass('drop-down-header')){
        e.preventDefault()
        $(e.target).parent().parent().children('.drop-down-body').show()
    }
})









// ********** OPEN SIDE NAVIGATION ************//
$(".open-side-mobile-navigation").click(function(e){
    e.preventDefault()
    mobile_navigation(true)
})


// ********** CLOSE SIDE NAVIGATION ************//
$("#side_nav_close").click(function(e){
    e.preventDefault()
    mobile_navigation(false)
})


function mobile_navigation(navState){
    if(navState){
        right = '0px'
        $("#side_dark_theme").show()
    }else{
        right = '-500px'
        $("#side_dark_theme").hide()
    }
    $("#side_nav_content").css({
        right: right,
        // transition: 'all 0s ease'
    })
}




// ********** CLICK DARK SKIN TO CLOSE SIDE NAVIGATION ************//
function darkskin_close_mobile_navigation(){
    $("#side_dark_theme").click(function(e){
        e.preventDefault()
        mobile_navigation(false)
    })
}
darkskin_close_mobile_navigation()