let juso; // 전체주소 : juso2023.json
let si; // 시
let gu; // 구
let dong; // 동

// 시설유형
let equptype = {
    "노인시설":"001",
    "복지회관":"002",
    "마을회관":"003", 
    "보건소":"004",
    "주민센터":"005",
    "면동사모소":"006",
    "종교시설":"007",
    "금융기관":"008", 
    "정자":"009", 
    "공원":"010", 
    "정자 파고라":"011",
    "공원":"012", 
    "교량하부":"013", 
    "나무그늘":"014", 
    "하천둔치":"015", 
    "기타":"099"
}; 

//object 순회
//for ( let key in equptype){
//    console.log(key, equptype[key])
//};

//object 순회
//for ( let [k,v] of Object.entries(equptype)){
//    console.log(k, "=>", v);
//};

//주소 데이터 가져오기
//const getJuso = async() => {
//    const resp = await fetch("./json/juso2023.json");
//    const data = await resp.json();
//    juso = await resp.json();
//}

const addOption = (d,s) => {
    for ( let [k,v] of Object.entries(d)){
        let p = document.createElement("option");
        p.value = v;
        p.text = k;
        s.appendChild(p);
    }
};

const getData = (areaCd, equp) => {
    let url = 'https://apis.data.go.kr/1741000/HeatWaveShelter2/getHeatWaveShelterList2';
    let key = '?serviceKey=hnEwJ58FO4cilq2eST%2BJgn2uuRbC6EBulvkEeb6eX0VfrXYQ6JGGdBAbBnhZvTm3CUV2Btgwmb1h9JJ%2Fcwz%2Bgg%3D%3D'
    let pageNo = '&pageNo=1';
    let numOfRows = '&numOfRows=10';
    let type = '&type=json';
    let year = '&year=2023';
    let area = `&areaCd=${areaCd}`;
    let equpo = `&equptype=${equp}`;
    let contents;
    let viewTb = document.querySelector("#viewTb");
    url = url + key + pageNo + numOfRows + type + year + area + equpo;

    fetch(url)
    .then( resp => resp.json())
    .then( data => {
        console.log(data);
        try {
            let innerdiv = ``;
            contents = data.HeatWaveShelter[1].row;

            function textitem (contents){
                for ( let item of contents){
                    //console.log(item);
                    innerdiv = 
                            `<div class="flexboxbox">
                                <div class="flexelement">
                                    <p>쉼터시설번호 : ${item.restSeqNo}</p>
                                    <img class="img" src="./images/image.png">
                                    <p>(업데이트 연도 : ${item.year})</p>
                                </div>
                                <div class="flexelement">
                                    쉼터명 : <a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${item.restname}" target="_blank">${item.restname}</a>
                                    <p>시설면적 : ${item.ar}</p>
                                    <p>이용가능인원수 : ${item.usePsblNmpr}</p>
                                    <p>선풍기보유대수 : ${item.colrHoldElefn}</p>
                                    <p>에어컨보유대수 : ${item.colrHoldArcndtn}</p>
                                </div>
                                <div class="flexelement">
                                    <p>운영시작일자 : ${item.operBeginDe}</p>
                                    <p>운영종료일자 : ${item.operEndDe}</p>
                                    <p>야간개방 : ${item.chckMatterNightOpnAt}</p>
                                    <p>휴일개방 : ${item.chckMatterWkendHdayOpnAt}</p>
                                    <p>숙박가능여부 : ${item.chckMatterStayngPsblAt}</p>
                                </div>
                                <div class="flexelement">
                                    <p>특이사항 : ${item.rm}</p>
                                    <p>사용여부 : ${item.useYn}</p>
                                    <p>소재지지번 : ${item.dtlAdres}</p>
                                    <p>도로명주소 : ${item.restaddr}</p>
                                    <p>업데이트일 : ${item.updtDttm}</p>
                                </div>
                            </div>`;
                    viewTb.innerHTML += innerdiv;
                }
            };
            textitem(contents);       
        } catch (error) {
            viewTb.innerHTML = `해당하는 쉼터가 없습니다.`
        }

    })
    .catch( err => console.log(err));
};

document.addEventListener("DOMContentLoaded",()=>{
    let selSido = document.querySelector("#sel1");
    let selGU = document.querySelector("#sel2");
    let selDong = document.querySelector("#sel3");
    let selSisul = document.querySelector("#sel4");
    let viewTb = document.querySelector("#viewTb");
    const confirmbt = document.querySelector("#bt");
    let areaCd;
    let equp;

    fetch('./json/juso2023.json') // fetch는 비동기 방식으로 동작
    .then( (resp)=> resp.json()) // resp가 json으로 변경
    .then( (data)=> {
        juso = data;
        //console.log(juso);

        //sido 
        let si = {};
        juso.forEach(element => {
            //console.log(element);
            let {시도명칭, 시도코드} = element; //객체는 구조 분해가 가능하다
            
            if ( !si[시도명칭]){
                si[시도명칭] = 시도코드;
            }
        });
        addOption(si,selSido);
        addOption(equptype,selSisul);
        //gu
        selSido.addEventListener("change",()=>{
            selGU.replaceChildren();
            selDong.innerHTML="<option value=''>--동 선택--</option>";
            if(selSido.value === ""){
                selGU.innerHTML="<option value=''>--구 선택--</option>";            
            }
            let gu = {};
            juso
            .filter(item => item["시도코드"] === selSido.value)
            .map(item => {
                let {시군구코드, 시군구명칭} = item;
                if ( !gu[시군구명칭])
                    gu[시군구명칭] = 시군구코드;
            });
            addOption(gu,selGU);   
        })

        //dong
        selGU.addEventListener("click",()=>{
            selDong.replaceChildren();
            if(selGU.value === ""){
                selDong.innerHTML="<option value=''>--동 선택--</option>";            
            }
            let dong = {};
            juso
            .filter(item => item["시도코드"] === selSido.value && item["시군구코드"] === selGU.value)
            .map(item => {
                let {읍면동코드, 읍면동명칭} = item;
                if ( !dong[읍면동명칭])
                    dong[읍면동명칭] = 읍면동코드;
            });
            addOption(dong,selDong);

        })

        selSisul.addEventListener("click",()=>{
            equp = selSisul.value;
        })
    }) // juso를 바로 받아도 돼
    .catch( err => console.log(err));

    confirmbt.addEventListener("click", (e)=>{
        e.preventDefault(); // form 의 기본액션을 방지
        areaCd = selSido.value + selGU.value + selDong.value + +"0" + +"0";
        console.log(areaCd);
        if ( equp === undefined || equp === ""){
            alert("시설 유형을 선택하세요");
        }
        else if ( selSido.value === "" || selGU.value === "" || selDong.value === ""){
            alert("지역 선택이 올바르지 않습니다")
        }
        else{
            viewTb.replaceChildren();
            getData(areaCd,equp);
        }
    })
});

