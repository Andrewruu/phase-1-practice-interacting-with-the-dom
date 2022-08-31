
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(autoCounter,1000)
    var form = document.querySelector('form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        comment(e.target.querySelector('#comment-input').value)
        form.reset()
      })
  });
const counter = document.querySelector('#counter')
console.log(counter)
let numLikes = 1
let pausing = false
let counting = 0
//counter auto count
function autoCounter(){
    if (pausing == false){
        counting += 1
        counter.innerHTML = counting
        numLikes = 1
        setTimeout(autoCounter,1000)   
    }
    else
    {

    }

}
//plus 1 to counter
const plus = document.querySelector('#plus')
plus.onclick = plusCounter
function plusCounter(){
    counting += 1
    counter.innerHTML = counting
}
//minus 1 to counter
const minus = document.querySelector('#minus')
minus.onclick = minusCounter
function minusCounter(){
    counting -= 1
    counter.innerHTML = counting
}
//like button
const likeList = document.querySelector(".likes")
const likeBtn = document.querySelector('#heart')
console.log(likeList)
likeBtn.onclick = liked

function liked(){
    console.log(numLikes)
    let li = document.createElement("li")
    li.setAttribute("id",counting)
    if (numLikes > 1){
        document.getElementById(counting).remove()
        li.innerHTML = `${counting} has been liked ${numLikes} times`
        likeList.appendChild(li)
        numLikes += 1
    }
    else{
        li.innerHTML = `${counting} has been liked ${numLikes} time`
        likeList.appendChild(li)
        numLikes += 1
    }
}
//Comment
function comment(comments){
    let p = document.createElement('p')
    p.innerHTML = comments
    console.log(typeof comments)
    document.querySelector('#list').appendChild(p)
}
// pause and resume
const pauseBtn = document.querySelector('#pause')
pauseBtn.onclick = pause
function pause(){
    if (pausing == false){
        plus.setAttribute('disabled', 'true')
        minus.setAttribute('disabled', 'true')
        likeBtn.setAttribute('disabled', 'true')
        document.querySelector('#submit').setAttribute('disabled', 'true')
        pausing = true
        pauseBtn.innerHTML = 'resume'
    }
    else{
        console.log(pausing)
        pausing = false
        setTimeout(autoCounter,1000)
        document.querySelector('#submit').removeAttribute('disabled')
        plus.removeAttribute('disabled')
        minus.removeAttribute('disabled')
        likeBtn.removeAttribute('disabled')
        pauseBtn.innerHTML = 'pause'
    }
}