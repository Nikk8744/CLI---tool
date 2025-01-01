const voca = require('voca');
const {default: chalk} = require('chalk');

const stringMan = (str) => {
    console.log(chalk.yellowBright("The string in CAPITAL is:",voca.upperCase(str)))
    console.log(chalk.yellowBright("The string in LOWER is:",voca.lowerCase(str)))
    console.log(chalk.yellowBright("The total Word cound is:",voca.countWords(str)))

    if(str === voca.reverse(str)){
        console.log("String is Palindrome")
    }else{
        console.log("String is Normal")
    }

}

module.exports = stringMan;