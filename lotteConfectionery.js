//
let singlylistUp; /* ingoo */
let countCrop;
let countFacroty;
let fallingPin;
let barNum;
let listIdx = 0;
let upList;
let cvsIdx;
let cvsShow;
let cvstext;
let cvsflag=true;
let wi1flag=true;
let pr0flag=true;
let bannerFlag=true;
let productIdx2 = 0;
let subIndex = 0;

//gnb를 투명 <-> 화이트 
    
window.onscroll = function() {bgChange(),cvstextUp(),wi1textUp(),firstListUp()};



function bgChange() {
    gnb=document.querySelector('#gnb_section');
    goTopBtn=document.querySelector('.goTop_btn');

    if (document.documentElement.scrollTop >50) {
        gnb.setAttribute('class','container1920 bg_white');
        goTopBtn.setAttribute('class','goTop_btn');
    } else {
        gnb.setAttribute('class','container1920 bg_transparent');
        goTopBtn.setAttribute('class','goTop_btn none');
    }
}

function tobeWhite(){ 
    gnb=document.querySelector('#gnb_section');
    gnb.setAttribute('class','container1920 bg_white')
}

function tobeTransparent(){ 
    gnb=document.querySelector('#gnb_section');
    gnb.setAttribute('class','container1920 bg_transparent')
}


//서브네비게이션 소환
function opensnb(){ 

    snb= document.querySelector('#snb_section');
    snb.setAttribute('class','container1920 navi');
    tobeWhite();   
}
function closesnb(){
    if(document.documentElement.scrollTop <50){
        tobeTransparent();
    }

    snb= document.querySelector('#snb_section');
    snb.setAttribute('class','container1920 offnavi');

}
// 비주얼 슬라이드

let visualIdx=0;

autoVslide=setInterval(visualSlide,4500);

        function visualSlide(type) {

            visualImg = document.querySelectorAll('#visual_slide>li');
            if(type===true){
                visualIdx2=visualIdx-1; 
                if(visualIdx2<0){ visualIdx2=visualImg.length-1;}  
                for(i=0; i<visualImg.length; i++){
                    if(i==visualIdx){
                        visualImg.item(i).setAttribute('class','visualSlide_out2'); 
                    }
                    else if(i==visualIdx2){ 
                        visualImg.item(i).setAttribute('class','visualSlide_in2');
                        viPagination(i);
                    }
                    else{
                        visualImg.item(i).setAttribute('class','');
                    }
                }
                visualIdx--; 
                if(visualIdx<0) {visualIdx=visualImg.length-1;} 

            }
            else {
                visualIdx2 = visualIdx + 1;
                if (visualIdx2 == visualImg.length) { visualIdx2 = 0; }
                for (let i = 0; i < visualImg.length; i++) {
                    if (i == visualIdx) {
                        visualImg.item(i).setAttribute('class', 'visualSlide_out');
                    }
                    else if (i == visualIdx2) {
                        visualImg.item(i).setAttribute('class', 'visualSlide_in');
                        viPagination(i);
                    }
                    else {
                        visualImg.item(i).setAttribute('class', '');
                    }
                }
                visualIdx++;
                if (visualIdx == visualImg.length) visualIdx = 0;
            }
        }
//비주얼 슬라이드 버튼 눌렀을 떄
        function viSlideBtn(type){ 
            clearInterval(autoVslide);
            visualSlide(type);
        }

//비주얼 페이지 네이션 
function viPagination(idx){
    visualPn=document.querySelector('#visual_pagination>div');
    visualPn.setAttribute('class','vsp'+idx); 
}



//뉴스 슬라이드  
let newsIdx=0;
slideup=setInterval(slideUp,3500);
function slideUp(){ 
    
    news=document.querySelectorAll('#news>ul>li');
    let onNum = newsIdx+1;
    if(onNum==news.length){ onNum=0;}
    for(let i=0; i<news.length; i++){    
        if(i==newsIdx){ 
            news.item(i).setAttribute('class','slideUp_out'); 
        }
        else if(i==onNum){ 
            news.item(i).setAttribute('class','slideUp_in'); 
        }
        else{
            news.item(i).setAttribute('class',''); 
        }
    }
    newsIdx++;
    if(newsIdx==news.length) newsIdx=0; 
}
//프로덕스 슬라이드 

