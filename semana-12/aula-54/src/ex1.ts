var fs = require("fs");


//TODO: tiágem correta
fs.readdir("textos", function (err: ErrnoException | null, files: any) {
    if(err){console.log(err)}
    files.forEach(function (file: any) {
        fs.readFile(`textos/${file}`, (err: any, data: Buffer) => {
            if (err) throw err;
            const fileContent: string =  data.toString();
            console.log(fileContent);
            
        });
    })
})

