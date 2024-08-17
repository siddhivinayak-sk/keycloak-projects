function calculateAverage(args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum / args.length;
}

function to calculateStandardDeviation(numberList) {
    let average = calculateAverage(numberList);
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += Math.pow(numberList[i] - average, 2);
    }
    return Math.sqrt(sum / numberList.length);
}



