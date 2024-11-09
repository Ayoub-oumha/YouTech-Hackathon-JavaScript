
function hasfive(numbers) {
    // Your code here
    let a = 0
    numbers.forEach(element => {
        if(5 == element){
            a = 1
        }
       
        
    });
    if(a){
        console.log("true")
    }
    else console.log("false")
}



hasfive([1, 2, 3, 4, 5]) // Should return true
hasfive([1, 2, 3, 4])    // Should return false
