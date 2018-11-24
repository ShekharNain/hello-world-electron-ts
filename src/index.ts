import * as electron from "electron";

electron.app.on("ready", () => {
    console.log("Electron app is ready");
});
console.log("hello world");