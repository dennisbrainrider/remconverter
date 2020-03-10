const fs = require("fs");

let args = [...process.argv];

const filePath = args.length > 3 ? `./${args[2]}` : "./client/client.scss";
const multiplier = args.length > 3 ? args[3] * 1 : args[2] * 1;

if (!fs.existsSync(filePath)) {
    console.error(`Path ${filePath} doesn't exist.`);
    console.error("Usage: remconverter [relativePath] [multiplier]");
    process.exit(1);
}

if (!multiplier || typeof Number(multiplier) != "number") {
    console.error(`Multiplier is invalid or undefined`);
    process.exit(1);
}

const scss = fs.readFileSync(filePath, "utf8");

const result = scss.replace(
    /[0-9\.]+(?=rem)/g,
    match => Math.round((match * multiplier + Number.EPSILON) * 100) / 100
);

fs.writeFileSync(`./convertedRems.scss`, result, "utf8");

console.log("REMs converted!");
