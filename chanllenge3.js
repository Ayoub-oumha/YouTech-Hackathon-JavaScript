function iscold(temperature) {
    if(temperature < 10){
        console.log("Yes, it is cold!");
    }
    else console.log("No, it isn't cold!");
}
iscold(5)   // Should return "Yes, it is cold!"
iscold(15)  // Should return "No, it isn't cold!"