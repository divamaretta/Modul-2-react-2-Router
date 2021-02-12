import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import Member from './member';
import Biografi from './biografi';
import Hobby from './hobby';

const Utama = () => (
    <Switch>
        <Route exact path="/"  component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
        <Route path="/hobby" component={Hobby} />
        <Route path="/biografi" component={Biografi} />
    </Switch>
)

export default Utama;