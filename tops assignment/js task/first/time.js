let clock = new Date()

let day = clock.toLocaleDateString()
let time = clock.toLocaleTimeString()

$("#time").click(function(){
    $("#timeshow").text(day + " " + time)
})

$("#url").click(function(){
    $("#showurl").text(window.location.href)
});


document.getElementById("url").innerHTML = "The full URL of this page is:<br>" + window.location.href;