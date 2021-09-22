// Nút menu 
var mainMenu = document.getElementById("main-menu");
var mobileMenu = document.getElementById("mobile-menu");
openMenu = function(){
    mainMenu.classList.add("active")
} 
closeMenu = function(){
    mainMenu.classList.remove("active")
} 
mobileMenu.onclick = function(){
    // console.log(mainMenu.classList.contains('active'))
    if(mainMenu.classList.contains('active')){
        closeMenu()
    } else{
        openMenu()
    }
}

// phần overplay
let items = document.querySelectorAll('.item')
let btn = document.querySelectorAll('.middle span')

let showImage = document.querySelector('.show-item-image img');
let showName = document.querySelector('.show-item-name');
let showPrice = document.querySelector('.show-item-price');
let showSize = document.querySelector('.show-item-size');

let overPlay = document.querySelector('.overplay')

// console.log(showImage)

for (let i = 0; i < items.length; i++){ 
    btn[i].onclick = function () {
        const imageItem = items[i].querySelector('.item-img img').src
        
        const nameItem = items[i].querySelector('.item-detail .item-name').innerText
        const priceItem = items[i].querySelector('.item-detail .price').innerText
        const sizeItem = items[i].querySelector('.item-detail .size').innerHTML
        
        showImage.src = imageItem;
        // console.log(imageItem)
        console.log(showImage)
        showName.innerHTML = nameItem;
        showPrice.innerHTML = priceItem;
        showSize.innerHTML = sizeItem; 
        
        overPlay.style.display = 'flex'
    }
}

let closeBtn = document.querySelector('div.close-btn')
if (closeBtn) {
    closeBtn.onclick = function(){
        overPlay.style.display = 'none'
    }
}

window.onclick = function(e){
    //console.log(e.target.classList.contains('overplay'))
    if (e.target.classList.contains('overplay')) {
        overPlay.style.display = 'none'
    }
}


// Nút go to top 
$(document).ready(function() {
    $("#gototop").hide()
    $(window).scroll(function() {
        if($(this).scrollTop() >= 100)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })
    $("#gototop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 0);
    })

    $("div.items > div.item").addClass("wow animate__fadeInUp")
    
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      })
      wow.init();
})



let sub = document.querySelector('li.sub');
let subContent = document.getElementById('sub-content');
let angle = document.querySelector('#angle-down')
sub.onclick = function(){  // =>  tuong duong  function()
    //console.log(subContent) 
    
    if (subContent.classList.contains('active')) {
        subContent.classList.remove('active');
        angle.style.transform = "rotate(0deg)";
    }
    else{
        subContent.classList.add('active');
        angle.style.transform = "rotate(180deg)";
    }
   
}

