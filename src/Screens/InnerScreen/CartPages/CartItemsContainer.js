import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CartItem from './CartItem'


class CartItemsContainer extends Component {
    render() {
        return (
            <View style={styles.containterStyle}>
                <CartItem />
            </View>
        );
    }
}

const styles = {
    containterStyle: {
        flex: 4,
        backgroundColor: '#DCDCDC'
    }
};

export default CartItemsContainer;