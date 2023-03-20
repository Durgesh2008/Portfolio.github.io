// for tab 
let tab_contents=document.getElementsByClassName('tab-contents');
let tab_links=document.getElementsByClassName('tab-links');
Array.from(tab_links).forEach(e => {

    e.addEventListener('click',()=>{
        Array.from(tab_links).forEach(e => {
            e.classList.remove('active-link')
        }); 
        Array.from(tab_contents).forEach(e => {
            e.classList.remove('active-tab');
        });
    
      e.classList.add('active-link');
      tab_contents[e.id].classList.add('active-tab')
        })
});

let openmenu=document.getElementById('openmenu');
let closemenu=document.getElementById('closemenu');
let sidemenu=document.getElementById('sidemenu');
openmenu.addEventListener('click',()=>{
sidemenu.style.right="0";
})
closemenu.addEventListener('click',()=>{
    sidemenu.style.right="-200px";
    })

