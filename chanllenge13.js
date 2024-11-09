function checknum(numbers) {
    // Your code here
    let a = 0 ;
    numbers.forEach(element => {
        if(((element % 2 ) === 0) ||  ((element % 7 ) === 0)){
            a ++;
        }
    });
    if(a === numbers.length){
        console.log("true")
    }
    else  console.log("false")
}



checknum([2, 7, 14, 4]) // Should return true
checknum([2, 7, 15, 4]) // Should return false