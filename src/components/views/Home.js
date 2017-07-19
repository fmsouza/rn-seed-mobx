import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class Home extends React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Home view</Text>
                <Button
                    title="Go to next"
                    onPress={() => navigation.navigate('second', { name: 'Lucy' })}
                />
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