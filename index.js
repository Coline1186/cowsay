const informartion = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${informartion.firstName} from ${informartion.campus}`,
    e : "oO",
    T : "U ",
}));