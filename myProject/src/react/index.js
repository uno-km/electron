import React from 'react';
import ReactDom from 'react-dom';
import SideMenu from '../../src/script/menu/setMenu'
import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(
<SideMenu/>
);
/*ReactDom.render(
<>
<SideMenu/>
</>, document.getElementById('root')
);*/