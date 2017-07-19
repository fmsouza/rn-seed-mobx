import React from 'react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import * as stores from './src/common/stores';
import Application from './src';

useStrict(true);

export default () => (
    <Provider {...stores}>
        <Application />
    </Provider>
);