var bigInt = require("big-integer");

var img = {

    w : 2,
    h : 2,
    depth : 2,

    // get total possible combinations.
    /*
     *
     *    img.w = 2;
     *    img.h = 2;
     *    img.depth = 2;
     *
     *    img.getLimit(); // 16
     *
     */
    getLimit : function () {

        return bigInt(this.depth).pow(this.w * this.h).toString();

    },

    // get the index of the given image data array
    // img.getIndex(['1','0','1','0']) // 10
    getIndex : function (dataArray) {

        return bigInt(dataArray.join(''), this.depth).toString();

    }
	
	/*
	getPer : function(index){
		
		return bigInt
		
	}
	*/

};

console.log();

//console.log(bigInt(['1','0','0','0'].join(''),2).toString());

//console.log(img.getLimit());

/*
// plain old JavaScript number
console.log(Math.pow(2,128));
// 3.402823669209385e+38

// JavaScript number to big int
console.log( bigInt( Math.pow(2,128) ).toString());
// 340282366920938500000000000000000000000

// big int
console.log( bigInt(2).pow(128).toString() );
// 340282366920938463463374607431768211456
*/
