const jaime =document.querySelector('#nombre')
const pouce =document.querySelector('#pouce')
const jaime1 =document.querySelector('#nombre1')
const pouce1 =document.querySelector('#pouce1')


pouce.addEventListener('click',function(){
    if(document.querySelector('#pouce').style.color!='rgb(2, 73, 139)'){
        document.querySelector('#pouce').style.color='rgb(2, 73, 139)'
        jaime.innerHTML='54'
    }
    else{
        document.querySelector('#pouce').style.color='rgb(43, 42, 42)'
        jaime.innerHTML='53'
    }
})

pouce1.addEventListener('click',function(){
    if(document.querySelector('#pouce1').style.color!='rgb(2, 73, 139)'){
        document.querySelector('#pouce1').style.color='rgb(2, 73, 139)'
        jaime1.innerHTML='80'
    }
    else{
        document.querySelector('#pouce1').style.color='rgb(43, 42, 42)'
        jaime1.innerHTML='79'
    }
})


document.querySelector('#logox').addEventListener('click',function(){
    if(document.querySelector('#notif').style.display==='none'){
        document.querySelector('#notif').style.display='block'
    }
    else{
        document.querySelector('#notif').style.display='none'
    } 
})

document.addEventListener('scroll',function(){
    document.querySelector('#notif').style.display='none'
})



document.querySelector('#logox1').addEventListener('click',function(){
    if(document.querySelector('#notif1').style.display==='none'){
        document.querySelector('#notif1').style.display='block'
    }
    else{
        document.querySelector('#notif1').style.display='none'
    } 
})

document.addEventListener('scroll',function(){
    document.querySelector('#notif1').style.display='none'
    if(document.querySelector('#video').style.display!='none'){
        document.querySelector('#video').style.display='none'
        document.querySelector('#play').style.display='flex'
    }
    if(document.querySelector('#video1').style.display!='none'){
        document.querySelector('#video1').style.display='none'
        document.querySelector('#play1').style.display='flex'
    }
   

})

document.querySelector('#fafao').addEventListener('click',function(){
    document.querySelector('#pub').style.display='none'
})

document.querySelector('#fafao1').addEventListener('click',function(){
    document.querySelector('#pub1').style.display='none'
})

document.querySelector('#play').addEventListener('click',function(){
    document.querySelector('#video').style.display='flex'
    document.querySelector('#play').style.display='none'
})

document.querySelector('#play1').addEventListener('click',function(){
    document.querySelector('#video1').style.display='flex'
    document.querySelector('#play1').style.display='none'
})