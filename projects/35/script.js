const next = document.getElementById('right')
const prev = document.getElementById('left')
const imgs = document.getElementById('imgs')
const images = document.getElementsByName('img')
var num = 0
next.addEventListener('click', nextPic)
prev.addEventListener('click', prevPic)

let interval = setInterval(run, 3000)

function run(){
    nextPic()

}

function nextPic() {
    resetInterval()
    if(num == 1500){
        num = 0;
        imgs.style.transform = `translateX(-${num}px)`
    } else {
    num += 500;
    imgs.style.transform = `translateX(-${num}px)`
    console.log(`Next pressed ${num}`)
    }}

function prevPic() {
        resetInterval()
        if(num == 0){
            num = 1500;
            imgs.style.transform = `translateX(-${num}px)`
        } else {
        num -= 500;
        imgs.style.transform = `translateX(-${num}px)`
        console.log(`Next pressed ${num}`)
        }}
    
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(nextPic, 3000)
}