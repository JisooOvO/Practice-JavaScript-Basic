document.addEventListener("DOMContentLoaded", ()=>{
    const bts = document.querySelectorAll("button")

    console.log(bts)
    bts.forEach( (item) => {
       item.addEventListener('click', ()=>{
            dice(+item.textContent);
       });
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