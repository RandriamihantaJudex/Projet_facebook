const jaime =document.querySelector('#nombre')
const pouce =document.querySelector('#pouce')

pouce.addEventListener('click',function(){
    if(document.querySelector('#pouce').style.color!='rgb(2, 73, 139)'){
        document.querySelector('#pouce').style.color='rgb(2, 73, 139)'
        jaime.innerHTML='46'
    }
    else{
        document.querySelector('#pouce').style.color='rgb(43, 42, 42)'
        jaime.innerHTML='45'
    }
})





document.querySelector('#bouton').addEventListener('mousedown',function(){
    i=1
  duree=window.setInterval(() => {
       i++
    },1);
    console.log(i)
})
document.querySelector('#bouton').addEventListener('mouseup',function(){
    
})

