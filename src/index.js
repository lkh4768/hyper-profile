exports.decorateMenu = menu =>
  menu.map(item => {
    if (item.label !== 'Plugins') return item;

    const newItem = {...item};

    newItem.submenu = newItem.submenu.concat({
      label: 'Profile',
      accelerator: 'Alt+C',
      click: () => {
        console.log('Clicked profile menu');
      },
    });
    return newItem;
  });
