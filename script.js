console.log('hello world!');
const container = document.querySelector('.container')
const registerBtn = document.querySelector('.register.btn')
const cloginBtn = document.querySelector('.login.btn')

registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
})

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
})