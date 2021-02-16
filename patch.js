const fs = require("fs");

const targetFilePath = `./build/node/index.dart.js`;
const targetContent = fs.readFileSync(targetFilePath, "utf-8");
const patchedContent = targetContent.replace("self.require=require,", "");
fs.writeFileSync(targetFilePath, patchedContent);
