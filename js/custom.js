$(window).scroll(function () {
    var iScrollPos = 0;

    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        $('#services1').fadeIn(3000);
        $('#services2').slideDown(3000);
        $('#services3').fadeIn(3000);
        $('#lifeAtAvj').slideDown(3000,"linear");
    }
    iScrollPos = iCurScrollPos;
});
$(document).ready(function(){
    //---------------About Us JS----------------------
    $('#aboutus').slideDown(2000);
    $('#about-image').hover(function(){
        $(this).css("border-radius","25px");
        },function(){
            $(this).css("border-radius","0px");
    });
    $('#team-image1').hover(function(){
        $('#team-block1').slideDown(2000,'linear');
    });
    $('#team-image2').hover(function(){
        $('#team-block2').fadeToggle(2000,'linear');
    });
    $('#team-image3').hover(function(){
        $('#team-block3').fadeIn(2000,'linear');
    });
    //-------------------Services Testimonial JS------------------
    $('#testimonialbtn').click(function(){
        $('#testimonialDiv').fadeIn(2000,'linear');
        $('#testimonialbtn').fadeOut(1000,'linear');
    });
    var slideIndex = 0;
    showSlides();
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex-1].style.display="block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }  

    $('#lifeAtAvj1').hover(function(){
        $('#lifeAtAvj1').slideToggle(2000,'linear');
    });
    $('#lifeAtAvj2').hover(function(){
        $('#lifeAtAvj2').fadeToggle(2000,'linear');
    });
});

