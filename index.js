'use strict';

import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';

const App = () => (
    <div className="profile container">
        <Header />
        <Content />
    </div>
);

render((<App/>),
    document.getElementById('react-root')
);
