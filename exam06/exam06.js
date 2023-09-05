document.addEventListener("DOMContentLoaded",()=>{
    const ghlans = document.querySelectorAll("input[type=button]");
    const text = document.querySelector("#txt1");
    let textvalue = "";

    text.addEventListener("input", ()=>{
        textvalue = text.value;
    })

    ghlans.forEach(item => {
        item.addEventListener("click",()=>{
            if(item.value === "회문 확인")
                palindrome(text.value);
            else
                numSum(text.value);
        })
    })

    const resetbt = document.querySelector("input[type=reset");
    resetbt.addEventListener("click", ()=>{
        arr1.length = 0;
    })

    let arr1 = [];

    const bt1s = document.querySelectorAll(".bt1");
    bt1s.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            e.preventDefault();
            switch(item.textContent){
                case '사과' : arr1.push('🍎'); break;
                case '바나나' : arr1.push('🍌'); break;
                case '당근' : arr1.push('🥕'); break;
                case '수박' : arr1.push('🍉'); break;
            }
            text.value = arr1.join(",");
        })
    })

    const bt2s = document.querySelectorAll(".bt2");
    bt2s.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            e.preventDefault();
            switch(item.textContent){
                case '사과삭제' : 
                    arr1 = arr1.filter( (item) => item !='🍎'); 
                    break;
                case '바나나삭제' : 
                    arr1 = arr1.filter( (item) => item !='🍌'); 
                    break;
                case '당근삭제' : 
                    arr1 = arr1.filter( (item) => item !='🥕'); 
                    break;
                case '수박삭제' : 
                    arr1 = arr1.filter( (item) => item !='🍉'); 
                    break;
            }
            text.value = arr1.join(",");
        })
    })

    const bt3s = document.querySelectorAll(".bt3");
    bt3s.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            e.preventDefault();
            switch(item.textContent.slice(0,2)){
                case '사과' : 
                    arr1 = arr1.map( (item) => item ==='🍎'? '🥒' : item); 
                    break;
                case '바나' : 
                    arr1 = arr1.map( (item) => item ==='🍌'? '🥦' : item); 
                    break;
                case '당근' : 
                    arr1 = arr1.map( (item) => item ==='🥕'? '🍊' : item); 
                    break;
                case '수박' : 
                    arr1 = arr1.map( (item) => item ==='🍉'? '🍇' : item); 
                    break;
            }
            text.value = arr1.join(",");
        })
    })
})

const palindrome = (textvalue) => {
    if (textvalue.length === 0) {
        return ;
    }
    const txt2 = document.querySelector("#txt2");
    let tmp = textvalue.split("").reverse().join("");
    if ( textvalue === tmp)
        txt2.value = "O";
    else
        txt2.value = "X";
}

const numSum = (textvalue) => {
    let sum = 0;
    let tmp = [];
    let t;
    for ( let c of textvalue){
        if (!isNaN(+c)){
            tmp.push(c);
        }
        else{
            t = tmp.join("");
            sum += +t;
            tmp.splice(0,tmp.length)
        }
    }
    t = tmp.join("");
    sum += +t;
    txt2.value = sum;
}