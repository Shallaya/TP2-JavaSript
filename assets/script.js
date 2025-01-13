// changement de couleurs au click sur un bouton

// je sélectionne et je stoke mes éléments du document html
const btn = document.querySelector("button");
console.log(btn);

const Vbody = document.querySelector("body");
const Vheader = document.querySelector("header");
const Vfooter = document.querySelector("footer");
const Vh1 = document.querySelector("h1");
const Vpf = document.querySelector("#para_foot");
const Vcard = document.querySelectorAll('.card');
const Vcard2 = document.querySelectorAll('.card_vert');

const Vsection = document.querySelectorAll("section");
const Vh2 = document.querySelectorAll("h2");

let JN = true;

// j'écoute l'événement click sur mon bouton
btn.addEventListener('click', () => {
    if (JN === true){
    btn.style.background = "#bbb";
    Vbody.style.background = "#333";
    Vheader.style.background = "#bbb";
    Vfooter.style.background = "#bbb";
    Vh1.style.color = "#333";    
    Vpf.style.color = "#333";
    Vsection.forEach((section) => {
        section.style.background = "#666";});
    Vh2.forEach((h2) => {
        h2.style.color = "#bbb";});
    Vcard.forEach((card) => {
        card.setAttribute('style', 'background:rgba(255, 253, 253, 0.38);');});
    Vcard2.forEach((card_vert) => {
            card_vert.setAttribute('style', 'background:rgba(255, 253, 253, 0.38);');});
    JN = false}
    else {
    btn.style.background = "#888";
    Vbody.style.background = "#f4f4f4";
    Vheader.style.background = "#333";
    Vfooter.style.background = "#333";
    Vh1.style.color = "#fff";
    Vpf.style.color = "#fff";
    Vsection.forEach((section) => {
        section.style.background = "#fff";});
    Vh2.forEach((h2) => {
        h2.style.color = "#333";});
    Vcard.forEach((card) => {
            card.setAttribute('style', 'background: #47474760;');});
    Vcard2.forEach((card_vert) => {
                card_vert.setAttribute('style', 'background: #47474760;');});
    JN = true;
    }    
});





