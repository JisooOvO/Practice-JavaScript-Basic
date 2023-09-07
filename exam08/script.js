document.addEventListener("DOMContentLoaded", ()=>{
    const dateSelect = document.querySelector("#date1");
//  const dateSelect = document.querySelector("input[type=date]");
    const movieBody = document.querySelector(".moviebody");
    const multiMovieYn0 = document.querySelector("#multiMovieYn0");
    const multiMovieYn1 = document.querySelector("#multiMovieYn1");
    const multiMovieYn2 = document.querySelector("#multiMovieYn2");
    const repNationCd1 = document.querySelector("#repNationCd1");
    const repNationCd2 = document.querySelector("#repNationCd2");
    const repNationCd3 = document.querySelector("#repNationCd3");
    let movieRank = null;
    let movieName = null;
    let movieTake = null;
    let openDt = null;
    let salesShare = null;
    let salesInten = null;
    let salesAcc = null;
    let audiCnt = null;
    let audiInten = null;
    let audiAcc = null;
    let scrnCnt = null;
    let showCnt = null;
    let multiMovie = "";
    let repNAtion = "";

    repNationCd1.addEventListener("click",()=>{
        repNAtion = "";
        movieRank = document.querySelectorAll(".movieRank");
        movieName = document.querySelectorAll(".movieName");
        movieTake = document.querySelectorAll(".movieTake");
        openDt = document.querySelectorAll(".openDt");
        salesShare = document.querySelectorAll(".salesShare");
        salesInten = document.querySelectorAll(".salesInten");
        salesAcc = document.querySelectorAll(".salesAcc");
        audiCnt = document.querySelectorAll(".audiCnt");
        audiInten = document.querySelectorAll(".audiInten");
        audiAcc = document.querySelectorAll(".audiAcc");
        scrnCnt = document.querySelectorAll(".scrnCnt");
        showCnt = document.querySelectorAll(".showCnt");
        getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt);        
    })

    repNationCd2.addEventListener("click",()=>{
        repNAtion = "K";
        movieRank = document.querySelectorAll(".movieRank");
        movieName = document.querySelectorAll(".movieName");
        movieTake = document.querySelectorAll(".movieTake");
        openDt = document.querySelectorAll(".openDt");
        salesShare = document.querySelectorAll(".salesShare");
        salesInten = document.querySelectorAll(".salesInten");
        salesAcc = document.querySelectorAll(".salesAcc");
        audiCnt = document.querySelectorAll(".audiCnt");
        audiInten = document.querySelectorAll(".audiInten");
        audiAcc = document.querySelectorAll(".audiAcc");
        scrnCnt = document.querySelectorAll(".scrnCnt");
        showCnt = document.querySelectorAll(".showCnt");
        getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt);        
    })

    repNationCd3.addEventListener("click",()=>{
        repNAtion = "F";
        movieRank = document.querySelectorAll(".movieRank");
        movieName = document.querySelectorAll(".movieName");
        movieTake = document.querySelectorAll(".movieTake");
        openDt = document.querySelectorAll(".openDt");
        salesShare = document.querySelectorAll(".salesShare");
        salesInten = document.querySelectorAll(".salesInten");
        salesAcc = document.querySelectorAll(".salesAcc");
        audiCnt = document.querySelectorAll(".audiCnt");
        audiInten = document.querySelectorAll(".audiInten");
        audiAcc = document.querySelectorAll(".audiAcc");
        scrnCnt = document.querySelectorAll(".scrnCnt");
        showCnt = document.querySelectorAll(".showCnt");
        getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt);        
    })

    multiMovieYn0.addEventListener("click",()=>{
        multiMovie = "";
        movieRank = document.querySelectorAll(".movieRank");
        movieName = document.querySelectorAll(".movieName");
        movieTake = document.querySelectorAll(".movieTake");
        openDt = document.querySelectorAll(".openDt");
        salesShare = document.querySelectorAll(".salesShare");
        salesInten = document.querySelectorAll(".salesInten");
        salesAcc = document.querySelectorAll(".salesAcc");
        audiCnt = document.querySelectorAll(".audiCnt");
        audiInten = document.querySelectorAll(".audiInten");
        audiAcc = document.querySelectorAll(".audiAcc");
        scrnCnt = document.querySelectorAll(".scrnCnt");
        showCnt = document.querySelectorAll(".showCnt");
        getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt);
    })
    
    multiMovieYn1.addEventListener("click",()=>{
        multiMovie = "Y";
        movieRank = document.querySelectorAll(".movieRank");
        movieName = document.querySelectorAll(".movieName");
        movieTake = document.querySelectorAll(".movieTake");
        openDt = document.querySelectorAll(".openDt");
        salesShare = document.querySelectorAll(".salesShare");
        salesInten = document.querySelectorAll(".salesInten");
        salesAcc = document.querySelectorAll(".salesAcc");
        audiCnt = document.querySelectorAll(".audiCnt");
        audiInten = document.querySelectorAll(".audiInten");
        audiAcc = document.querySelectorAll(".audiAcc");
        scrnCnt = document.querySelectorAll(".scrnCnt");
        showCnt = document.querySelectorAll(".showCnt");
        getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt);
    })
    
    multiMovieYn2.addEventListener("click",()=>{
        multiMovie = "N";
        movieRank = document.querySelectorAll(".movieRank");
        movieName = document.querySelectorAll(".movieName");
        movieTake = document.querySelectorAll(".movieTake");
        openDt = document.querySelectorAll(".openDt");
        salesShare = document.querySelectorAll(".salesShare");
        salesInten = document.querySelectorAll(".salesInten");
        salesAcc = document.querySelectorAll(".salesAcc");
        audiCnt = document.querySelectorAll(".audiCnt");
        audiInten = document.querySelectorAll(".audiInten");
        audiAcc = document.querySelectorAll(".audiAcc");
        scrnCnt = document.querySelectorAll(".scrnCnt");
        showCnt = document.querySelectorAll(".showCnt");
        getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt);
    })

    dateSelect.addEventListener("change",()=>{
        for ( let i=0 ; i<10 ; i++){
            movieBody.innerHTML = `<tr><td class="movieRank"></td><td class="openDt"></td><td class="movieName"></td><td class="movieTake"></td><td class="salesShare"></td><td class="salesInten"></td><td class="salesAcc"></td><td class="audiCnt"></td><td class="audiInten"></td><td class="audiAcc"></td><td class="scrnCnt"></td><td class="showCnt"></td></tr>`.repeat(10);
        }
        movieRank = document.querySelectorAll(".movieRank");
        movieName = document.querySelectorAll(".movieName");
        movieTake = document.querySelectorAll(".movieTake");
        openDt = document.querySelectorAll(".openDt");
        salesShare = document.querySelectorAll(".salesShare");
        salesInten = document.querySelectorAll(".salesInten");
        salesAcc = document.querySelectorAll(".salesAcc");
        audiCnt = document.querySelectorAll(".audiCnt");
        audiInten = document.querySelectorAll(".audiInten");
        audiAcc = document.querySelectorAll(".audiAcc");
        scrnCnt = document.querySelectorAll(".scrnCnt");
        showCnt = document.querySelectorAll(".showCnt");
        // 데이터 가져오기
        // fetch(url)
        // .then( (resp)=>{ resp.json() }) // 데이터를 JSON 형태로
        // .then( ) 
        // .catch() // 에러
        getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt);
    });

})


