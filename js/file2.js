document.getElementById('add').addEventListener('click',function(event){
    event.preventDefault();
    const p=document.getElementById('add');
    console.log(p.innerText);
    window.location.href='/add.html';
 })