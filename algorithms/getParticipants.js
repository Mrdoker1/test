function getParticipants(handshakes) {

    let result;
    let n = 2;

    if (handshakes == 2) {
        return 3;
    }
    if (handshakes == 1) {
        return 2;
    }
    if (handshakes == 0) {
        return 1;
    }

    do {
        ++n;
        result = factorial(n) / (factorial(n - 2) * factorial(2))
            // console.log("factorial n =", factorial(n))
            // console.log("factorial n-2 =", factorial(n - 2))
            // console.log("n =", n)
        console.log("result =", result)
    }
    while (result < handshakes)

    return n;
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(getParticipants(1111111));