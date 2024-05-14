const target = document.getElementById('target');
let yes = document.getElementById('yes');

yes.addEventListener('click',() =>{
    alert("I love you too jaan mera babu😘😍🥰");


})

function moveTarget(){
    const maxWidth = 400;
    const maxHeight = 400;

    const ranomx = Math.floor(Math.random() * maxWidth);
    const ranomy = Math.floor(Math.random()*maxHeight);

    target.style.left = ranomx + 'px';
    target.style.top = ranomy + 'px';

}


target.addEventListener('mousemove',function(){ 
    moveTarget();
})

