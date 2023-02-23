document.querySelector('#bouton').addEventListener('click',function(){
    document.querySelector('#accord').style.display='block'
    document.querySelector('#bouton').style.display='none' 
})

document.querySelector('#nul').addEventListener('click',function(){
    document.querySelector('#accord').style.display='none'
    document.querySelector('#bouton').style.display='flex' 
})