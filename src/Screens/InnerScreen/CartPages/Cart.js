import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Icon
} from 'react-native';
import CartHeader from './CartHeader';
import CartItemsContainer from './CartItemsContainer';
import CartBasketContainer from './CartBasketContainer';
import CartFooter from './CartFooter';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CartHeader />
                <CartItemsContainer />
                <CartBasketContainer />
                <CartFooter />

            </View>
        );
    }
}


// import React, { Component } from 'react';
// import { View } from 'react-native';
// import Header from './components/Header';
// import ItemsContainer from './components/ItemsContainer';
// import BasketContainer from './components/BasketComponent';
// import Footer from './components/Footer';

// export default class Cart extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Header />
//         <ItemsContainer />
//         <BasketContainer />
//         <Footer />
//       </View>

//     );
//   }
// }