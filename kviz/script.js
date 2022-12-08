let brNivoa = 0;
let trenutnoPitanje = 0;
let omasaji = 0;
let vreme = 0; // sekunde
let timer = setInterval(meri, 1000);

let pitanja = [
    "Политика, сурова борба за власт у којој су дозвољена сва средства. <br> Став је који је изнео",
    "Власт представља изгледе да ће се одређене особе покорити наредби одређеног садржаја. <br>Рекао је:",
    "Најважније средство политике је:",
    "Почива на вери у светост традиције, у питању је",
    "Одлика које политичке културе је да влада тамо где су грађани свесни да могу утицати на одлуке државе",

    "Основна карактеристика ове власти је јака извршна власт оличена у преседнику републике, који се бира на непосредним изборима. У питању је?",
    "Основна карактеристика овог система је независност шефа државе, који има право да распусти парламент. То је?",
    "Парламентарни систем власти настао је у?",
    "Од доношења Устава из 2006. године, који систем власти срећемо у Србији?",
    "Власт је врста друштвене моћи која се заснива на?",

    "Шта није основна карактеристика државе?",
    "Према Аристотелу аристократија је облик владавине где влада...",
    "Која од наведених ставки спада у политичко уређење?",
    "О ком облику државе је реч када се каже да укида приватну својину, а у место тржишта уводи планирање из једног центра",
    "Који облик државе називамо држава Ноћни Чувар",

    "Посредна демократија може се остварити...",
    "Творац модерног појма суверенитета је...",
    "Природно стање у друштву су једнакост и слобода, рекао је...",
    "Шта није карактеристика народног суверенитета?",
    "Карактеристика обавезног референдума је...",

    "Чланови политичких странака могу бити...",
    "Шта није карактеристика политичких партија?",
    "Политичку странку може да оснује најмање",
    "НВО (Не Владине Организације) спадају у...",
    "Које политичке партије сматрају себе авангардом друштвеног напретка и пропагирају диктатуру пролетеријата?",

]

let odgovori = [ // Ponudjeni odgovori A - D, Tacan dogovor
    ["Вебер", "Макијавели", "Монтескије", "Томас Хобс", 1],
    ["Монтескије", "Жан Боден", "Вебер", "Џон Лок", 2],
    ["Устав", "Право", "Употреба силе", "Власт", 1],
    ["Божја власт", "Харизматска власт", "Правно рационална", "Традиционална власт", 3],
    ["Либералне", "Поданичке", "Парохијалне", "Партиципативне", 3],

    ["Скупштински систем власти", "Председнички систем власти", "Мешовити систем власти", "Парламентарни систем власти", 1],
    ["Скупштински систем власти", "Председнички систем власти", "Мешовити систем власти", "Парламентарни систем власти", 2],
    ["Француској", "САД", "Великој Британији", "Русији", 2],
    ["Скупштински систем власти", "Председнички систем власти", "Мешовити систем власти", "Парламентарни систем власти", 2],
    ["Уставу и закону", "Употреби силе", "Традицији", "Личним својствима владара", 0],

    ["Грб", "Становништво", "Териториална одређеност", "Монопол над апаратима силе", 0],
    ["Један човек у корист заједнице", "Неколицина у корист заједнице", "Мноштво у корист заједнице", "Један човек у корист владара", 1],
    ["Унитарне државе", "Монархије", "Диктатуре", "Аутократске државе", 3],
    ["Развојна", "Социалдемократска", "Минимална", "Колективистичка", 3],
    ["Социалдемократска", "Минимална", "Тоталитарна", "Развојна", 1],

    ["Референдумом", "Изборима", "Плебисцитом", "Иницијативом грађана", 1],
    ["Жан Боден", "Жан Жак Русо", "Шарл Монтескије", "Џон Лок", 0],
    ["Жан Жак Русо", "Томас Хопс", "Џон Лок", "Шарл Монтескије", 2],
    ["Власт која произилази из народа", "Тековина Француске буржоаске револуције", "Повезан је са правом на самоопредељење", "Тековина Америчког грађанског рата", 2],
    ["Расписује се при доношењу устава", "Не мора се расписати", "Није предвиђен законом", "Врста законодавног реферндума којим грађани могу да одлуче о укидању важећег закона", 0],

    ["Судије уставног суда и редовних судова", "Јавни тужиоци", "Заштитник грађана", "Народни посланици", 3],
    ["Штите државни поредак", "Оснивају се ради учешћа у власти", "Боре се за освајање и вршење власти", "Посредници између бирача и државе", 0],
    ["1.000 пунолетних држављана Републике Србије", "5.000 пунолетних држављана Републике Србије", "10.000 пунолетних држављана Републике Србије", "100.000 пунолетних држављана Републике Србије", 2],
    ["Интересне групе", "Институционалне групе", "Групе за притисак", "Обичајне групе", 0],
    ["Кадровске", "Странке Центра", "Комунистичке", "Левичарске", 2],

]

