document.addEventListener("readystatechange", (event) => {
    main();
},false);


const main = () =>{
    $(window).on('scroll',function(){
        const scrollValue = $(window).scrollTop();
        
        if(scrollValue >= 80){
            $('.nav-fixed').addClass("scrolled");
        } else {
            $('.nav-fixed').removeClass("scrolled");
        };
    });

    const  displaySmallScreen = () =>{
        const hideScrollDown = document.querySelector("#scroll-down");
        const logo = document.querySelector(".logo");
        const brandName = document.querySelector(".brand-name");
        const cards = document.querySelector(".card");
        const navbar = document.querySelector("#navbar");

        // for scroll-down-arrow
        hideScrollDown.style.display = "none";

        // for navbar brand
        logo.style.height = "30px";
        logo.style.width = "30px";

        // for brand name
        brandName.style.fontSize = "20px";
        brandName.style.color = "white";

        // for cards
        cards.style.marginBottom = "20px";

        // for navbar
        navbar.style.height = "60px";
        
    }

    const screenWidth = screen.width;
    if (screenWidth <= 820) {
        displaySmallScreen();
    } 
}
