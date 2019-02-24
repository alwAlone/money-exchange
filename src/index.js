// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {},
    H = 50,
    Q = 25,
    D = 10,
    N = 5,
    P = 1;

    if (currency > 10000) {
        result = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        if (currency >= H) {
            result.H = Math.trunc(currency / H);
            currency -= result.H * H;
        }
        if (currency >= Q) {
            result.Q = Math.trunc(currency / Q);
            currency -= result.Q * Q;
        }
        if (currency >= D) {
            result.D = Math.trunc(currency / D);
            currency -= result.D * D;
        }
        if (currency >= N) {
            result.N = Math.trunc(currency / N);
            currency -= result.N * N;
        }
        if (currency >= P) {
            result.P = Math.trunc(currency / P);
            currency -= result.P * P;
        }
    }
    return result;
    
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
