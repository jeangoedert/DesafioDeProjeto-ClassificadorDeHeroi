// # 1️⃣ Desafio Classificador de nível de Herói

let nickHeroUm = "Batman"
let XPBatman = "12000" 
let XP

if (XPBatman < 1000) {
   XP = "Ferro"
    } else if (XPBatman >= 1001 & XPBatman <= 2000) {
        XP = "Bronze";
    } else if (XPBatman >= 2001 & XPBatman <= 2000) {
        XP = "Prata";
    } else if (XPBatman >= 6001 & XPBatman <=7000) {
        XP = "Ouro"
    } else if (XPBatman >= 7001 & XPBatman <= 8000) {
        XP = "Platina"
    } else if (XPBatman >= 8001 & XPBatman <=9000) {
        XP = "Ascendente"
    } else if (XPBatman >= 9001 & XPBatman <= 10000) {
        XP = "Imortal"
    }else if (XPBatman >= 10001) {
        XP = "Radiante"
    }

   console.log("O Herói :",nickHeroUm, " está no nível :",XP)