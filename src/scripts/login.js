import {getAdmin} from "./connect";

let registrationModal = document.querySelector('#overlay')
let success = document.querySelector('#success')
let cancel = document.querySelector('#cancel')
let log = document.querySelector('#log')
let pas = document.querySelector('#pas')
let error = document.querySelector('#messageError')
let createBtn = document.querySelector('#createBook')
let $menu = document.querySelector('#menu')
let div = document.querySelector('div')
let admin =  []
// открытие окна
export let logIn = function (){
    registrationModal.classList.add('show', )
}




// закрытия окна
export let CANCEL = function () {
    registrationModal.classList.remove('show')
    log.value = ''
    pas.value = ''
    error.innerHTML = ' '
}

// рендер меню
let renderMenu = function (text , id, atribut ){
    let menu = `
        <div class = 'menu__items'>
        <div class="menu__item" id =  '${id}' data-auth = ${atribut} >${text}</div>
    </div>
        `
    $menu.innerHTML = menu
}


// выход из системы

let logOut  = function (){
    localStorage.setItem('admin' ,'')
    localStorage.clear()
    renderMenu(  'Вход', 'login' , 'false')
    createBtn.classList.remove('show')
}

renderMenu(  'Вход', 'login' ,'false' )




let successAdmin = function () {
    getAdmin()
    let arr = localStorage.getItem('admin')
    admin = JSON.parse(arr)
    if (log.value == admin[0].login && pas.value == admin[0].password) {
        registrationModal.classList.remove('show')
        log.value = ''
        pas.value = ''
        error.innerHTML = ''
        createBtn.classList.add('show')
        localStorage.setItem('auth', 'true')
        renderMenu(  'Выход', 'logout' ,'true' )


    } else if (log.value !== admin[0].login && pas.value !== admin[0].password){
        error.classList.add('show')
        error.innerHTML = 'Не верный логин или пороль !'

    }

}
success.addEventListener('click', successAdmin)

const listener = event => {
    if (event.target.dataset.auth === 'false') {
        logIn()
    } else{
        logOut()
    }

    }

$menu.addEventListener('click', listener)
cancel.addEventListener('click', CANCEL)
 document.addEventListener('DOMContentLoaded', ()=>{
     if(localStorage.getItem('auth')){
         renderMenu(  'Выход', 'logout' ,'true' )
         createBtn.classList.add('show')
     }
 })