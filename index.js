// const manual_btn_circles = document.querySelectorAll('.circle');

// For Time being the pc version not available
// Small screen Nav bar 
function show_menu(ele, nav_menu) {
  const hamburger_ = ele.querySelector('.hamburger_icon');
  hamburger_.classList.toggle('open');
  const nav_items = document.querySelector(nav_menu);
  if (hamburger_.classList.contains('open')) {
    nav_items.style.left = "0%";
  }
  else {
    nav_items.style.left = "-100%";
  }
}


$(document).ready(function() {
    
  $("#banner-area .owl-carousel").owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });

  var dots = $('.owl-dots').css('position', 'absolute').css('bottom', '5px');
dots.css('left', 'calc(50% - ' + dots.width()/2+'px)');

$("#imgBtn").on('click',(e)=>{
  e.target.classList.toggle('showLa');
  document.querySelector("#photoGallery").classList.toggle('show');
})



});




// Reference: codegrepper.com/code-examples/javascript/javascript+touch+scroll+event

// var lastTouch = null
// var offset=0
// // var offset_y=0
// var max_offset=40
// var firstTouch=null
// const landing_pg=document.querySelector(".landing_pg");
// const target=document.getElementById('container'),
// slide=document.getElementById("fake_slider"),
// slides=Array.from(document.querySelectorAll('.wedding_img'))

// let 
// last_scroll_left=0,
// current_scroll_left=0,
// isMoving=false,
// isDragging=false,
// isScrollLeft=false,
// grabbing=false,
// startPos=0,
// startPosY=0,
// currentTranslate,
// prevTransalte=0,
// animationID=0,
// currentIndex=0,
// direction=0,
// last_index=slides.length-1,
// auto_slide=true,
// scrn_width=window.innerWidth



//     // ToucH Events
//     slide.addEventListener('touchstart',touchStart())
//     slide.addEventListener('touchend',touchEnd)
//     slide.addEventListener('touchmove',touchMove)
    
//     // Mouse Events
//     slide.addEventListener('mousedown',touchStart())
//     slide.addEventListener('mouseup',touchEnd)
//     slide.addEventListener('mouseleave',touchEnd)
//     slide.addEventListener('mousemove',touchMove)    
  




// // landing_pg.scrollLeft=360

// // Disable context menu
// // window.oncontextmenu=function (event) {
// //   event.preventDefault()
// //   event.stopPropagation()
// //   return false
// // }

// function getPosX(event) {
//   return event.type.includes('mouse') ? event.pageX :
//     event.touches[0].clientX
// }

// // function animation(index) {


// //   if(isDragging){
// //     // console.log('ok')
// //     setSliderPosition();
// //     requestAnimationFrame(animation)
// //   }
// // }

// function setSliderPosition() {
//   // return target.style.transform=`translateX(${currentTranslate}px)`;
//   return landing_pg.scrollLeft=currentIndex*scrn_width
// }

// function active_circle(manual_slide=1) {
//   console.log(currentIndex)
//   for(var i=0;i<last_index+1;i++){
//     if(manual_btn_circles[i].classList.contains('active')){
//       manual_btn_circles[i].classList.remove('active');
//     }
//   }
//   if(!(manual_btn_circles[currentIndex].classList.contains('active'))){
//     if(currentIndex==last_index && manual_slide==1){
//       manual_btn_circles[0].classList.add('active');
//     }
//     else if(currentIndex==last_index && manual_slide==0){
//       manual_btn_circles[last_index].classList.add('active');
//     }
//     else{
//       manual_btn_circles[currentIndex+manual_slide].classList.add('active');
//     }
//   }
// }


