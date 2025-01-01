#!/usr/bin/env node
const { program } = require('commander');
const {compressFile, decompressFile} = require('./compress');
const weatherapi = require('./apiIntegration');
const {default: chalk} = require('chalk');
const stringMan = require('./stringMan');
// const askGeminiAI = require('./gemeni');

program 
    .command("show")
    .description("Show all the information about the tool")
    .action(() => {
        console.log(chalk.bgBlue("This is a node cli tool"))
        console.log(chalk.bgYellow(`to compress use -> ${chalk.red("compress")}`))
        console.log(chalk.bgGreen(`to decompress use -> ${chalk.red("decompress")}`))
        console.log(chalk.bgGrey(`to see weather -> ${chalk.red("weather <city_name>")}`))
        console.log(chalk.bgMagenta(`to do string manipulation -> ${chalk.redBright('strMan "<string>"')}`))
        console.log(chalk.bgGrey(`to as que to AI -> ${chalk.red(" <city_name>")}`))
    })


// for compression
 program
  .command('compress')
  .description('Compress a file')
  .option('-i, --input <file>', 'Input file to compress')
//   .requiredOption('-o, --output <file>', 'Output file path')
//   .action((options) => {
//     const { input, output } = options;
//     compressFile(input, output);
//   });
    .action(() => {
        compressFile()
        console.log(chalk.bgGrey.green("File compressed successfyully"))
    })

// for decompression
program 
    .command("decompress")
    .description("Decompress a file")
    // .option('-i, --input <file>', "Input a compressed file that you want to decompress")
    .action(() => {
        decompressFile();
        console.log(chalk.green("File decompressed successfully"))
    });

// weather api

program
    .command("weather <city>")
    .description("The weather of certain city")
    .option('-t, --temp', "Weather of City")
    .action((city) => [
        weatherapi(city)
    ])

// string manipulation
program
    .command("strMan <str>")
    .description("String Manipulation")
    .action((str) => {
        stringMan(str)
    })

// ask gemeni api integration
// program
//   .command('ask <question>')
//   .description('Ask a question to Gemini AI')
//   .action((question) => {
//     askGeminiAI(question)
//   });

program.parse(process.argv);



