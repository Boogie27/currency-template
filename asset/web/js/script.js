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
$(".side-nav-close").click(function(e){
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
    if(!navState){
        $(".side-nav-content").css({
            right: right,
        })
    }
    $("#side_nav_content").css({
        right: right,
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






function form_animate(object){
    $(object.container).css({
        right: object.direction,
        transition: object.transition,
        right: object.right,
        left: object.left,
    })
    if(object.skin){
        $(object.skin).show()
    }
}




// ************ SIDE SIGNUP TOGGLE *************//
var n = 0
var form = $(".form-inner-content")
function show_forms(n){
    for(var i = 0; i < form.length; i++){
        $(form).hide()
    }
    $(form[n]).show()
}
show_forms(n)



$(".side-signup-form-toggle-btn").click(function(e){
    e.preventDefault()

    show_forms(0)

    object = {
        right: '0px',
        skin: '#side_dark_theme',
        container: '.side-nav-content',
        transition: 'all 0.3s ease',
    }
    form_animate(object)
})




// ************* SIDE LOGIN LOGIN TOGGLE ***********//
$(".login-form-popoup-btn").click(function(e){
    e.preventDefault()

    show_forms(1)

    object = {
        right: '0px',
        skin: '#side_dark_theme',
        container: '.side-nav-content',
        transition: 'all 0.3s ease',
    }
    form_animate(object)
})






// ************* SIDE  FORGOT PASSWORD TOGGLE ***********//
$(".forgot-password-popup-btn").click(function(e){
    e.preventDefault()

    show_forms(2)

    object = {
        right: '0px',
        skin: '#side_dark_theme',
        container: '.side-nav-content',
        transition: 'all 0.3s ease',
    }
    form_animate(object)
})