// // Manual Click
// // function chnge_slide(direction,auto=false) {
// //     // if(!auto){
// //     //   cancelAnimationFrame(slide_auto)
// //     // }
// //     active_circle();
// //     if(currentIndex==2 && direction==-1) {
// //       currentTranslate=0
// //       currentIndex=0
// //       prevTransalte=0
// //       target.style.transition='none'
// //       return target.style.transform=`translateX(${currentTranslate}px)`;
// //     }
// //     else if(currentIndex==0 && direction==1){
// //       currentTranslate=getCT_after_t_end(last_index)
// //       currentIndex=last_index
// //       prevTransalte=currentTranslate
// //       target.style.transition='none'
// //       return target.style.transform=`translateX(${currentTranslate}px)`;
// //     }
// //     else{
// //       const window_width=window.innerWidth
// //       currentTranslate=currentTranslate+(direction*window_width)
// //       prevTransalte=currentTranslate
// //       currentIndex=currentIndex-direction
// //       target.style.transition='transform 0.3s ease-out'
// //       return target.style.transform=`translateX(${currentTranslate}px)`;

// //     }

// // }


// slide.scrollLeft=25


// // Get currnt translte after release
// function getCT_after_t_end(index) {
//   return -(index*window.innerWidth)
// }

// function touchStart() {
//   // cancelAnimationFrame(slide_auto)
//   return function (event) {
//     target.style.animation="none"
//     auto_slide=false
//     if(slide.scrollLeft==25){
//       currentIndex=0
//     }
//     target.style.transition='transform 0.3s ease-out'
//     isDragging=true
//     startPos=getPosX(event)
//     slide.scrollLeft=30
//     // startPosY=getPosY(event)
//     // prevTransalte=currentTranslate
//   }
// }

// function touchMove(event) {
//   if(slide.scrollLeft!=30){
//     isScrollLeft=true
//   }
//   else{
//     isScrollLeft=false
//   }
//   // console.log(slide.scrollLeft);
//   // const currentPosition=getPosX(event)
//   // offset=startPos-currentPosition
//   if(isDragging && isScrollLeft){
//     // console.log("moving")
//       pos=currentIndex+1
//       const currentPosition = getPosX(event)
//       offset=currentPosition-startPos
//       console.log("offset is ",offset)
//       currentTranslate = currentPosition+prevTransalte -startPos
//       if(currentIndex==0 && currentTranslate>=0){
//         currentTranslate=0
//       }
//       else if(currentIndex==last_index && offset<0){
//         console.log("Going aage of the 3rd photo")
//         currentTranslate=prevTransalte
//       }
//       else{
//         animationID = requestAnimationFrame(animation)
//       }
//     }
//   }

// function touchEnd() {
//   prevTransalte=currentTranslate
//   slide.scrollLeft=30
//   isDragging=false
//   cancelAnimationFrame(animation)
//   if(isScrollLeft){
//     if(offset>max_offset && currentIndex!=0){
//       console.log("Move left")
//       currentIndex=currentIndex-1
//       if(currentIndex==last_index){
//         direction=-1
//       }
//       currentTranslate=getCT_after_t_end(currentIndex)
//       prevTransalte=currentTranslate
//       chngeSlide()
//       active_circle(0)
//       // setSliderPosition();
//     }
//     else if(offset<-(max_offset) && currentIndex!=last_index){
//       console.log("mover Right")
//       currentIndex=currentIndex+1
//       console.log("Current after end Index",currentIndex);
//       direction=-1
//       currentTranslate=getCT_after_t_end(currentIndex)
//       prevTransalte=currentTranslate
//       chngeSlide()
//       active_circle(0)
//       // setSliderPosition();
//     }
//     else{
//       // setSliderPosition();
//       chngeSlide()
//       currentTranslate=getCT_after_t_end(currentIndex)
//       prevTransalte=currentTranslate
//       // active_circle(currentIndex)
//     }
//   }
//   auto_slide=true
//   // target.style.animation="auto_slide 9s infinite forwards"
//   // slide_auto()

// }


// Auto Slide 
// setInterval(() => {
  
// }, 3000);


// function touchStart(index) {
//   return function (event) {
//     currentIndex=index
//     startPos=getPosX(event)
//     isDragging=true