let oblasti = [
    "Политика и власт",
    "Подела власти",
    "Држава",
    "Демократија и суверенитет",
    "Политичке партије"
]

function meri(){
    vreme++;
}

function izracunajVreme(){
    if(vreme > 60){
        if((vreme - (Math.floor(vreme / 60) * 60)) < 10){
            return Math.floor(vreme / 60) + ": 0" + (vreme - (Math.floor(vreme / 60) * 60)) + "min";
        }
        else{
            return Math.floor(vreme / 60) + ":" + (vreme - (Math.floor(vreme / 60) * 60)) + "min";
        }
    }
    else{
        return vreme + "s";
    }
}

let otkljucano = 0;
function tacniOdgovori(){
    let tacno = 0;
    for (let i = 0; i < reseno.length; i++) {
        if(reseno[i] == 1){
            tacno++;
        }
    }
    return tacno;
}

let reseno = [];

function prviNetacan(){
    for (let i = 0; i < reseno.length; i++) {
        if(reseno[i] == 0){
            return i;
        }
    }
}


let nivoi = document.getElementById("nivoi")

function nivo(){
    return '<div class="nivo zakljucano" id="nivo' + brNivoa +'">'+ oblasti[brNivoa] +'</div>'
}

function podnivo(i){
    br = i+1;
    return '<div class="pitanja skriveno" id="pitanje' + i + '">' + br + '</div>';
}




function dodajEventListenere(){
    for (let i = 0; i < pitanja.length; i++) {
        document.getElementById("pitanje" + i).addEventListener("click", ()=>{prikaziPitanje(i)});
    }
}

function dalje(){
    stopConfetti();
    let temp = odgovori[trenutnoPitanje][4] + 1;
    document.getElementById("dugme"+temp).classList.remove("tacnoDugme");

    if(tacniOdgovori() == pitanja.length){
        document.getElementById("pobeda").classList.add("pobedjeno");
        document.getElementById("brpokusaja").innerHTML += omasaji;
        document.getElementById("vremeutroseno").innerHTML += izracunajVreme();
        document.getElementById("brpitanja").innerHTML = pitanja.length + "/" + pitanja.length + " питања!";
        startConfetti();
        return 0;
    }

    if(tacniOdgovori() == ((otkljucano + 1) * 5)){
        prikaziPitanje((otkljucano + 1) * 5);
        otkljucano++;
        document.getElementById("pohvala").classList.add("pohvali");
        setTimeout(()=>{ document.getElementById("pohvala").classList.remove("pohvali");}, 4000)
        otkrij();
    }
    else if(trenutnoPitanje < ((otkljucano + 1) * 5 - 1)){
        if(reseno[trenutnoPitanje+1] == 1 && trenutnoPitanje+1 < reseno.length){
            prikaziPitanje(prviNetacan());

        }
        else{
            prikaziPitanje(trenutnoPitanje+1);
        }
    }
    else{
        prikaziPitanje(prviNetacan());
    }
}


