window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burder__menu').classList.toggle('menu_is_active')
    })
})