document.addEventListener("DOMContentLoaded", ()=>{
    const bts = document.querySelector("button")
    const radios = document.querySelectorAll("input[type=radio]")
    bts.addEventListener("click", ()=>{
    for ( let item of radios){
        if ( item.checked ){
            dice(+item.value);
            break;
        }
    }
  })
})

const dice = (n) =>{
    const grid = document.querySelector(".answer");
    if ( n == roll() ){
        grid.innerHTML = `<p>GREAT</p>`;
    }
    else
        grid.innerHTML = `<p>WRONG</p>`;
}


const roll = () =>{
    const adiv = document.querySelector("#adiv");
    let n = Math.floor(Math.random() * 6 +1) ;
    adiv.innerHTML = `<img class=flip-scale-2-hor-top src='./static/images/${n}.png'>`;
    return n;
};