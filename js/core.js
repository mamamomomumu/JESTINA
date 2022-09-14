$(document).ready(function(){
    mainSlider();
    detailSlider();
    accordionUI(".QuestionsBox ul li");
    panelControl("[data-panel='searchPanel']",".btn_close");
    panelControl("[data-panel='orderPanel']",".btn_close");
    panelControl("[data-panel='orderhistoryPanel']",".btn_close");
    panelControl("[data-panel='appDownSendPanel']",".btn_close2");
    scrollEvent('.listContainer',10);
    scrollEvent('.CollectionContainer.Mp img',100);
    scrollEvent('.CollectionContainer div div h3',100);
    scrollEvent('.CollectionlistContainer h2,p',10);


    muiControl();
});

function mainSlider(){
    $(".mainSlider").bxSlider();
}
function detailSlider(){
    $(".detailSlider").bxSlider({
        pagerCustom: ".detailPager"
    });
}

function accordionUI(btn){
    $(btn).click(function(){
        $(btn).removeClass("active");
        $(this).addClass("active");
    });
}

function panelControl(openBtn,closeBtn){
    var target = null;
    $(openBtn).click(function(){
       target = $(this).attr('data-panel');
       $("#" + target).addClass('active');
    });
    $(closeBtn).click(function(){
        $("#" + target).removeClass('active');
    });
}

function scrollEvent(page,scrollValue){
        // var thisScroll =  $(page).offset();
        // console.log(thisScroll);
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > scrollValue) {
                $(page).addClass("active");
            } else {
                $(page).removeClass("active");
            }
        });
}
function muiControl(){
    $(".mui").click(function(){
        $(this).toggleClass("open");
        $("header div nav").toggleClass("open");
    });

    $(document).ready(function(){
        scrollEvent();
    });

    function scrollEvent(){
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            var element = $(".CollectionlistContainer ul li"); 
            var eh = element.height();
            if(st>0){
                element.eq(0).addClass("active");
            }
            if(st>eh){
                element.eq(1).addClass("active");
            }
            if(st>eh*2){
                element.eq(2).addClass("active");
            }
            if(st>eh*3){
                element.eq(3).addClass("active");
            }
            if(st>eh*4){
                element.eq(4).addClass("active");
            }
            if(st>eh*5){
                element.eq(5).addClass("active");
            }
        });
    }
}