let productIdx=0;
function firstListUp(){
    if ((document.documentElement.scrollTop > 1100)&& pr0flag==true) {
        pr0flag=false; 
        listUP(0);
        }
    }

    autoPslide=setInterval(productSlide,9000);

        function productSlide(type) {


            productVideo = document.querySelectorAll('#product_slide>ul>li');
            productText = document.querySelectorAll('#product_text>ul>li');
            productList = document.querySelectorAll('#product_list>ul'); 
            if(type===true){
                productIdx2=productIdx-1; 
                if(productIdx2<0){ productIdx2=productVideo.length-1;}  
                for(i=0; i<productVideo.length; i++){
                    if(i==productIdx){
                        productVideo.item(i).setAttribute('class','video_out2'); 
                        productText.item(i).setAttribute('class','');
                        productList.item(i).setAttribute('class','');
                        deleteUp(i);
                    }
                    else if(i==productIdx2){ 
                        productVideo.item(i).setAttribute('class','video_in2');
                        productText.item(i).setAttribute('class','show');
                        productList.item(i).setAttribute('class','on');
                        listUP(i); 
                        pdPagination(i);
                    }
                    else{
                        productVideo.item(i).setAttribute('class','');
                        productText.item(i).setAttribute('class','');
                        productList.item(i).setAttribute('class','');
                        deleteUp(i);
                    }
                }
                productIdx--; 
                if(productIdx<0) {productIdx=productVideo.length-1;} 
            }
            else {
                productIdx2 = productIdx + 1;
                if (productIdx2 == productVideo.length) { productIdx2 = 0; }
                for (let i = 0; i < productVideo.length; i++) {
                    if (i == productIdx) {

                        productVideo.item(i).setAttribute('class', 'video_out');
                        productText.item(i).setAttribute('class','');
                        productList.item(i).setAttribute('class','');
                        
                        deleteUp(i);

                    }
                    else if (i == productIdx2) {
                        productVideo.item(i).setAttribute('class', 'video_in');
                        productText.item(i).setAttribute('class','show');
                        productList.item(i).setAttribute('class','on');
                        listUP(i); 
                        pdPagination(i);

                    }
                    else {
                        productVideo.item(i).setAttribute('class', '');
                        productText.item(i).setAttribute('class','');
                        productList.item(i).setAttribute('class','');
                        deleteUp(i);
                    }
                }
                productIdx++;
                if (productIdx == productVideo.length) productIdx = 0;
            }
        }

//프로덕트 슬라이드 버튼 눌렀을 떄
        function prSlideBtn(type){ 
                clearInterval(singlylistUp); /* ingoo */
                clearInterval(autoPslide);
                productSlide(type);
        }

        //프로덕트 리스트 업 



function listUP(idx) {     
    /*
    singlylistUp = setInterval(singlyListUp, 500);  check 
    let clIdx=idx;
    function singlyListUp() {
        currentList = document.querySelectorAll('#product_list>ul');
        if(currentList.item(clIdx).className=='on'){
            console.log(clIdx+"번째프로덕트:  "+"프로덕트 리스트"+listIdx);
            upList.item(listIdx).setAttribute('class', 'up');
            listIdx++;
            if (listIdx == upList.length) {
                listIdx=0; 
                clearInterval(singlylistUp);
            }
    }
    }
    */
    let timeout;
    upList = document.querySelectorAll('#pr' + productIdx2 + '>li');
    console.log('증가값 :',subIndex); // li 순차적 변수
    console.log('총 갯수 :',upList.length); // li 총 갯수 
    if (subIndex == upList.length) {
        subIndex = 0;
        clearTimeout(timeout);
        setTimeout( ()=> {
            /*
            upList.forEach((ele)=>{
                ele.classList.remove('up');
            });
            */
        },6000);
        
        return false;
    }
    upList.item(subIndex).classList.add('up');
    subIndex++;
    timeout = setTimeout(listUP,500);
}



    function deleteUp(idx){ 
        dltList=document.querySelectorAll('#pr'+idx+'>li'); 

        for(let l=0; l<dltList.length;l++){
            dltList.item(l).setAttribute('class','');
        } 
    }

    //프로덕트 페이지 네이션 
