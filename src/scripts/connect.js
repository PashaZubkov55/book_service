// коннектимся к серверу на получения запросов

import {books} from "../index";
 export let  addDataLocalStore =  async function() {
     return await fetch('http://localhost:3000/books')
         .then((resp) => resp.json())
         .then(
             response => {
                 console.log(response)
                 localStorage.setItem('data', JSON.stringify(response))


             })
 }

 export let getAdmin =   function (password , log){
    return  fetch('http://localhost:3000/admin')
        .then(res=> res.json())
        .then(response=>{
            localStorage.setItem('admin',JSON.stringify(response))
        })
}

export let  addBooks =   async function (title, author, image, price){
   let book = {
      title: title,
        author: author,
        image: image,
        price: price
    }

     return await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(book)
    }) .then(res => res.json());

}
addDataLocalStore()
