// 1 Desafio Classificador de nível de Herói
// 1 Desafio Classificador de nível de Herói.

let nomeHeroi = "Homen-Aranha";
const tabelaNiveis = [
    { xpMinimo: 0, xpMaximo: 1000, descricao: "Ferro" },
    { xpMinimo: 1001, xpMaximo: 2000, descricao: "Bronze" },
    { xpMinimo: 2001, xpMaximo: 5000, descricao: "Prata" },
    { xpMinimo: 5001, xpMaximo: 7000, descricao: "Ouro" },
    { xpMinimo: 7001, xpMaximo: 8000, descricao: "Platina" },
    { xpMinimo: 8001, xpMaximo: 9000, descricao: "Ascendente" },
    { xpMinimo: 9001, xpMaximo: 10000, descricao: "Imortal" },
    { xpMinimo: 10001, xpMaximo: Infinity, descricao: "Radiante" }
];


let nomeDoHeroi = "Homen-Aranha";

let  xpDoHeroi = 20000;
xpDoHeroi = parseInt(xpDoHeroi);


let nivel;

for (let i = 0; i < tabelaNiveis.length; i++) {
    if (xpDoHeroi >= tabelaNiveis[i].xpMinimo && xpDoHeroi <= tabelaNiveis[i].xpMaximo) {
        nivel = tabelaNiveis[i].descricao;
        break; 
    }
}


console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);

/*let nomeHeroi = "Homen-Aranha";
let nivelHeroi = 8005;
if (nivelHeroi <= 1000) {
@@ -23,4 +53,4 @@ if (nivelHeroi <= 1000) {
console.log("O Herói de nome " + nomeHeroi + "está no nível de " + nivelHeroi)
console.log("O Herói de nome " + nomeHeroi + "está no nível de " + nivelHeroi)*/
