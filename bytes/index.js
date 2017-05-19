var bytes = require('bytes');

// convert a number to a string rep
console.log(bytes(13400, {

        decimalPlaces : 4

    })); // 13.0859kB

// convert a string to a number rep
console.log(bytes('13.08kb', {

        decimalPlaces : 4

    })); // 13393
