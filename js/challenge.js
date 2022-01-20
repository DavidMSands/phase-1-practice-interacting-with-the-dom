const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const listComments = document.querySelector('.likes')
const pause = document.getElementById('pause')
const comment = document.getElementById('comment-input')
const form = document.getElementById('comment-form')
const submit = document.getElementById('submit')
const leaveComment = document.querySelector('#list')
let starterCount = 0;
let counterPause = true;
console.log(counter.innerText)
console.log(starterCount++)



setInterval(() => {
        if (counterPause === true) {
            counter.innerText = starterCount++
        }
    }, 1000);


minus.addEventListener('click',() => {
    if(counterPause === true) {
        counter.innerText--
        starterCount--
    }
})
plus.addEventListener('click',() => {
    if(counterPause === true) {
        counter.innerText++
        starterCount++
    }
})

heart.addEventListener('click', () => {
    const p = document.createElement('li')
    if(counterPause === true) {
        p.innerText = `${counter.innerText} has been liked 1 time`
        listComments.appendChild(p)
    }
})

pause.addEventListener('click', () => {
   if(counterPause === true) {
       counterPause = false;
       pause.textContent = "resume"
       plus.style.filter = "opacity(40%)"
       minus.style.filter = "opacity(40%)"
       heart.style.filter = "opacity(40%)"
   } else if (counterPause === false) {
       counterPause = true;
       pause.textContent = "pause"
       plus.style.filter = "opacity(100%)"
       minus.style.filter = "opacity(100%)"
       heart.style.filter = "opacity(100%)"
   }
})

console.log(comment.value)
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const newComment = document.createElement('p')
    newComment.textContent = comment.value
    leaveComment.appendChild(newComment)
    form.reset()
})




