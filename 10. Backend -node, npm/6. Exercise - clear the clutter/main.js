// import fs from 'fs/promises'
import fs, { existsSync } from 'fs'
import path from 'path'

let thisDir = "D:\\vscode\\full stack (self learning)\\progress\\10. Backend -node, npm\\6. Exercise - clear the clutter\\"
let files = fs.readdirSync(thisDir)
let extensions = []

for (const file of files) {

    if(path.extname(file) != ".js" && path.extname(file) != ".json" && path.extname(file) != "") {

        if(extensions.includes(path.extname(file))) {
            let dir = path.extname(file).split('.')[1]
            fs.renameSync(path.join(thisDir, file), path.join(thisDir, dir, file))
        } 
        else {
            extensions.push(path.extname(file))
            let dir = path.extname(file).split('.')[1]
            if(fs.existsSync(dir)){
                console.log("Directory already exist for " + dir);
            } else {
                fs.mkdir(`${dir}`, e => {})
            }
            fs.renameSync(path.join(thisDir, file), path.join(thisDir, dir, file))
        }

    }
}

