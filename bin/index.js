#!/usr/bin/env node
const { program } = require('commander');
const {compressFile, decompressFile} = require('./compress')


program 
    .command("show")
    .description("Show all the information about the tool")
    .action(() => {
        console.log("This is a node cli tool")
        console.log("to compress use -> compress")
        console.log("to decompress use -> decompress")
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

// 

program.parse(process.argv);



