document.addEventListener("DOMContentLoaded", ()=>{

    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const div1 = document.querySelector("#div1")
    const text = document.querySelector("#txt1");
    const text2 = document.querySelector("#txt2");
    let selectCorF = sel1.value;
    let textF = (text.value * 1.8) + 32;
    
    sel1.addEventListener("change", ()=>{
        if (sel1.value == "C"){
            toggle("C","F","℃","℉")
            textF = (text.value * 1.8) + 32;
            text2.value = textF;
        }
        else{
            toggle("F","C","℉","℃")
            textF = (text.value - 32)/1.8
            text2.value = textF;

        }
        selectCorF = sel1.value;
    });
    
    sel2.addEventListener("change", ()=>{
        if (sel2.value == "C"){
            toggle("F","C","℉","℃")
            textF = (text.value - 32)/1.8
            text2.value = textF;
        }
        else{
            toggle("C","F","℃","℉")
            textF = (text.value * 1.8) + 32;
            text2.value = textF;
        }
        selectCorF = sel1.value;
    });

    text.addEventListener("input", () =>{
        if(selectCorF == "C"){
            textF = (text.value * 1.8) + 32;
            text2.value = textF;
        }
        else{
            textF = (text.value - 32)/1.8
            text2.value = textF;
        }
    });
});

const toggle = (v1, v2, v3 ,v4) => {
    sel1.value = v1;
    sel2.value = v2;
    div1.textContent = v3;
    div2.textContent = v4;
}