function netacnoDalje(){
    document.getElementById("dugme1").classList.remove("netacnoDugme");
    document.getElementById("dugme2").classList.remove("netacnoDugme");
    document.getElementById("dugme3").classList.remove("netacnoDugme");
    document.getElementById("dugme4").classList.remove("netacnoDugme");


    if(trenutnoPitanje < ((otkljucano + 1) * 5 - 1)){
        if(reseno[trenutnoPitanje+1] == 1 && trenutnoPitanje+1 < reseno.length){
            prikaziPitanje(prviNetacan());

        }
        else{
            prikaziPitanje(trenutnoPitanje+1);
        }
    }
    else{
        prikaziPitanje(prviNetacan());
    }
}

function prikaziTacno(){
    startConfetti();
    let temp = odgovori[trenutnoPitanje][4] + 1;
    document.getElementById("pitanje"+trenutnoPitanje).classList.remove("netacno");
    document.getElementById("pitanje"+trenutnoPitanje).classList.add("tacno");
    document.getElementById("dugme"+temp).classList.add("tacnoDugme");
}

function tacno(){
    reseno[trenutnoPitanje] = 1;
    prikaziTacno();
    if(tacniOdgovori() == ((otkljucano + 1) * 5)){
        document.getElementById("nivo"+ otkljucano).classList.add("tacno");
    }
    setTimeout(dalje, 1000);

}

function netacno(){
    omasaji++;
    reseno[trenutnoPitanje] = 0;
    document.getElementById("pitanje"+trenutnoPitanje).classList.add("netacno");
    setTimeout(netacnoDalje, 1000);
    
}

function proveri(odg){
    if(odgovori[trenutnoPitanje][4] == odg){
        tacno();
    }
    else{
        let temp = odg + 1
        document.getElementById("dugme"+temp).classList.add("netacnoDugme");
        netacno();
    }
}

function dodajEventListenereZaOdgovore(){
    document.getElementById("dugme1").addEventListener("click", ()=>{proveri(0)});
    document.getElementById("dugme2").addEventListener("click", ()=>{proveri(1)});
    document.getElementById("dugme3").addEventListener("click", ()=>{proveri(2)});
    document.getElementById("dugme4").addEventListener("click", ()=>{proveri(3)});
}

function prikaziOdgovore(i){
    document.getElementById("odgovor1").innerHTML = odgovori[i][0];
    document.getElementById("odgovor2").innerHTML = odgovori[i][1];
    document.getElementById("odgovor3").innerHTML = odgovori[i][2];
    document.getElementById("odgovor4").innerHTML = odgovori[i][3];
}

function prikaziPitanje(i){
    for (let i = 0; i < pitanja.length; i++) {
        document.getElementById("pitanje"+i).classList.remove("trenutno");
    }
    document.getElementById("pitanje"+i).classList.add("trenutno");
    document.getElementById("pitanje").innerHTML = pitanja[i];
    prikaziOdgovore(i);
    trenutnoPitanje = i;
}

function popuni(){
    for (let i = 0; i < pitanja.length; i++) {

        if (i % 5 == 0 || i == 0){
            nivoi.innerHTML += nivo();
            brNivoa++;
        }

        nivoi.innerHTML += podnivo(i);
    }

}

function otkrij(){
    for (let i = 0; i < ((otkljucano + 1) * 5); i++){
        document.getElementById("pitanje" + i).classList.remove("skriveno");
    }
    document.getElementById("nivo"+ otkljucano).classList.remove("zakljucano");
    
}

function kreni(){
    popuni();
    dodajEventListenere();
    dodajEventListenereZaOdgovore();
    otkrij();
    prikaziPitanje(0);

}







const slider = document.querySelector('.nivoi');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});