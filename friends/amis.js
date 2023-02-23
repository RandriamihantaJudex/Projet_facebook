
let miles = document.querySelectorAll('.miles')
let tous = document.querySelectorAll('.ajout')
let cancel = document.querySelectorAll('.clear')
let annuler = document.querySelectorAll('.retour')

function affichage(boutonajouter,i) {
    boutonajouter[i].addEventListener('click',function(){
        annuler[i].style.display='flex'
        tous[i].style.display='none'
        cancel[i].style.display='none'
    })
}

function nul(boutonajouter,i) {
    boutonajouter[i].addEventListener('click',function(){
        annuler[i].style.display='none'
        tous[i].style.display='flex'
        cancel[i].style.display='flex'
    })
}

function mamafa(boutonajouter,i) {
    boutonajouter[i].addEventListener('click',function(){
        miles[i].style.display='none'
    })
}

affichage(tous,0)
affichage(tous,1)
affichage(tous,2)
affichage(tous,3)
affichage(tous,4)

nul(annuler,0)
nul(annuler,1)
nul(annuler,2)
nul(annuler,3)
nul(annuler,4)

mamafa(cancel,0)
mamafa(cancel,1)
mamafa(cancel,2)
mamafa(cancel,3)
mamafa(cancel,4)


