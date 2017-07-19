import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('counter')
@observer
export default class Application extends React.Component {

    handleClick() {
        const { counter } = this.props;
        counter.increment();
    }

    render() {
        const { counter } = this.props;
        return (
            <View style={styles.container}>
                <Text>{counter.count}</Text>
                <Button title="Press me" onPress={() => this.handleClick()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});