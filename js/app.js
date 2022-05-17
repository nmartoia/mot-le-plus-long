function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const p = document.createElement("p")
const div = document.querySelector("div")
const btn = document.querySelector("button")
const input = document.querySelector("input")
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
btn.addEventListener("click",()=>{
    if(input.value==mot){
        alert("vous avez gagner")
    }
    else{
        alert("perdu")
    }
})