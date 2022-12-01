// document.getElementById('menuBtn').addEventListener('click',()=>{
//     console.log('hello');
//     document.getElementById('nav').classList.toggle('menuShow')
// })

$(document).ready(function(){
    $('#menuBtn').click(function(){
        let isToggle = false
        $('nav').slideToggle()
        if(isToggle){
            $('header').css('box-shadow','rgba(149, 157, 165, 0.2) 0px 0px 0px')
            isToggle = false
        }else{
            $('header').css('box-shadow','rgba(149, 157, 165, 0.2) 0px 8px 24px')
            isToggle = true
        }

    })
})