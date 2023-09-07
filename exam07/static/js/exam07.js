document.addEventListener("DOMContentLoaded",()=>{
    const bt = document.querySelector("#bt");
    const touchcell = document.querySelectorAll(".cell");
    const restart = document.querySelector(".restart");
    let bombpos;
    let flag = 0;
    let touchOnOff = 0;
    let touchCount = 0;
    let cnt = 1;

    /** 폭탄섞기 버튼 클릭 **/
    bt.addEventListener("click",()=>{
        let countbomb = 100;
        let cntCell = 1;
        bombpos = bomb();
        touchOnOff = 0;
        touchcell.forEach( (item) => {
            setTimeout( ()=>{
                item.innerHTML = `<img src='./static/images/boom.png'>`;
            },countbomb)
            setTimeout( ()=>{
                item.innerHTML = cntCell++;
            },countbomb+50)
            countbomb += 100;
        })
        setTimeout ( ()=>{
            touchOnOff = 9;
        },1000)
        flag = 1;
    })

    /** 터치 패널 동작 **/
    touchcell.forEach( (item) => {
        item.addEventListener("click", ()=>{
            const bombtext = document.querySelector(".bombtext");
            if( flag != 1){
                alert("폭탄을 먼저 섞으세요");
            }
            else if(touchOnOff == 9){
                console.log(touchCount);

                if(touchCount >= 7){
                    bombtext.innerHTML = "<p class=tracking-in-expand-fwd-bottom>GREAT!</p>";
                    touchcell[bombpos-1].innerHTML = `<img src='./static/images/hart.png'>`;
                    restart.innerHTML = "<button class=resbt>Restart?</button>";
                    let res = document.querySelector(".resbt");
                    res.addEventListener("click", ()=>{
                        touchcell.forEach( (item) => {
                            item.textContent = cnt;
                            cnt ++;
                        })
                        bombtext.textContent = "";
                        cnt = 1;
                        flag = 0;
                        touchOnOff = 0;
                        touchCount = 0;
                        bt.disabled = false;
                        restart.innerHTML = "";
                        bombpos = bomb();
                    })
                }

                /** 폭탄 클릭 **/
                if(+item.textContent === bombpos){
                    item.innerHTML = `<img src='./static/images/boom.png'>`;
                    touchOnOff = 0;
                
                    bombtext.innerHTML = "<p class=tracking-in-expand-fwd-bottom>BOMB!</p>";

                    /** Restart **/
                    restart.innerHTML = "<button class=resbt>Restart?</button>";
                    let res = document.querySelector(".resbt");
                    
                    bt.disabled = true;
                    res.addEventListener("click", ()=>{
                        touchcell.forEach( (item) => {
                            item.textContent = cnt;
                            cnt ++;
                        })
                        bombtext.textContent = "";
                        cnt = 1;
                        flag = 0;
                        touchOnOff = 0;
                        touchCount = 0;
                        bt.disabled = false;
                        restart.innerHTML = "";
                        bombpos = bomb();
                    })
                }
                /** 하트 클릭 **/
                else{
                    item.innerHTML = `<img src='./static/images/hart.png'>`;
                    touchCount++;
                }
             
            }
        })
    })
})

/** 폭탄 돌리기 **/
function bomb(){
    let n = Math.floor(Math.random() * 9 +1) ;
    //let n = 1;
    return n;
}