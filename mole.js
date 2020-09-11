// Write your JS here.
// window.addEventListener("DOMContentLoaded",() => {
//   setInterval(()=> {
//       const moleHeads = document.querySelectorAll(".wgs__mole-head");
//       for(let moleHead of moleHeads){
//         moleHead.classList.toggle("wgs__mole-head--hidden")
//       }
//   }, 1000)
// })

function popUpRandomMole() {
    const moleHeads = document.querySelectorAll('.wgs__mole-head');
    let randNum = Math.floor((Math.random() * 7));
    let mole = moleHeads[randNum];
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(() => hideMole(mole), 3000);
}

function hideMole(mole){
  mole.classList.remove("wgs__mole-head--hidden");
  setTimeout(popUpRandomMole, 1000);
}

window.addEventListener("DOMContentLoaded", (event) => {
    event.stopPropagation();
    setTimeout(popUpRandomMole, 0);
    const moleHeads = document.querySelector('.pf');
    moleHeads.addEventListener('click', (event) => {
        event.target.classList.add('wgs__mole-head--hidden');
    });
});
