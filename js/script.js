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
        
        console.log(showImage)
        showName.innerHTML = nameItem;
        showPrice.innerHTML = priceItem;
        showSize.innerHTML = sizeItem; 
        
        overPlay.style.display = 'flex'
        let sizeNumber = document.querySelectorAll('.size-number')

        for (let j = 0; j < sizeNumber.length; j++){
            sizeNumber[j].onclick = function(){
                const itemActive = document.querySelector('.size-number.active2')
                if (itemActive){
                    itemActive.classList.remove('active2')
                }
                sizeNumber[j].classList.add('active2')
            }
        }
        let minusBtn = document.querySelector('.minus-btn')
        // console.log(minusBtn)
        let valueCount = 1; 
        let plusBtn = document.querySelector('.plus-btn')
        // console.log(plusBtn)
        plusBtn.onclick = function(){
            // let quantity = document.getElementById('quantity').value
            valueCount++;
            document.getElementById('quantity').value = valueCount;
            
        }
        minusBtn.onclick = function(){
            // let quantity = document.getElementById('quantity').value
            valueCount--;     
            if (valueCount <= 1){
                valueCount = 1;
            }   
            document.getElementById('quantity').value = valueCount;
        }
        // let likeBtn = document.querySelector('.like-btn')
        // let heart = document.querySelector('#heart')
        // likeBtn.onclick = function(){
        //     const likeBtnActive = document.querySelector('.fa-heart.heart')            
        //     if (likeBtnActive)
        //         likeBtnActive.classList.remove('heart')
        //     heart.classList.add('heart')
        // }
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




