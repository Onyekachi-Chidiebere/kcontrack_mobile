// import React from 'react';
// import {View, Text} from 'react-native';
// import {WebView} from 'react-native-webview';

// const Direction = () => {
//   return (
//     <>
//       <WebView
//         source={{
//           uri: 'https://www.google.com/maps/dir/?api=1&origin=Yukar%C4%B1%20Bah%C3%A7elievler%2C%2070.%20Sk.%2017%2FB%2C%2006490%20%C3%87ankaya%2FAnkara%2C%20Turkey&origin_place_id=ChIJp4JiUCNP0xQR1JaSjpW_Hms&destination=Be%C5%9Fikkaya%2C%202044%2F1.%20Sk.%2C%2006230%20Alt%C4%B1nda%C4%9F%2FAnkara%2C%20Turqu%C3%ADa&destination_place_id=ChIJn-ZptRFT0xQRGUyoJX2s8Wc',
//         }}
//       />
//       <View>
//         <Text>this is direction</Text>
//       </View>
//     </>
//   );
//   return (
//     <View>
//       <Text>this is direction</Text>
//       <WebView source={{uri: 'https://reactnative.dev/'}} />
//     </View>
//   );
// };

// export default Direction;

// import React, {Component} from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Dimensions,
//   Image,
//   View,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';
// import {Container, Text} from 'native-base';

// import MapView from 'react-native-maps';
// import Polyline from '@mapbox/polyline';
// import Geolocation from '@react-native-community/geolocation';
// // import navigator from '@react-native-community/geolocation';

// class LocationA extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error: null,
//       concat: null,
//       coords: [],
//       x: 'false',
//       cordLatitude: -6.23,
//       cordLongitude: 106.75,
//     };

//     this.mergeLot = this.mergeLot.bind(this);
//   }

//   componentDidMount() {
// Geolocation.getCurrentPosition(
//   position => {
//     console.log({position});
//     this.setState({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//       error: null,
//     });
//     this.mergeLot();
//   },
//   error => this.setState({error: error.message}),
//   {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
// );
//   }

//   mergeLot() {
//     if (this.state.latitude != null && this.state.longitude != null) {
//       let concatLot = this.state.latitude + ',' + this.state.longitude;
//       this.setState(
//         {
//           concat: concatLot,
//         },
//         () => {
//           this.getDirections(concatLot, '-6.270565,106.759550');
//         },
//       );
//     }
//   }

//   async getDirections(startLoc, destinationLoc) {
//     try {
//       let resp = await fetch(
//         `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`,
//       );
//       let respJson = await resp.json();
//       let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
//       let coords = points.map((point, index) => {
//         return {
//           latitude: point[0],
//           longitude: point[1],
//         };
//       });
//       this.setState({coords: coords});
//       this.setState({x: 'true'});
//       return coords;
//     } catch (error) {
//       console.log('masuk fungsi');
//       this.setState({x: 'error'});
//       return error;
//     }
//   }
//   render() {
//     return (
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: -6.270565,
//           longitude: 106.75955,
//           latitudeDelta: 1,
//           longitudeDelta: 1,
//         }}>
//         {!!this.state.latitude && !!this.state.longitude && (
//           <MapView.Marker
//             coordinate={{
//               latitude: this.state.latitude,
//               longitude: this.state.longitude,
//             }}
//             title={'Your Location'}
//           />
//         )}

//         {!!this.state.cordLatitude && !!this.state.cordLongitude && (
//           <MapView.Marker
//             coordinate={{
//               latitude: this.state.cordLatitude,
//               longitude: this.state.cordLongitude,
//             }}
//             title={'Your Destination'}
//           />
//         )}

//         {!!this.state.latitude &&
//           !!this.state.longitude &&
//           this.state.x == 'true' && (
//             <MapView.Polyline
//               coordinates={this.state.coords}
//               strokeWidth={2}
//               strokeColor="red"
//             />
//           )}

//         {!!this.state.latitude &&
//           !!this.state.longitude &&
//           this.state.x == 'error' && (
//             <MapView.Polyline
//               coordinates={[
//                 {
//                   latitude: this.state.latitude,
//                   longitude: this.state.longitude,
//                 },
//                 {
//                   latitude: this.state.cordLatitude,
//                   longitude: this.state.cordLongitude,
//                 },
//               ]}
//               strokeWidth={2}
//               strokeColor="red"
//             />
//           )}
//       </MapView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

import React from 'react';
import {StyleSheet, View, Dimensions, Pressable} from 'react-native';
import MapView from 'react-native-maps';
import ArrBack from '../../../images/whiteArrBack.svg';

const RnDirectionsApp = ({navigation, route}) => {
  const {latitude, longitude, coords} = route.params;

  return (
    <View>
      <Pressable
        style={{padding: 10, backgroundColor: 'grey'}}
        onPress={() => navigation.pop()}>
        <ArrBack />
      </Pressable>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.1043,
          longitudeDelta: 0.1043,
        }}>
        <MapView.Polyline
          coordinates={coords}
          strokeWidth={5}
          strokeColor="red"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default RnDirectionsApp;
