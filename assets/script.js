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

btn.addEventListener('click', () => {
    if (JN === true){
    btn.style.background = "#bbb";
    Vbody.style.background = "#333";
    Vheader.style.background = "#bbb";
    Vfooter.style.background = "#bbb";
    Vh1.style.color = "#333";    
    Vpf.style.color = "#333";
    Vcard.forEach((card) => {
        card.setAttribute('style', 'background:rgba(255, 253, 253, 0.38);');});
        Vcard2.forEach((card_vert) => {
            card_vert.setAttribute('style', 'background:rgba(255, 253, 253, 0.38);');});
    Vsection.forEach((section) => {
        section.style.background = "#111";});
    Vh2.forEach((h2) => {
        h2.style.color = "#bbb";});
    JN = false}
    else {
    btn.style.background = "#888";
    Vbody.style.background = "#f4f4f4";
    Vheader.style.background = "#333";
    Vfooter.style.background = "#333";
    Vh1.style.color = "#fff";
    Vpf.style.color = "#fff";
    Vcard.forEach((card) => {
        card.setAttribute('style', 'background: #47474760;');});
    Vcard2.forEach((card_vert) => {
            card_vert.setAttribute('style', 'background: #47474760;');});
    Vsection.forEach((section) => {
        section.style.background = "#fff";});
    Vh2.forEach((h2) => {
        h2.style.color = "#333";});
    JN = true;
    }    
});