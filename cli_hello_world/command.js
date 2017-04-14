
var args = process.argv.slice(2, process.argv.length);

console.log('I am a simple addation cli tool');

if (args.length >= 2) {

    console.log(Number(args[0]) + Number(args[1]));

}
