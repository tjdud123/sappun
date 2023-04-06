//----------------------변수
//1. kr
const kr_lnb = document.querySelector('header .right>li:nth-child(1)>a') /* 두번째 */
const kr_lnb_open = document.querySelector('header .lang')
//2. 전체메뉴 + 닫기
const all_nav = document.querySelector('header .right>li:last-child>a')/* 4번쨰*/
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')/* 13 */
//3. acc gnb + sub
const nav_acc = document.querySelectorAll('nav>ul>li>a')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
//4.팝업

console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)

//-----------------event
//이벤트 실행 전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display = none

kr_lnb_open.style.display = "none"
all_nav_open.style.display = "none"
nav_acc_sub[0].style.display = "none"

//2.햄버거 클릭시 오픈되게 하기

all_nav.addEventListener('click', function(){
    console.log(this)
    all_nav_open.style.display = 'block'
})

//2.닫기 클릭시 오픈

all_nav_close.addEventListener('click', function(){
    console.log(this)
    all_nav_open.style.display = 'none'
})

//kr 클릭시 오픈되게 하기
let lang_boolean = true
kr_lnb.addEventListener('click', function(){
    if(lang_boolean){
        kr_lnb_open.style.display = 'block'
    }
    else{
        kr_lnb_open.style.display = 'none'
    }
    lang_boolean = !lang_boolean
})
/* kr_lnb.addEventListener('mouseover', function(){
    console.log(this)
    kr_lnb_open.style.display = 'block'
})
kr_lnb.addEventListener('mouseout', function(){
    console.log(this)
    kr_lnb_open.style.display = 'none'
}) */

//acc hover 오픈
nav_acc[12].addEventListener('mouseover', function(){
    console.log(this)
    nav_acc_sub[0].style.display = 'block'
})
nav_acc_sub[0].addEventListener('mouseover', function(){
    console.log(this)
    nav_acc_sub[0].style.display = 'block'
})
nav_acc[12].addEventListener('mouseout', function(){
    console.log(this)
    nav_acc_sub[0].style.display = 'none'
})
nav_acc_sub[0].addEventListener('mouseout', function(){
    console.log(this)
    nav_acc_sub[0].style.display = 'none'
})

//main_right popup
const right_popup = document.querySelector('#right_popup')
const popup_btn = document.querySelector('#popup_btn a:first-child')
const popup_box = document.querySelector('#right_popup .contents')
const scroll_up = document.querySelector('#popup_btn a:nth-child(4)')
const scroll_down = document.querySelector('#popup_btn a:nth-child(5)')
console.log(right_popup, popup_btn,scroll_up)
right_popup.style.transform = 'translateX(500px)'
/* popup_btn.addEventListener('click',function(){
    right_popup.style.transition = 'all 0.5s'
    right_popup.style.transform = 'translateX(0)'
}) 
 */

let popup_boolean = true
popup_btn.addEventListener('click', function(){
    
    if(popup_boolean){
        console.log('보이기')
        /* popup_boolean = false */
        right_popup.style.transition = 'all 0.5s'
        right_popup.style.transform = 'translateX(0)'
    }else{
        right_popup.style.transition = 'all 0.5s'
        right_popup.style.transform = 'translateX(500px)'
        console.log('숨기기')
        /* popup_boolean = true */
    }
    popup_boolean = !popup_boolean
})

//스크롤 버튼
let up_boolean = true
scroll_up.addEventListener('click', function(){
    if(up_boolean){
        window.scrollTo({top:0, behavior:"smooth"})
    }
})

let down_boolean= true
scroll_down.addEventListener('click', function(){
    if(down_boolean){
        window.scrollTo({bottom:0, behavior:"smooth"})
    }
})