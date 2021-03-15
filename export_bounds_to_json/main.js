const {Group} = require("scenegraph");
const fs = require("uxp").storage.localFileSystem;
const clipboard = require('clipboard');

const createJson = async (selection)=>{
    console.log('length: ', selection.items.length);
    const data = {}
    data.items = []
    if (selection.items.length && selection.items[0] instanceof Group) {
        const items = selection.items[0].children
        items.forEach(node => {
            console.log("Name: " + node.name);
            var contentBounds = node.boundsInParent;
            const item = {}
            item.x = contentBounds.x;
            item.y = contentBounds.y;
            item.width = contentBounds.width;
            item.height = contentBounds.height;
            item.name = node.name;
            data.items.push(item)
        })
    }
    let masterData = JSON.stringify(data, null, ' ')
    console.log('masterData : ', masterData);
    clipboard.copyText(masterData)

    const folder = await fs.getFolder();
    const newFile = await folder.createFile("_pops.json", {overwrite: true});
    newFile.write(masterData).then(result=>{
        console.log(result)
    }).catch(error=>{
        console.log(error)})
}

module.exports = {
    commands: {
        createJson: createJson
    }
};

