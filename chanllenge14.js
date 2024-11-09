

function getcategory(age) {
    // Your code here
    if(age <= 12 ){
        console.log("child")
    }
    else if(age > 12  && age <= 19 ){
        console.log("teen")
    }
    else if(age >=20 ){
        console.log("adult")
    }
    else console.log("error")
    
}



getcategory(5)   // Should return "child" (0-12)
getcategory(14)  // Should return "teen" (13-19)
getcategory(25)  // Should return "adult" (20+)