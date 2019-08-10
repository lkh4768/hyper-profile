const {dialog} = require('electron');

exports.decorateMenu = menu =>
  menu.map(item => {
    if (item.label !== 'Plugins') return item;

    const newItem = {...item};

    newItem.submenu = newItem.submenu.concat({
      label: 'Profile',
      accelerator: 'Alt+C',
      click: () => {
        dialog.showMessageBox(
          {
            type: 'none',
            buttons: ['read', 'write'],
            title: 'read config',
          },
          arg => {
            console.log({arg});
          },
        );
      },
    });
    return newItem;
  });
