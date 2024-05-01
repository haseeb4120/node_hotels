const fs=require("fs");
let text =fs.readFileSync("haseeb.txt","utf-8");
text=text.replace("7th","8th");
console.log(text);