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
        const hideMoreAbout = document.querySelector("#scroll-down");
        const navbarBrand = document.querySelector(".navbar-brand");
        const logo = document.querySelector("#logo");
        const brandName = document.querySelector("#brand-name");
        const navbar = document.querySelector("#navbar");
        const socialNetwork = document.querySelector(".social-network ");
        const ulTagSocialNetwork = document.querySelector(".list-unstyled");

        // for scroll-down-arrow
        hideMoreAbout.style.display = "none";

        // for navbar brand
        navbarBrand.style.margin = "0px";
        navbarBrand.style.marginLeft = "10px";
        navbarBrand.style.height = "40px";
        logo.style.height = "25px";
        logo.style.width = "25px";

        brandName.style.marginTop = "15px";
        brandName.style.fontSize = "16px";
        brandName.style.color = "white";

        // for navbar
        navbar.style.padding = "0px";
        navbar.style.height = "50px";

        // for social network
        socialNetwork.style.width = "50px";

        ulTagSocialNetwork.style.marginBottom = "250px";
        
    }

    const screenWidth = screen.width;
    if (screenWidth <= 820) {
        displaySmallScreen();
    } 
}
