import React from 'react';
import { View, Text } from 'react-native';
import CartTotalComponent from './CartTotalComponent';

const Footer = () => {
    const {
        containerStyle,
        buttonContainerStyle,
        closeButtonStyle,
        checkoutButtonStyle } = styles;
    return (
        <View style={containerStyle}>
            <CartTotalComponent />
            <View style={buttonContainerStyle}>
                <View style={closeButtonStyle}>
                    <Text style={{ color: '#fff' }}>Close</Text>
                </View>

                <View style={checkoutButtonStyle}>
                    <Text style={{ color: '#fff' }}>Go to checkout</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        borderTopWidth: 1,
        borderColor: '#e2e2e2',
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    closeButtonStyle: {
        backgroundColor: 'rgba(214, 48, 49,1.0)',
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 3,
    },
    checkoutButtonStyle: {
        backgroundColor: '#f39c12',
        padding: 10,
        paddingRight: 60,
        paddingLeft: 60,
        borderRadius: 3,
    }
};

export default Footer;