let duration = 0
let timer

document.getElementById('start').addEventListener('click', function(){
    start()
})
document.getElementById('stop').addEventListener('click', function(){
    timeDisplay = stop()
})
document.getElementById('reset').addEventListener('click', function(){
    timeDisplay = reset()
})





function start(){
    if (duration == 0){
        timer = setInterval(function(){
            duration += 1
            document.getElementById('time-display').innerText = duration
        }, 1000)
    }else{
        clearInterval(timer)
        timer = setInterval(function(){
            duration += 1
            document.getElementById('time-display').innerText = duration
        }, 1000)
    }
}

function stop(){
    if (duration != 0){
        clearInterval(timer)
        document.getElementById('time-display').innerText = duration
    }   
}

function reset(){
    clearInterval(timer)
    duration = 0
    document.getElementById('time-display').innerText = duration
}