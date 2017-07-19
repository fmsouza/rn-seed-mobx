import React from 'react';
import { StackNavigator } from 'react-navigation';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import * as stores from './src/common/stores';
import * as Views from './src/components/views';

useStrict(true);

const Router = StackNavigator({
    home: { screen: Views.Home },
    second: { screen: Views.Second },
}, {
    initialRouteName: 'home'
});


export default () => (
    <Provider children={<Router />} {...stores} />
);