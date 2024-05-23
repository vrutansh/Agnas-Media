var work = document.querySelector(".work")
var cursor = document.querySelector(".cursor")

work.addEventListener("mouseenter", function(dets){
    
    gsap.to(cursor,{
        scale:1,
        opacity:1,
        x: dets.x,
        y: dets.y
    })
})

work.addEventListener("mouseleave", function(dets){
    
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
