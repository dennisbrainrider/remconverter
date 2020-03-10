const fs = require("fs");

let args = [...process.argv];

const filePath = args.length > 3 ? `./${args[2]}` : "./client/client.scss";
const multiplier = args.length > 3 ? args[3] * 1 : args[2] * 1;

console.log(filePath);

const scss = fs.readFileSync(filePath, "utf8");

const result = scss.replace(
    /[0-9\.]+(?=rem)/g,
    match => Math.round((match * multiplier + Number.EPSILON) * 100) / 100
);

fs.writeFileSync(`./convertedScss`, result, "utf8");
