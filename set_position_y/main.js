function renderDialog() {
  // language=HTML
  document.body.innerHTML = `
      <style>
          #dialog form {
              width: 400px;
          }
      </style>
      <dialog id="dialog">
          <form method="dialog" id="form">
                  <label>
                      <span>POSITION Y</span>
                      <input type="text" id="rectSize" placeholder="ex. 100 or 100+100 etc"/>
                  </label>
              <footer>
                  <button id="cancel">Cancel</button>
                  <button type="submit" id="ok" uxp-variant="cta">OK</button>
              </footer>
          </form>
      </dialog>
    `;
}

function createDialog(sceneNode) {
  let dialog = document.querySelector('#dialog');
  if (dialog) {
    console.log('Reusing old dialog');
    return dialog;
  }

  renderDialog();
  dialog = document.querySelector('#dialog');

  const submit = async (selection) => {
    let value = document.querySelector('#rectSize').value;
    if(value.indexOf('+') >= 0){
      const values = value.split('+');
      value = parseInt(values[0], 10) +  parseInt(values[1], 10)
    }else if(value.indexOf('-') >= 0){
      const values = value.split('-');
      value = parseInt(values[0], 10) -  parseInt(values[1], 10)
    }else if(value.indexOf('/') >= 0){
      const values = value.split('/');
      value = parseInt(values[0], 10) /  parseInt(values[1], 10)
    }else if(value.indexOf('*') >= 0){
      const values = value.split('*');
      value = parseInt(values[0], 10) *  parseInt(values[1], 10)
    } else{
      value = parseInt(value, 10);
    }
    console.log(selection.items[0])
    if(selection.items[0]){
      const node = selection.items[0]
      var contentBounds = node.boundsInParent
      console.log(contentBounds.x, contentBounds.y)
      const {
        x,
        y
      } = node.translation;
      console.log('x: y : ', x, y);
      node.moveInParentCoordinates(0, -contentBounds.y);
      node.moveInParentCoordinates(0, value);
    }
    dialog.close('ok');
  };

  document.querySelector('#cancel').addEventListener('click', e => {
    dialog.close('cancel');
  });

  document.querySelector('#ok').addEventListener('click', async e => {
    await submit(sceneNode);
  });

  return dialog;
}

async function main(sceneNode) {
  const r = await createDialog(sceneNode).showModal();
  console.log(r);
  if (r === 'reasonCanceled') {
    console.log('ESC dismissed dialog');
  }
}

module.exports = {
  commands: {
    menuCommand: main
  },
};
