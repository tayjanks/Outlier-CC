function findOutlier (integers) {
    let evens = []
    let odds = []

    for (let i=0; i <integers.lenght; i++) {
        let number = integers[i]

        if (number % 2 ===0) {
            evens.push(number)
        } else {
            odds.push(number)
        }
    }

    if (evens.length === 1){
        return evens[0]
    } 
    else {return odds[0]
}};

console.log (findOutlier[1,2,4,6,8,10]);