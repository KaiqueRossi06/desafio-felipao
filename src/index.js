//entrada
const nomeHeroi = ("Super Geraldinho")
let heroiXp = 1
let rankHeroi = ""
//...
if(heroiXp > 0 && heroiXp <= 1000){
    rankHeroi = ("Ferro.")
}else if(heroiXp > 1000 && heroiXp<=2000){
    rankHeroi = ("Bronze.")
}else if(heroiXp > 2000 && heroiXp<=5000){
    rankHeroi = ("Prata.")
}else if(heroiXp > 5000 && heroiXp<=7000){
    rankHeroi = ("Ouro.")
}else if(heroiXp > 7000 && heroiXp<=8000){
    rankHeroi = ("Platina.")
}else if(heroiXp > 8000 && heroiXp<=9000){
    rankHeroi = ("Ascendente.")
}else if(heroiXp > 9000 && heroiXp<=10000){
    rankHeroi = ("Imortal.")
}else if(heroiXp > 10000){
    rankHeroi = ("Radiante")
}
//console
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)
