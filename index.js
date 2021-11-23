// For Time being the pc version not available
// Small screen Nav bar 
function show_menu(ele,nav_menu) {
    const hamburger_= ele.querySelector('.hamburger_icon');
    hamburger_.classList.toggle('open');
    const nav_items=document.querySelector(nav_menu);
    if(hamburger_.classList.contains('open')){
        nav_items.style.left="0%";
    }
    else{
        nav_items.style.left="-100%";
    }
}