

document.getElementById('login').addEventListener('click',function(event){
    // prevent event default behave(reload browsr)
    event.preventDefault();
  const phn=document.getElementById('phone').value;
  const pass=document.getElementById('pin').value;
  if(phn==='01726784905' && pass==='1234')
  {
    window.location.href='home.html';
  }
  else{
    alert('Wrong phone number or pin');
  }
})

 