function pdPagination(idx){
    productPn=document.querySelector('#product_pagination>div');
    productPn.setAttribute('class','pdp'+idx); 
}

//cvs text show 

function cvstextUp(){

    if ((document.documentElement.scrollTop > 1450)&& cvsflag==true) {
        cvsflag=false; 
        cvstext = document.querySelectorAll('#csv_text>div');
        cvsIdx = 0;
        cvsShow = setInterval(cvsshow, 700);
        function cvsshow() {
            cvstext.item(cvsIdx).setAttribute('class', 'show');
            cvsIdx++;
            if (cvsIdx == cvstext.length) {
                cvsIdx = 0;
                clearInterval(cvsShow);
            }

        }
    }
}



// 벨류 슬라이드 
let valueIdx=0;
setInterval(valueSlide,5000);

        function valueSlide() {

            valueImg = document.querySelectorAll('#value_img>ul>li');
            valueTitle = document.querySelectorAll('#values_title>ul>li');
            valueText = document.querySelectorAll('#value_text>ul>li');
            let valueIdx2 = valueIdx + 1;
            if (valueIdx2 == valueImg.length) { valueIdx2 = 0; }
            for (let i = 0; i < valueImg.length; i++) {
                if (i == valueIdx) {
                    valueImg.item(i).setAttribute('class', 'valueImg_out');
                    valueTitle.item(i).setAttribute('class', '');
                    valueText.item(i).setAttribute('class', '');
                    
                }
                else if (i == valueIdx2) {
                    valueImg.item(i).setAttribute('class', 'valueImg_in');
                    valueTitle.item(i).setAttribute('class', 'show');
                    valueText.item(i).setAttribute('class', 'show');
                    vlPagination(i);
                    
                }
                else {
                    valueImg.item(i).setAttribute('class', '');
                    valueTitle.item(i).setAttribute('class', '');
                    valueText.item(i).setAttribute('class', '');

                }
            }
            valueIdx++;
            if (valueIdx == valueImg.length) valueIdx = 0;
        }

        function vlPagination(idx){
            valuePn=document.querySelector('#value_pagination>div');
            valuePn.setAttribute('class','vlp'+idx); 
        }

//월드 슬라이드 
let worldIdx=0;

function wi1textUp(){
    if ((document.documentElement.scrollTop > 4300)&& wi1flag==true) {
        wi1flag=false; 
        corporation();
        facroty();
        pinDown();
        }
    }

function worldSlide(type){ 
    wolrdList=document.querySelectorAll('#world_info>li');
    
    if(type===true){// 이전버튼 누를 때 . 
        worldIdx2=worldIdx-1; 
        if(worldIdx2<0){ worldIdx2=wolrdList.length-1;}  
        for(let i=0; i<wolrdList.length; i++){
            if(i==worldIdx){
                wolrdList.item(i).setAttribute('class','off2'); 

            }
            else if(i==worldIdx2){ 
                wolrdList.item(i).setAttribute('class','on2');
                wInfoShow(i+1);
            }
            else{
                wolrdList.item(i).setAttribute('class','');
            }
        }
        worldIdx--; 
        if(worldIdx<0) {worldIdx=wolrdList.length-1;} 
    }
    else{ // 다음버튼 누를 때 &  오토슬라이트일 때.
        worldIdx2 = worldIdx+1;
        if(worldIdx2==wolrdList.length){ worldIdx2=0;}
        for(let i=0; i<wolrdList.length; i++){    
            if(i==worldIdx){ 
                wolrdList.item(i).setAttribute('class','off'); 
            }
            else if(i==worldIdx2){ 
                wolrdList.item(i).setAttribute('class','on'); 
                wInfoShow(i+1);
            }
            else{
                wolrdList.item(i).setAttribute('class',''); 
            }
        }
        worldIdx++;
        if(worldIdx==wolrdList.length) worldIdx=0; 
        }
}

function worldBtn(type){ 
    worldSlide(type);
}

