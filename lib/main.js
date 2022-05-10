$(document).ready(function() {
    // navbar on scroll
    $(window).on('scroll',function(){
        // const scrollToHide = document.getElementById()
        const scrollValue = $(window).scrollTop();
        
        if(scrollValue >= 80){
            $('.nav-fixed').addClass("scrolled");
        } else {
            $('.nav-fixed').removeClass("scrolled");
        };

        // $('#scoll-down').hide();
    });

    // social link hidden
   const button = document.getElementById('social-link-toggler');
   
   button.addEventListener('click', event => {
       $('.to-hide').toggle();
   });
})




