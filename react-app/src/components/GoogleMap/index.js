import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";

const MapContainer = async ({addressLineOne, zipCode}) => {

console.log('------------------------------------');
console.log("AddressLineOne", addressLineOne);
console.log("Zip", zipCode);
console.log('------------------------------------');

Geocode.setApiKey("AIzaSyADWdTTdivnw39tHOT9H59yhbklqmON6T8");
const address = addressLineOne + " " + zipCode
let res = await Geocode.fromAddress(address)

// Geocode.setLanguage("en");

// Geocode.setRegion("us");
// let lat;
// let lng;

// console.log('------------------------------------');
// console.log(Geocode.fromAddress(`${addressLineOne}, ${zipCode}`).then(
//     (response) => {
//       let { lat, lng } = response.results[0].geometry.location;
//       console.log('------------------------------------');
//       console.log(lat, lng);
//       console.log('------------------------------------');
//     },
//     (error) => {
//       console.error(error);
//     }
// ));
// console.log('------------------------------------');

  const mapStyles = {
    height: "100%",
    width: "100%"};

  const defaultCenter = {
    lat: 48.8583701 , lng: 2.2922926
  };

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyADWdTTdivnw39tHOT9H59yhbklqmON6T8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;
