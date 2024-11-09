function hascolor(colors, favorite) {
    // Your code here
    let a = 0 ;
    colors.forEach(element => {
        if(element === favorite){
            a =1
        }
    });
    a ? console.log("true") : console.log("false")
}


hascolor(["blue", "red", "green"], "blue") // Should return true
hascolor(["blue", "red", "green"], "yellow") // Should return false