function wInfoShow(x){ 
    current=document.querySelector('#world_info'+x);
    if(x==1){
        corporation();
        facroty();
        pinDown();
        clearInterval(countTake);
        clearInterval(countBenefit);
        clearBar();
    }
    else {
        clearInterval(countCrop);
        clearInterval(countFacroty);
        clearPin();
        take();
        benefit();
        growUp();
    }
}

function corporation() {
    Corp= document.querySelector('#corporation');
    let corpNum=0; 
    countCrop=setInterval(cropUp,150);
    function cropUp(){
            corpNum++;
            if (corpNum > 8) {
                clearInterval(countCrop);
            } else {
                Corp.innerHTML=corpNum;
            }
    }
}



function facroty() {
    fctr= document.querySelector('#factory');
    

    let factoryNum=0; 
    countFacroty=setInterval(factoryUp,90);
    function factoryUp(){

            factoryNum++;
            if (factoryNum > 21) {
                clearInterval(countFacroty);
            } else {
                fctr.innerHTML=factoryNum;
            }
    }
}

function pinDown(){
    pin=document.querySelectorAll('.falling');
    let pinNum=0; 
    fallingPin=setInterval(fallingpin,200);
    function fallingpin(){
        pin.item(pinNum).setAttribute('class','falling slowly');
        pinNum++; 
        if(pinNum==pin.length){
            pinNum=0;
            clearInterval(fallingPin);
        }
    }
}

function clearPin(){
    pin=document.querySelectorAll('.falling.slowly');
    for(let y=0; y<pin.length; y++){
        pin.item(y).setAttribute('class','falling');
    }
    clearInterval(fallingPin);

}



function take(){
    tk= document.querySelector('#take');
    let takeNum=0; 
    countTake=setInterval(takeUp,10);
    function takeUp(){
            takeNum++;
            if (takeNum > 235) {
                clearInterval(countTake);
            } else {
                tk.innerHTML=takeNum/(10);
            }
    }
}

function benefit(){
    bnft= document.querySelector('#benefit');
    let benefitNum=0; 
    countBenefit=setInterval(banefitUp,5);
    function banefitUp(){
            benefitNum++;
            if (benefitNum > 512) {
                clearInterval(countBenefit);
            } else {
                bnft.innerHTML=benefitNum/(10);
            }
    }
}

function growUp(){
    bar=document.querySelectorAll('.bar');
    let barNum=0; 
    growupSet=setInterval(growUpbar,500);
    function growUpbar(){
        bar.item(barNum).setAttribute('class','bar growUp'+barNum);
        barNum++; 
        if(barNum==bar.length){
            clearInterval(growupSet);
        }
    }

    rArrow=document.querySelectorAll('.red_arrow');
    let arrowNum=0;
    arrowSet=setInterval(showArrow,1200);
    function showArrow(){
        rArrow.item(arrowNum).setAttribute('class','red_arrow show');
        arrowNum++; 
        if(arrowNum==rArrow.length){
            clearInterval(arrowSet);
        }
    }
}

function clearBar(){
    bar=document.querySelectorAll('.bar');
    for(let y=0; y<bar.length; y++){
        bar.item(y).setAttribute('class','bar');
    }

    rArrow=document.querySelectorAll('.red_arrow');
    for(let y=0; y<rArrow.length; y++){
        rArrow.item(y).setAttribute('class','red_arrow');
    }
    clearInterval(arrowSet);
    clearInterval(growupSet);

}

function familyBtn(){
    famValue=document.querySelector("#famValue"); 
    famList=document.querySelector("#family>ul"); 
    if(famValue.innerHTML=='+'){
        famValue.innerHTML='-';
        famList.setAttribute('class','on');
    } else{
        famValue.innerHTML='+';
        famList.setAttribute('class','');
    }
}




function goTOP(){
    document.documentElement.scrollTop=0; 
}


function controlBanner(){
    bannerBTN=document.querySelector('.banner_btn'); 
    bannerCon=document.querySelector('#banner_con')

    if(bannerFlag==true){ 
        bannerBTN.setAttribute('class', 'banner_btn click'); 
        bannerCon.setAttribute('class','');
        bannerFlag=false;
    } else{
        bannerBTN.setAttribute('class', 'banner_btn'); 
        bannerCon.setAttribute('class','none');
        bannerFlag=true;
    }
}