//     // animationID = requestAnimationFrame(animation)
//     chngeSlide()
//     target.classList.add('grabbing')
//   }
// }

// function getPosX(event) {
//   return event.type.includes('mouse') ? event.pageX :
//     event.touches[0].clientX
// }

// function touchEnd() {
//   isDragging=false
//   isMoving=false
//   cancelAnimationFrame(animation)
//   target.classList.remove('grabbing')

//     if(offset<-100){
// console.log(window.innerWidth)
// console.log("PrevTranslate is ",prevTransalte)
// console.log("in direction -1")
//       currentIndex=currentIndex+1;
//       prevTransalte=-currentIndex*window.innerWidth;
//       // prevTransalte=currentIndex*
//       // target.style.left=`-${currentIndex*100}vw`;
//       direction=-1
//       chngeSlide();
//     }
//     else if(offset>100){
//       if(currentIndex!=0){
// console.log("in direction 1")
// console.log(currentIndex)
//         currentIndex=currentIndex-1
//         prevTransalte=currentIndex*window.innerWidth;
//         direction=-1
//         chngeSlide()
//       }
//     }
//     else{
//       // prevTransalte=0
//       chngeSlide()
//     }



// }

// function touchMove(event) {
//   isMoving=true
//   // currentTranslate=0
//     if(isDragging){
// console.log("moving")
//       pos=currentIndex+1
//       const currentPosition = getPosX(event)
//       offset=currentPosition-startPos
//       currentTranslate = currentPosition+prevTransalte -startPos
// console.log(currentTranslate)
//       if(currentIndex==0 && currentTranslate>=0){
//         currentTranslate=0
//       }
//       else if(currentIndex==2 && offset<0){
// console.log("Going aage of the 3rd photo")
//       }
//       else{
//         animationID = requestAnimationFrame(animation)
//       }
//     }
// }

// function chngeSlide() {
//   console.log("Current Index is ",currentIndex)
//   console.log(direction*currentIndex*100)
//   target.style.transform=`translateX(${direction*currentIndex*100}vw)`;

// }

// function animation(index) {


//   if(isDragging || isMoving){
// // console.log('ok')
//     setSliderPosition();
//     requestAnimationFrame(animation)
//   }
//   else{
//     chngeSlide();
//   }
// }

// function setSliderPosition(params) {
//   target.style.transform =`translateX(${currentTranslate}px)`;
// }

// target.style.left='0%';


// window.addEventListener('touchstart', function (event) {
//   lastTouch = event.touches[0];
//   firstTouch=lastTouch.screenX;
// console.log("Touch Start")
// console.log(lastTouch);
// })

// window.addEventListener('touchend', function (event) {
//   lastTouch = null
// console.log("Touch end")
// console.log(offset)
//   if(offset>20){
// console.log("Scrolled Right")
//     }
//   else if(offset<-20){
// console.log("Scrolled Left")
//   }
//   else{
// console.log("Not scrolled")
//   }    
//   })

// window.addEventListener('touchmove', function (event) {
// console.log("Touch Move")
//   var currentTouch = event.changedTouches[0]

//   if (lastTouch) {
//   	target.scrollTop += currentTouch.clientY - lastTouch.clientY
//   }
// console.log(currentTouch)
//   lastTouch = currentTouch
//   offset=firstTouch-lastTouch.screenX
// console.log("Off set is ",offset);
//   container_scroll(offset);
// console.log(offset)
// })

// function container_scroll(offset) {
//     target.style.left=`${-offset}%`;
// }


// Reference https://codepen.io/Peety/pen/qZJGwE

// Onclick on Google Map to show the map

function show_map(btn,foo) {
  const map=document.querySelector(foo);
  if(map.classList.contains('show')){
    map.classList.remove('show')
    btn.innerHTML="Google Map <img src='./Images/map.png' alt='' srcset='' width=20'>"
  }
  else{
    btn.innerHTML="Close Map<img src='./Images/map.png' alt='' srcset='' width=20'>"
    map.classList.add('show')
  }
  
}

