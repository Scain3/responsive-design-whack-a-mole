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
    const moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked)');
    console.log(moleHeads);
    let randNum = Math.floor((Math.random() * moleHeads.length));
    console.log(randNum);
    let mole = moleHeads[randNum];
    console.log(mole);
    if(moleHeads.length === 0) {
        alert("YOU WON!!");
        return;
    }
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => hideMole(mole), 3000);
}

function hideMole(mole){
  mole.classList.add("wgs__mole-head--hidden");
  setTimeout(popUpRandomMole, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(()=> {
        let moles = document.querySelectorAll(".wgs__mole-head");
        moles.forEach((mole) =>{
            mole.classList.add("wgs__mole-head--hidden")
        })
        setTimeout(popUpRandomMole, 0);
    }, 3000);
    const moleHeads = document.querySelector('.pf');
    moleHeads.addEventListener('click', (event) => {
        event.target.classList.add('wgs__mole-head--hidden');
        event.target.classList.add('wgs__mole-head--whacked');
    });
});