function getDate(dateSelect,repNAtion,multiMovie,movieRank,movieName,movieTake,openDt,salesShare,salesInten,salesAcc,audiCnt,audiInten,audiAcc,scrnCnt,showCnt){
    let apiKey = "f5eef3421c602c6cb7ea224104795888";
    let tDt = dateSelect.value.replaceAll("-","");
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
    
    url = url + `?key=${apiKey}`;
    url = url + `&targetDt=${tDt}`;
    url = url + `&multiMovieYn=${multiMovie}`;
    url = url + `&repNationCd=${repNAtion}`;
    fetch(url) // 기본 제공
    .then( resp => resp.json())
    .then( (data) => {
        let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
        let i = 0;

        for ( let item of dailyBoxOfficeList){
            let Nm = item.movieCd;
            movieRank[i].textContent = item.rank;
            openDt[i].textContent = item.openDt;
            if ( +item.rankInten < 0 ){
                movieName[i].innerHTML = `<a href="#detail" onclick=show(${Nm})>${item.movieNm}</a><div><img src=https://www.kobis.or.kr/kobis/web/comm/images/comm/ico_dw.png><strong style="margin-left : 5px">${item.rankInten}</strong></div>`;
            }
            else if( +item.rankInten > 0){
                movieName[i].innerHTML = `<a href="#detail" onclick=show(${Nm})>${item.movieNm}</a><div><img src=https://www.kobis.or.kr/kobis/web/comm/images/comm/ico_up.png><strong style="margin-left : 5px; color : red">${item.rankInten}</strong></div>`;
                
            }
            else if ( +item.rankInten == 0 && item.rankOldAndNew == "OLD"){
                movieName[i].innerHTML = `<a href="#detail" onclick=show(${Nm})>${item.movieNm}</a><div><img src=https://www.kobis.or.kr/kobis/web/comm/images/comm/ico_minus.png></div>`;
            }
            else if ( item.rankOldAndNew == "NEW"){
                movieName[i].innerHTML = `<a href="#detail" onclick=show(${Nm})>${item.movieNm}</a><div><img src=https://www.kobis.or.kr/kobis/web/comm/images/comm/ico_new.png></div>`;
            }
            movieTake[i].textContent = item.salesAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            salesShare[i].textContent = item.salesShare + "%";
            salesInten[i].innerHTML = `<p>${item.salesInten.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p><p>(${item.salesChange}%)</p>`;
            salesAcc[i].textContent = item.salesAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            audiCnt[i].textContent = item.audiCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            audiInten[i].innerHTML = `<p>${item.audiInten.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p><p>(${item.audiChange}%)</p>`;
            audiAcc[i].textContent = item.audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            scrnCnt[i].textContent = item.scrnCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            showCnt[i].textContent = item.showCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            i++;
        }
    })
    .catch( err => console.log(err))
}

