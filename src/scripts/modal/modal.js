// генерация  модального окна
import {$} from './base'
import {Message} from "../util/message";

 const $message = document.querySelector('#message')
let  showMessage = false
let massage = new Message('', 'danger')

// event на праверку message
let MessageText = function() {
    if (!$message.text){
        $message.classList.add('hide')
    }
    console.log('load');
}

document.addEventListener('DOMContentLoaded',()=>{
    MessageText()
})
export function createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('MODAL')
    modal.insertAdjacentHTML('afterbegin', `
   <div class="modal__overlay">
   <div class="modalWindow modalWindow__wrapper" data-text>
   <div class="modalWindow__left">
   <img 
   src="https://avatars.mds.yandex.net/get-pdb/2339219/3d38813f-5b41-409c-9f2d-0f5f5994b72f/s1200?webp=false" 
   alt="img">
   </div>
   <div class="modalWindow__right" >text</div>
   <div class="button button__wrapper">
   <button data-order = 'close' id="order"  >заказать</button>
   <button data-close = 'true' >отменить</button>
</div>
</div>
   
</div>


    `)


    document.body.appendChild(modal)
    return modal
}
    $.modal   = function(options) {
        let cloasing = false
        const $modal = createModal(options)

        const modal =   {
            open() {
                $modal.classList.add('open')


            },
            close() {
                cloasing = true
                $modal.classList.remove('open')

            },


            saveHTML( html) {
                $modal.querySelector('[data-text]').innerHTML = html
            }
        }
            // event по кнопкам

        const listener = event => {
            if (event.target.dataset.order === 'order') {
                modal.close()
                massage.text = 'книга заказана '
                $message.innerHTML = massage.text
                $message.classList.remove('hide')
                setTimeout(()=>{
                    massage.text = ''
                    $message.classList.add('hide')
                },3000)
            }
            else if (event.target.dataset.close === 'close'){
                modal.close()
                massage.text = 'отмена заказа '
                $message.innerHTML = massage.text
                $message.classList.remove('hide')
                setTimeout(()=>{
                    massage.text = ''
                    $message.classList.add('hide')
                },3000)

            }
                }

        $modal.addEventListener('click', listener)


        return modal
}


