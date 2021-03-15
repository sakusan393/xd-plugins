let commands = require("commands");

const separateGroup = async (selection)=>{
    const items = [];
    selection.items.forEach(node=>{
        items.push(node);
    })
    items.forEach(node => {
        selection.items = [];
        selection.items=[node];
        console.log(selection.items.length, node.name);
        commands.group();
        selection.items[0].name = node.name;
    })
}

module.exports = { // コマンドIDとファンクションの紐付け
    commands: {
        separateGroup: separateGroup
    }
};

