var fs = require("fs");
fs.readdir("textos", function (err, files) {
    if (err) {
        console.log(err);
    }
    files.forEach(function (file) {
        fs.readFile(`textos/${file}`, (err, data) => {
            if (err)
                throw err;
            const fileContent = data.toString();
            console.log(fileContent);
        });
    });
});
//# sourceMappingURL=ex1.js.map