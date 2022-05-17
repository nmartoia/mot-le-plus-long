function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const p = document.createElement("p")
const div = document.querySelector("div")
const mot = "chocolat"
const tmb=[]
const t=[]
let i =0
let n=0
while(i<mot.length){
    let random=getRandomInt(mot.length);
    let rmot = mot[random];
    if(!tmb.includes(rmot)||!t.includes(random)){
        tmb.push(rmot)
        t.push(random)
        i++
    }
}
p.textContent=tmb.join("")
div.appendChild(p)