$(document).ready(function(){
    $(".nav-item").click(function(){
        $(this).addClass("active");
        $(".nav-item").not(this).removeClass("active");
    });

    $(".segment-one ul li a , .segment-two ul li a").click(function(){
        $(this).addClass("active-link");
        $(".segment-one ul li a , .segment-two ul li a").not(this).removeClass("active-link");
    });
    

    // sdd

    var button = document.getElementById("playButton");
        var vidd = document.getElementById("myVideo");

        button.addEventListener("click", function(){
        if(vidd.paused){
            vidd.play();
            button.innerHTML = '<span class="fa fa-pause fa-2x text-white"></span>';
        } else {
            vidd.pause();
            button.innerHTML = '<span class="fa fa-play fa-2x text-white"></span>';
        }
        });
      
});