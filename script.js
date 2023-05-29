var countdown = document.getElementById("countdown");

function Ten(callback){
    countdown.innerText="10"
    setTimeout(callback, 1000)
}
function Nine(callback){
    countdown.innerText="9"
    setTimeout( callback, 1000)
}
function Eight(callback){
    countdown.innerText="8"
    setTimeout( callback, 1000)
}
function Seven(callback){
    countdown.innerText="7"
    setTimeout( callback, 1000)
}
function Six(callback){
    countdown.innerText="6"
    setTimeout( callback, 1000)
}
function five(callback){
    countdown.innerText="5"
    setTimeout( callback, 1000)
}
function four(callback){
    countdown.innerText="4"
    setTimeout( callback, 1000)
}
function three(callback){
    countdown.innerText="3"
    setTimeout( callback,1000)
   
}
function two(callback){
    countdown.innerText="2"
    setTimeout( callback, 1000)
}
function one(callback){
    countdown.innerText="1"
   setTimeout( callback, 1000)
}
function hp(callback){
    countdown.innerText="HAPPY INDEPENDENCE DAY"
   setTimeout( callback, 1000)
}

Ten(()=>{

    Nine(()=>{
        Eight(()=>{
            Seven(()=>{
                Six(()=>{
                   five(()=>{
                        four(()=>{
                          three(()=>{
                             two(()=>{
                                  one(()=>{
                                      hp()
                                    })
                                })
                            })
                        })
                    }) 
                })
            })
        })
    })
})
 
