import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Chat from './pages/Chat';
import Message from './pages/Message';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/chat' component={Chat} />
            <Route path='/send/message' component={Message} />
        </Switch>
    );
}
