if(document.querySelector(".hamburger")){
    // Open Sidebar
    document.querySelector(".hamburger").addEventListener("click", (evt) => {
        document.querySelector(".sidebar").style = "left: 0%;"
    })
    // Close Sidebar
    const CHK = document.getElementById("chk")
    document.querySelector("main").addEventListener("click", (evt) => {
        if(CHK.checked){
            document.querySelector(".sidebar").style = "left: -70%;"
            CHK.checked = !CHK
        }
    })
    document.querySelector("footer").addEventListener("click", (evt) => {
        if(document.getElementById("chk").checked){
            document.querySelector(".sidebar").style = "left: -70%;"
            CHK.checked = !CHK
        }
    })
    // Open/Close Helper
    let btn_helper = document.getElementById("btn-helper")
    if(screen.width <= 992){
        btn_helper.addEventListener("click", (evt) => {
            document.getElementsByClassName("categories-submenu")[0].classList.remove("open-submenu")
            document.getElementsByClassName("helper-submenu")[0].classList.toggle("open-submenu")
        })
    }else{
        btn_helper.addEventListener("mouseenter", () => {
            document.getElementsByClassName("helper-submenu")[0].classList.add("open-submenu")
        })

        btn_helper.addEventListener("mouseleave", () => {
            document.getElementsByClassName("helper-submenu")[0].classList.remove("open-submenu")
        })

        document.getElementsByClassName("helper-submenu")[0].addEventListener("mouseenter", () => {
            document.getElementsByClassName("helper-submenu")[0].classList.add("open-submenu")
        })

        document.getElementsByClassName("helper-submenu")[0].addEventListener("mouseleave", () => {
            document.getElementsByClassName("helper-submenu")[0].classList.remove("open-submenu")
        })
    }


    // Open/Close Categories
    let btn_categories = document.getElementById("btn-categories")
    if(screen.width <= 992){
        btn_categories.addEventListener("click", (evt) => {
            document.getElementsByClassName("helper-submenu")[0].classList.remove("open-submenu")
            document.getElementsByClassName("categories-submenu")[0].classList.toggle("open-submenu")
        })
    }else{
        btn_categories.addEventListener("mouseenter", () => {
            document.getElementsByClassName("categories-submenu")[0].classList.add("open-submenu")
        })

        btn_categories.addEventListener("mouseleave", () => {
            document.getElementsByClassName("categories-submenu")[0].classList.remove("open-submenu")
        })

        document.getElementsByClassName("categories-submenu")[0].addEventListener("mouseenter", () => {
            document.getElementsByClassName("categories-submenu")[0].classList.add("open-submenu")
        })

        document.getElementsByClassName("categories-submenu")[0].addEventListener("mouseleave", () => {
            document.getElementsByClassName("categories-submenu")[0].classList.remove("open-submenu")
        })

        window.addEventListener("scroll", (event) => {
            document.getElementsByClassName("helper-submenu")[0].classList.remove("open-submenu")
            document.getElementsByClassName("categories-submenu")[0].classList.remove("open-submenu")
        })
    }
}

// Cookie Alert
if(localStorage.cookie == null){
    const COOKIE_ALERT = window.document.getElementsByClassName("cookie-alert")[0]
    COOKIE_ALERT.style.display = "block" 

    const COOKIES = window.document.getElementById("btn-cookie")
    COOKIES.addEventListener("click", (evt) => {
        localStorage.cookie = "true"
        const COOKIE_ALERT = window.document.getElementsByClassName("cookie-alert")[0]
        COOKIE_ALERT.style.display = "none" 
    })
}


// Delay in loading product cards
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is visible in the viewport, load the content
            const element = entry.target;
            // Stop observing the element
            element.style.opacity = 1;
            observer.unobserve(element);
        }
    });
}

function lazyLoadCard() {
    const cards = [...document.getElementsByClassName("card")]

    // Set up an observer for each image
    const observer = new IntersectionObserver(handleIntersection);

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Call the lazy loading function when the document is ready
document.addEventListener('DOMContentLoaded', lazyLoadCard);


// Product Gallery 
const THUMBNAILS = [...document.getElementsByClassName("image-thumbnail")]
THUMBNAILS.map(thumbnail => {
    thumbnail.addEventListener("click", (evt) => {
        // Move scroll by clicking thumbnail
        evt.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        })
        THUMBNAILS.map(thumbnails => {
            thumbnails.style = "border: none;"
        })
        evt.target.style = "border: 4px solid #ffffff;"
        document.getElementsByClassName("expansive-thumbnail")[0].src = evt.target.src
    })
})


