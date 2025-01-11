var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5
});
tl.from("#line1-part1 ",{
    opacity:0,
    onStart:function(){
        var h5Timer = document.querySelector(".line h5")

var grow = 0;
setInterval(function(){
    if(grow<100){
        h5Timer.innerHTML = grow++
        // console.log(grow)
    }else{
        h5Timer.innerHTML = grow
    }
},35)
    },
});
tl.to(".line h2",{
    animationName: "anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    delay:3.4,
    duration:0.2,
    
});
tl.from("#page1",{
    y:1600,
    delay:0.1,
    duration:0.5,
    opacity:0
});
tl.to("#loader",{
    display:"none"
})


