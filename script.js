let brNivoa = 0;
let trenutnoPitanje = 0;

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
    return '<div class="nivo zakljucano" id="nivo' + brNivoa +'"></div>'
}

function podnivo(i){
    br = i+1;
    return '<div class="pitanja skriveno" id="pitanje' + i + '">' + br + '</div>';
}


let pitanja = [
    "Pitanje1",
    "Pitanje2",
    "Pitanje3",
    "Pitanje4",
    "Pitanje5",
    "Pitanje6",
    "Pitanje7",
    "Pitanje8",
    "Pitanje9",
    "Pitanje10",
    "Pitanje11",
    "Pitanje12",
    "Pitanje13",
    "Pitanje14",
    "Pitanje15",
    "Pitanje1",
    "Pitanje2",
    "Pitanje3",
    "Pitanje4",
    "Pitanje5",
    "Pitanje6",
    "Pitanje7",
    "Pitanje8",
    "Pitanje9",
    "Pitanje10",
    "Pitanje11",
    "Pitanje12",
    
]

let odgovori = [ // Ponudjeni odgovori A - D, Tacan dogovor
    ["Pitanje1a", "Pitanje1b", "Pitanje1c", "Pitanje1d", 0],
    ["Pitanje2a", "Pitanje2b", "Pitanje2c", "Pitanje2d", 1],
    ["Pitanje3a", "Pitanje3b", "Pitanje3c", "Pitanje3d", 2],
    ["Pitanje4a", "Pitanje4b", "Pitanje4c", "Pitanje4d", 3],
    ["Pitanje5a", "Pitanje5b", "Pitanje5c", "Pitanje5d", 0],
    ["Pitanje6a", "Pitanje6b", "Pitanje6c", "Pitanje6d", 1],
    ["Pitanje7a", "Pitanje7b", "Pitanje7c", "Pitanje7d", 2],
    ["Pitanje8a", "Pitanje8b", "Pitanje8c", "Pitanje8d", 3],
    ["Pitanje9a", "Pitanje9b", "Pitanje9c", "Pitanje9d", 0],
    ["Pitanje10a", "Pitanje10b", "Pitanje10c", "Pitanje10d", 1],
    ["Pitanje11a", "Pitanje11b", "Pitanje11c", "Pitanje11d", 2],
    ["Pitanje12a", "Pitanje12b", "Pitanje12c", "Pitanje12d", 3],
    ["Pitanje13a", "Pitanje13b", "Pitanje13c", "Pitanje13d", 0],
    ["Pitanje14a", "Pitanje14b", "Pitanje14c", "Pitanje14d", 1],
    ["Pitanje15a", "Pitanje15b", "Pitanje15c", "Pitanje15d", 2],
    ["Pitanje4a", "Pitanje4b", "Pitanje4c", "Pitanje4d", 3],
    ["Pitanje1a", "Pitanje1b", "Pitanje1c", "Pitanje1d", 0],
    ["Pitanje2a", "Pitanje2b", "Pitanje2c", "Pitanje2d", 1],
    ["Pitanje3a", "Pitanje3b", "Pitanje3c", "Pitanje3d", 2],
    ["Pitanje4a", "Pitanje4b", "Pitanje4c", "Pitanje4d", 3],
    ["Pitanje1a", "Pitanje1b", "Pitanje1c", "Pitanje1d", 0],
    ["Pitanje2a", "Pitanje2b", "Pitanje2c", "Pitanje2d", 1],
    ["Pitanje3a", "Pitanje3b", "Pitanje3c", "Pitanje3d", 2],
    ["Pitanje4a", "Pitanje4b", "Pitanje4c", "Pitanje4d", 3],
    ["Pitanje1a", "Pitanje1b", "Pitanje1c", "Pitanje1d", 0],
    ["Pitanje2a", "Pitanje2b", "Pitanje2c", "Pitanje2d", 1],
    ["Pitanje3a", "Pitanje3b", "Pitanje3c", "Pitanje3d", 2],
]

function dodajEventListenere(){
    for (let i = 0; i < pitanja.length; i++) {
        document.getElementById("pitanje" + i).addEventListener("click", ()=>{prikaziPitanje(i)});
    }
}

function dalje(){
    let temp = odgovori[trenutnoPitanje][4] + 1;
    document.getElementById("dugme"+temp).classList.remove("tacno");
    if(tacniOdgovori() == ((otkljucano + 1) * 5)){
        prikaziPitanje((otkljucano + 1) * 5);
        document.getElementById("nivo"+ otkljucano).classList.add("tacno");
        otkljucano++;
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
    document.getElementById("dugme1").classList.remove("netacno");
    document.getElementById("dugme2").classList.remove("netacno");
    document.getElementById("dugme3").classList.remove("netacno");
    document.getElementById("dugme4").classList.remove("netacno");


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
    let temp = odgovori[trenutnoPitanje][4] + 1;
    document.getElementById("pitanje"+trenutnoPitanje).classList.remove("netacno");
    document.getElementById("pitanje"+trenutnoPitanje).classList.add("tacno");
    document.getElementById("dugme"+temp).classList.add("tacno");
}

function tacno(){
    reseno[trenutnoPitanje] = 1;
    prikaziTacno();
    setTimeout(dalje, 1000);

}

function netacno(){
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
        document.getElementById("dugme"+temp).classList.add("netacno");
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
  console.log(walk);
});