
function totalprice(prices) {
    let totale = 0
    // Your code here
    prices.forEach(element => {
        totale = totale + element
    });
    console.log(totale)
}

totalprice([2.99, 1.50, 3.00]) // Should return 7.49