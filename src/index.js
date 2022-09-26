import './less/index.less'

// Your code goes here!


//1. Enlarges the nav anchors when mouseover over//

Array.from(document.links).forEach(link => {

    link.addEventListener("mouseover", evt => {

    link.style.fontSize = ("fontsize", "2.5rem")

    })
})

Array.from(document.links).forEach(link => {

    link.addEventListener("mouseout", evt => {

    link.style.fontSize = ("1.6rem")

})
})



//2.  changes the image after `scroll` half way down the page//

const headings = document.querySelectorAll("h2")

    window.addEventListener("scroll", evt => {

        
        Array.from(headings).forEach( Element =>{
            Element.style.color = 'red';
        })
    
    })


 //3. change color of the nav background when esc is `keydown`//
const nav= document.querySelector("header.main-navigation")

function escape(event) {
    if(event.key === "Escape") {
        
        nav.style.background=("red")
        console.log("leaving so soon??")

    }
    
    }

window.addEventListener("keydown", escape)




//4.  console.log welcome message `load`//

window.addEventListener("load", evt => {

    console.log("Welcome to The Webpage")

})




//5.  `dblclick` to turn the background of the nav back to white//

function dbclick(event) {
        
        nav.style.background=("white")
    
    }

window.addEventListener("dblclick", dbclick)



//6.  console  logs a message when entering full screen//
window.addEventListener("webkitfullscreenchange", function() {
    console.log("fullscreenchange event fired!")
  });

//7. displays a message when navigating away from the page//
window.addEventListener("pagehide", (evt) => {
    console.log("NOOO COME BACKK!!")
})
//8. displays a message whennavigating back to the page//
window.addEventListener("pageshow", (evt) => {
    console.log("O THANK GOD YOUR BACK!!")
})

//9. display message when something is coppied//

window.addEventListener("copy", coppied)

function coppied(evt){
    console.log("Hey thats stealing.")
}

//10. display error message when trying to paste//

window.addEventListener("paste", pasted)

function pasted(evt){
    console.log("that doesnt go there")
}