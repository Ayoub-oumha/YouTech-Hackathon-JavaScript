function shortword(words) {
    // Your code here
   let a = words.filter((ele) => ele.length < 4 ) ;
            

    console.log(a)
  
}


shortword(["cat", "mouse", "dog"]) // Should return ["cat", "dog"]