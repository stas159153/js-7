const HTmlhours = document.querySelector('.hours')
const HTMLmin = document.querySelector('.min')
const HTMLsecond = document.querySelector('.second')
const button = document.querySelector('.save')
const istoria = document.querySelector('.istoria')
 let a = document.createElement("p");
   let date = new Date();

function updateTimer(){
   let date = new Date();
   let hours = date.getHours();
   let min = date.getMinutes();
   let second = date.getSeconds();

HTmlhours.textContent = hours +' :'
HTMLmin.textContent = min + ' :'
HTMLsecond.textContent = second
 let a = document.createElement("p");
  a.textContent = hours + " : " + min + " : " + second;
  a.classList.add('new')
 return a

}

button.addEventListener('click', event =>{
  let a = updateTimer()
istoria.append(a)
})

setInterval(updateTimer,1000)
