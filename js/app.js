function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const h1 = document.createElement("h1")
const div = document.querySelector("div")
const btn = document.querySelector("button")
const input = document.querySelector("input")
const mot = "chocolat"
function mrandom(m){
    const tmb=[]
    const t=[]
    let i =0
    while(i<m.length){
        let random=getRandomInt(m.length);
        let rmot = m[random];
        if(!tmb.includes(rmot)||!t.includes(random)){
            tmb.push(rmot)
            t.push(random)
            i++
        }
    }
    let verif=[]
    for (let i = 0; i < tmb.length; i++) {
        if(tmb[i]==m[i]){
            verif.push(i)
        }
    }
    if(verif.length<m.length/4){
        return tmb
    }
    else{
        return mrandom(mot) 
    }
}
let random = mrandom(mot)
console.log(random)
h1.textContent=random.join("")
div.appendChild(h1)
btn.addEventListener("click",()=>{
    if(input.value==mot){
        alert("vous avez gagner")
    }
    else{
        alert("perdu")
    }
})