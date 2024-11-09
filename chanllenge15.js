
function getlevel(score) {
    // Your code here
    if(score <= 75 ){
        console.log("C")
    }
    else if(score> 75  && score <= 85 ){
        console.log("B")
    }
    else if(score >=95 ){
        console.log("A")
    }
    else console.log("error")
    
}



getlevel(95) // Should return "A"
getlevel(85) // Should return "B"
getlevel(75) // Should return "C" 