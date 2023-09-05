document.addEventListener("DOMContentLoaded", ()=>{
    });

const roll = () =>{
    const adiv = document.querySelector("#adiv");
    let n = Math.floor(Math.random() * 6 +1) ;
    adiv.innerHTML = `<img src='./static/images/${n}.png'>`;

};

