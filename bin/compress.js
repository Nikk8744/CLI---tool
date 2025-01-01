const zlib = require('zlib');
const fs = require('fs');
const {default: chalk} = require('chalk');

const compressFile = () => {
    const gzip = zlib.createGzip();
    const inp = fs.createReadStream('./bin/demo.txt');
    const out = fs.createWriteStream('newfile11.txt.gz');

    inp.pipe(gzip).pipe(out) 

    inp.on('error', (err) => {
        console.log(chalk.red(`Error reading inpur file`, err))
    })

    out.on('error', (err) => {
        console.log(chalk.red(`Error writing output file, ${err}`))
    })


    out.on("finish", () => {
        console.log(chalk.green(`File compressed Successfully and saved as newfile.txt.gz`))
    })
}

const decompressFile = () => {
    const gunzip = zlib.createGunzip();
    const inp = fs.createReadStream('newfile11.txt.gz');
    const out = fs.createWriteStream('newDecompressedFile.txt');

    inp.pipe(gunzip).pipe(out)

    inp.on('error', (err) => {
        console.error(chalk.red('Error reading the input file:', err));
    });
    
    out.on('error', (err) => {
        console.error(chalk.red('Error writing to the output file:', err));
    });
    
    out.on('finish', () => {
        console.log(chalk.green('File decompressed successfully!'));
    });
}


module.exports = {
    compressFile,
    decompressFile
}