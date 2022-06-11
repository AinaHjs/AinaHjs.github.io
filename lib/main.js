document.addEventListener("readystatechange", (event) => {
    main();
},false);



const main = () => {

    /* 
        - Change navigation bar state when scrolling down.
    */
    $("main").on('scroll',function(){
        const scrollValue = $("main").scrollTop();        
        if(scrollValue >= 50){
            $('header').addClass("headerScrolled");
            // $('footer').addClass("footerScrolled");
        } else {
            $('header').removeClass("headerScrolled");
            // $('footer').removeClass("footerScrolled");
        };
    });

    /* 
        change bgc every 10 seconds
    */
    setInterval(() => {
        const random = Math.floor(Math.random()* 5 );
        changeBgcColor(random);
        changeBgcImage(random);
    },10000);

    function changeBgcImage (randomNumber) {
        const home = document.querySelector("#home");
        const homeBg = home.querySelector(".home-background");
        switch (randomNumber) {
            case 1:
                homeBg.innerHTML = `<img src="/images/cardsimages/gdesign.jpg" alt="home-background">`;
                break;
            case 2:
                homeBg.innerHTML = `<img src="/images/cardsimages/wdesign.jpg" alt="home-background">`;
                break;
            case 3:
                homeBg.innerHTML = `<img src="/images/cardsimages/website.jpg" alt="home-background">`;
                break;
            case 4:
                homeBg.innerHTML = `<img src="/images/cardsimages/wdesign.jpg" alt="home-background">`;
                break;
            case 5:
                homeBg.innerHTML = `<img src="/images/cardsimages/devops.jpg" alt="home-background">`;
                break;
            default:
                homeBg.innerHTML = `<img src="/images/cardsimages/wdesign.jpg" alt="home-background">`;
        }
    }

    function changeBgcColor (randomNumber) {
        const main = document.querySelector(".main");
        const h2 = main.querySelectorAll(".title");
        
        switch (randomNumber) {
            case 1:
                main.style.backgroundColor = "#CEECF4";
                main.style.transition = "all 2s ease";
                break;
            case 2:
                main.style.backgroundColor = "#E8B8B8";
                main.style.transition = "all 2s ease";
                for(let title of h2) {
                    title.style.color = "#fff";
                    title.style.transition = "all 1s ease";
                }
                break;
            case 3:
                main.style.backgroundColor = "#0E2C3D";
                main.style.transition = "all 2s ease";
                for(let title of h2) {
                    title.style.color = "#fff";
                    title.style.transition = "all 1s ease";
                }
                break;
            case 4:
                main.style.backgroundColor = "#E958BD";
                main.style.transition = "all 2s ease";
                for(let title of h2) {
                    title.style.color = "#fff";
                    title.style.transition = "all 1s ease";
                }
                break;
            case 5:
                main.style.backgroundColor = "#8644FE";
                main.style.transition = "all 2s ease";
                break;
            default:
                main.style.backgroundColor = "white";
                main.style.transition = "all 2s ease";
        }
    }
    /* 
        Scripts for about section
    */
    const about = document.querySelector("#about");
    const aboutMeSection = about.querySelector(".me-section");
    const aboutJobExperience = about.querySelector(".job-experience-section");
    const aboutStudies = about.querySelector(".studies-section");

    const me = about.querySelector(".me");
    const studies = about.querySelector(".studies");
    const jobExperience = about.querySelector(".jobExperience");

    me.addEventListener("click", (event) =>{
        aboutMeSection.style.transform = "translateY(-0px)";
        aboutMeSection.style.zIndex = "11";
        aboutMeSection.style.transition = "all 1s";
    })
    studies.addEventListener("click", (event) =>{
        aboutStudies.style.transform = "translateY(-0px)";
        aboutStudies.style.zIndex = "11";
    })
    jobExperience.addEventListener("click", (event) =>{
        aboutJobExperience.style.transform = "translateY(-0px)";
        aboutJobExperience.style.zIndex = "11";
        aboutJobExperience.style.transition = "all 1s";
    })

    const downArrow = about.querySelectorAll(".down-arrow");
    for (let down of downArrow) {
        down.addEventListener("click", (event) => {
                        
            aboutStudies.style.transform = "translateY(600px)";
            aboutStudies.style.transition = "all 1s";

            aboutJobExperience.style.transform = "translateY(600px)";
            aboutJobExperience.style.transition = "all 1s";

            aboutMeSection.style.transform = "translateY(600px)";
            aboutMeSection.style.transition = "all 1s";

        })
    }
    
    

    /* 
        cards image in services
    */
    const servicesImg = document.querySelector("#services")
    const images =servicesImg.querySelectorAll(".servicesBackground");
    for (let imageBgc of images) {
        const card = imageBgc.parentElement.lastElementChild;
        
        imageBgc.addEventListener("mouseover" , (event) => {
            var classes = card.classList;
            for (let classe of classes) {
                if (classe === "right") {
                    card.classList.add("hideToRight");
                } 
                else if (classe === "left") {
                    card.classList.add("hideToLeft");
                }
            }
        })
        imageBgc.addEventListener("mouseout", (event) => {
            card.classList.remove("hideToRight");
            card.classList.remove("hideToLeft");
        })
    }


    /* 
        - Select button in services section.
    */
    const services = document.querySelector("#services");
    const btns = services.querySelectorAll(".btn");
    //  Loop through button inside cards.
    for (let button of btns) {
        button.addEventListener("mouseover",(event) => {
            button.style.width = "100px";
            setTimeout(() => {
                button.textContent = "See more"
            },100);
    
        })
    
        button.addEventListener("mouseout",(event) => {
            button.textContent = "+";
            button.style.width = "32px";
        })
    }
    
    /* 
        Script for the contact section
    */
    const contact = document.querySelector("#contact");
    const sendMessage = contact.querySelector(".send-message");
    const cancelMessage = contact.querySelector(".cancel-message");

    sendMessage.addEventListener("click", (event) => {
        const formInput = contact.querySelector(".form");
        formInput.style.transform = "translateX(0px)";
        formInput.style.transition = "all 0.5s";
    })
    cancelMessage.addEventListener("click", (event) => {
        const formInput = contact.querySelector(".form");
        formInput.style.transform = "translateX(-500px)";
        formInput.style.transition = "all 0.5s";
    })
    /* 
        - Display for small screen.
    */
    const displaySmallScreen = () => {
        const body = document.querySelector("body");
        body.classList.add('smallScreen');

        for (let button of btns) {
            button.classList.add("");
        }

    }

    const screenWidth = screen.width;
    if (screenWidth <= 820) {
        displaySmallScreen();
    }

}
