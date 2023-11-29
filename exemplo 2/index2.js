let nomeHeroi = '"Pudim Motivante do Reino Púrpura"';
let exp = 20023;
let level = ["Ferro", "Bronze", "Prata", "Ouro", 
"Platina", "Ascendente", "Imortal", "Radiante"];

switch (exp <= 1000){ //ferro
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[0] + "!");
    break;
}
switch (exp >= 1001 && exp <= 2000) { //bronze 
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[1] + "!");
}
switch (exp >= 2001 && exp <= 6000) { //prata 
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[2] + "!");
    break;
}/*na atividade estava "entre 2001 e 5000", 
mas não daria certo pois de 5001 até 6000 teria um "buraco" 
(não há nenhuma classe listada com esses valores...Talvez eu pudesse ter criado uma também...)
Então substitui 5000 por 6000 em Prata 
para preencher o "vazio" e fazer sentido no próximo nível :)
*/
switch (exp >= 6001 && exp <= 7000) { //ouro
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[3] + "!");
    break;
}
switch (exp >= 7001 && exp <= 8000) { //platina
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[4] + "!");
    break;
}
switch (exp >= 8001 && exp <= 9000) { //ascendente
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[5] + "!");
    break;
}
switch (exp >= 9001 && exp <= 10000) { //imortal
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[6] + "!");
    break;
}
switch (exp >= 10001) { //radiante
    case true:
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + level[7] + "!");
    break;
}