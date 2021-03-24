const fs = require("fs");

const ACTION_ADD = "add";
const ACTION_REMOVE = "remove";

const action = process.argv[2];
const targetEnv = process.argv[3];

if(action === ACTION_ADD){
	console.log("creating environment variable: " + targetEnv);
	fs.copyFileSync("./build_env/.env." + targetEnv, "./.env");
} else if(action === ACTION_REMOVE){
	console.log("Removing environment variable");
	fs.unlinkSync("./.env");
}