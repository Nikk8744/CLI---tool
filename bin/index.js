#!/usr/bin/env node
const { program } = require('commander');
const {compressFile, decompressFile} = require('./compress');
const weatherapi = require('./apiIntegration');


program 
    .command("show")
    .description("Show all the information about the tool")
    .action(() => {
        console.log("This is a node cli tool")
        console.log("to compress use -> compress")
        console.log("to decompress use -> decompress")
        console.log("to see weather -> weather <city_name>")
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
        console.log("File compressed successfyully")
    })

// for decompression
program 
    .command("decompress")
    .description("Decompress a file")
    .option('-i, --input <file>', "Input a compressed file that you want to decompress")
    .action(() => {
        decompressFile();
        console.log("File decompressed successfully")
    });

// weather api

program
    .command("weather <city>")
    .description("The weather of certain city")
    .option('-t, --temp', "Weather of City")
    .action((city) => [
        weatherapi(city)
    ])

program.parse(process.argv);



