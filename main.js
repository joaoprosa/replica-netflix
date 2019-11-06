let lupa = document.querySelector('#lupa')
let pesquina = document.querySelector('#pesquisa')

lupa.addEventListener('click', function(){
    if(pesquisa.style.display === 'flex'){
        pesquisa.style.display = 'none'
    }
    else{
        pesquisa.style.display = 'flex'
    }
})

let seta = document.querySelector('.blockMenu__spanImageArrow')
let usuario = document.querySelector('.blockMenu__spanPrincipal')

seta.addEventListener('mouseenter' , function(){
    if(usuario.style.display === 'flex'){
        usuario.style.display = 'none'
    }
    else{
        usuario.style.display = 'flex'
    }
})