function show(Nm){
    let movieCd = Nm;
    const detail = document.querySelector("#detail");
    detail.innerHTML = "";
    let url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
    let key = "f5eef3421c602c6cb7ea224104795888";
    url = url + `?key=${key}`;
    url = url + `&movieCd=${Nm}`;
    fetch(url)
    .then( resp => resp.json())
    .then( (data) => {
        let movieInfoResult = data.movieInfoResult.movieInfo;
        let movieInfo = data.movieInfoResult;
        let tableHead = "";
        let inner = "";
        let i = 0;
        let tabeltitile = ["영화코드","영화명","영화명(영문)","영화명(원문)","제작연도","상영시간","개봉연도","제작상태명","영화유형명","제작국가","제작국가명","장르명"]
        for ( let item in movieInfoResult){
            tableHead += `<th>${tabeltitile[i++]}</th>`;
            console.log(typeof movieInfoResult[item]);
            if( typeof (movieInfoResult[item]) == Object){
                //여기서 다시
                console.log("이건 객체야");
                continue;
            }
            else{
                inner += `<td>${movieInfoResult[item]}</td>`;
            }
            if(i>11)
                break;
        }
        detail.innerHTML = `<thead><tr>${tableHead}</tr></thead><tbody><tr> ${inner}</tr></tbody>`;
    })
    .catch(err => console.log(err))
}