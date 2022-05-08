import React from 'react';
import {View, Text, Linking} from 'react-native';
import {WebView} from 'react-native-webview';

const Direction = ({route}) => {
  const {latitude, longitude, coords} = route.params;
  console.log({uri:encodeURI('hello there')})
  Linking.canOpenURL(
    `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=Be%C5%9Fikkaya%2C%202044%2F1.%20Sk.%2C%2006230%20Alt%C4%B1nda%C4%9F%2FAnkara%2C%20Turqu%C3%ADa&destination_place_id=ChIJn-ZptRFT0xQRGUyoJX2s8Wc`,
  ).then(supported => {
    if (supported) {
      Linking.openURL(
        `https://www.google.com/maps/dir/?api=1&origin=Yukar%C4%B1%20Bah%C3%A7elievler%2C%2070.%20Sk.%2017%2FB%2C%2006490%20%C3%87ankaya%2FAnkara%2C%20Turkey&origin_place_id=ChIJp4JiUCNP0xQR1JaSjpW_Hms&destination=Be%C5%9Fikkaya%2C%202044%2F1.%20Sk.%2C%2006230%20Alt%C4%B1nda%C4%9F%2FAnkara%2C%20Turqu%C3%ADa&destination_place_id=ChIJn-ZptRFT0xQRGUyoJX2s8Wc`,
      );
    } else {
      console.log(
        "Don't know how to open URI: " +
          `https://www.google.com/maps/dir/?api=1&origin=Yukar%C4%B1%20Bah%C3%A7elievler%2C%2070.%20Sk.%2017%2FB%2C%2006490%20%C3%87ankaya%2FAnkara%2C%20Turkey&origin_place_id=ChIJp4JiUCNP0xQR1JaSjpW_Hms&destination=Be%C5%9Fikkaya%2C%202044%2F1.%20Sk.%2C%2006230%20Alt%C4%B1nda%C4%9F%2FAnkara%2C%20Turqu%C3%ADa&destination_place_id=ChIJn-ZptRFT0xQRGUyoJX2s8Wc`,
      );
    }
  });
  return (
    <>
      <WebView
        source={{
          uri: 'https://www.google.com/maps/dir/?api=1&origin=Yukar%C4%B1%20Bah%C3%A7elievler%2C%2070.%20Sk.%2017%2FB%2C%2006490%20%C3%87ankaya%2FAnkara%2C%20Turkey&origin_place_id=ChIJp4JiUCNP0xQR1JaSjpW_Hms&destination=Be%C5%9Fikkaya%2C%202044%2F1.%20Sk.%2C%2006230%20Alt%C4%B1nda%C4%9F%2FAnkara%2C%20Turqu%C3%ADa&destination_place_id=ChIJn-ZptRFT0xQRGUyoJX2s8Wc',
        }}
      />
      <View>
        <Text>this is direction</Text>
      </View>
    </>
  );
  return (
    <View>
      <Text>this is direction</Text>
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </View>
  );
};

export default Direction;

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

// import React, {Component} from 'react';
// import {Dimensions, StyleSheet, View, Text} from 'react-native';
// import MapView from 'react-native-maps';

// import MapViewDirections from 'react-native-maps-directions';

// const {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.771707;
// const LONGITUDE = -122.4053769;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const GOOGLE_MAPS_APIKEY = 'AIzaSyCKLnC-xAH8lNbHuCJIZ2PNTw-5RKr4zek';

// import {NativeModules} from 'react-native';
// const reactNativeVersion = NativeModules.PlatformConstants.reactNativeVersion;
// const reactNativeVersionString = reactNativeVersion ? `${reactNativeVersion.major}.${reactNativeVersion.minor}.${reactNativeVersion.patch}${reactNativeVersion.prerelease ? ' pre-release' : ''}` : '';

// const reactNativeMapsVersion = require('./node_modules/react-native-maps/package.json').version;
// const reactNativeMapsDirectionsVersion = require('./node_modules/react-native-maps-directions/package.json').version;

// const styles = StyleSheet.create({
//   versionBox: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   versionText: {
//     padding: 4,
//     backgroundColor: '#FFF',
//     color: '#000',
//   },
// });

// class Example extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       coordinates: ['Awka, udoka estate Nigeria', 'Awka aroma'],
//     };

//     this.mapView = null;
//   }

//   onMapPress = e => {
//     // this.setState({
//     //   coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
//     // });
//   };

//   onReady = result => {
//     console.log({result})
//     this.mapView.fitToCoordinates(result.coordinates, {
//       edgePadding: {
//         right: width / 10,
//         bottom: height / 10,
//         left: width / 10,
//         top: height / 10,
//       },
//     });
//   };

//   onError = errorMessage => {
//     console.log(errorMessage); // eslint-disable-line no-console
//   };

//   setDistance(distance, duration_in_traffic) {
//     // console.log('setDistance');
//     this.setState({
//       distance: parseFloat(distance),
//       durationInTraffic: parseInt(duration_in_traffic),
//     });
//   }

//   render() {
//     return (
//       <View style={StyleSheet.absoluteFill}>
//         <MapView
//           initialRegion={{
//             latitude: LATITUDE,
//             longitude: LONGITUDE,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }}
//           style={StyleSheet.absoluteFill}
//           ref={c => (this.mapView = c)} // eslint-disable-line react/jsx-no-bind
//           onPress={this.onMapPress}>
//           <MapViewDirections
//             origin={this.state.coordinates[0]}
//             destination={
//               this.state.coordinates[this.state.coordinates.length - 1]
//             }
//             waypoints={this.state.coordinates.slice(1, -1)}
//             mode="DRIVING"
//             apikey={GOOGLE_MAPS_APIKEY}
//             language="en"
//             strokeWidth={4}
//             strokeColor="red"
//             onStart={params => {
//               console.log(
//                 `Started routing between "${params.origin}" and "${
//                   params.destination
//                 }"${
//                   params.waypoints.length
//                     ? ' using waypoints: ' + params.waypoints.join(', ')
//                     : ''
//                 }`,
//               );
//             }}
//             onReady={this.onReady}
//             onError={errorMessage => {
//               console.log(errorMessage);
//             }}
//             resetOnChange={true}
//           />
//         </MapView>
//         {/* <View style={styles.versionBox}>
//           <Text style={styles.versionText}>RN {reactNativeVersionString}, RNM: {reactNativeMapsVersion}, RNMD: {reactNativeMapsDirectionsVersion}</Text>
//         </View> */}
//       </View>
//     );
//   }
// }

// export default Example;

// import React from 'react';
// import {StyleSheet, View, Dimensions, Pressable} from 'react-native';
// import MapView from 'react-native-maps';
// import ArrBack from '../../../images/whiteArrBack.svg';

// const RnDirectionsApp = ({navigation, route}) => {
//   const {latitude, longitude, coords} = route.params;

//   return (
//     <View>
//       <Pressable
//         style={{padding: 10, backgroundColor: 'grey'}}
//         onPress={() => navigation.pop()}>
//         <ArrBack />
//       </Pressable>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude,
//           longitude,
//           latitudeDelta: 0.1043,
//           longitudeDelta: 0.1043,
//         }}>
//         <MapView.Polyline
//           coordinates={coords}
//           strokeWidth={5}
//           strokeColor="red"
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   map: {
//     position: 'absolute',
//     zIndex: -1,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

// export default RnDirectionsApp;
