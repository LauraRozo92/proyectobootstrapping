let linkAbout =document.getElementById('linkAbout');
let linkResume =document.getElementById('linkResume');
let linkWorks =document.getElementById('linkWorks');
let linkBlog =document.getElementById('linkBlog');
let linkContact =document.getElementById('linkContact');
let about =document.getElementById('about');
let resume =document.getElementById('resume');
let works=document.getElementById('works');
let blog =document.getElementById('blog');
let contact =document.getElementById('contact');

function eliminar(){
    about.classList.remove('mostrarCaja');
    resume.classList.remove('mostrarCaja');
    works.classList.remove('mostrarCaja');
    blog.classList.remove('mostrarCaja');
    contact.classList.remove('mostrarCaja');
}
linkAbout.addEventListener('click',function(){
    eliminar();
    about.classList.add('mostrarCaja');
})

linkResume.addEventListener('click',function(){
    eliminar();
    resume.classList.add('mostrarCaja');
})

linkWorks.addEventListener('click',function(){
    eliminar();
    works.classList.add('mostrarCaja');
})

linkBlog.addEventListener('click',function(){
    eliminar();
    blog.classList.add('mostrarCaja');
})

linkContact.addEventListener('click',function(){
    eliminar();
    contact.classList.add('mostrarCaja');
})
console.log('juanita')
fetch("https://randomuser.me/api/").then((val)=>{
    return val.json();
}).then((val)=>{
    let name =document.getElementById('name');
    let email =document.getElementById('profesion');
    let userImage=document.getElementById('userImage');

    let emailVal=val.results[0].email;
    let nameVal= val.results[0].name;
    let userImageVal=val.results[0].picture

    name.innerHTML=`${nameVal.title} ${nameVal.first} ${nameVal.last} `
    email.innerHTML=`${emailVal}`
    userImage.src=`${userImageVal.large}`
    console.log(val)
})



console.log('carlos')