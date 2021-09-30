import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import Geocode from "react-geocode";

const MapContainer = async ({address}) => {



Geocode.setApiKey("AIzaSyADWdTTdivnw39tHOT9H59yhbklqmON6T8");
let res = await Geocode.fromAddress(address)
const { lat: latitude, lng: longitude } = res.results[0].geometry.location

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

// MARKER:
// function GoogleMap() {
//   const dispatch = useDispatch();
//   const spots = useSelector((state) => state.spotReducer.spots);

//   useEffect(() => {
//     dispatch(fetchSpots());
//   }, [dispatch]);

//   const props = {
//     center: {
//       lat: 34.05223,
//       lng: -118.24368,
//     },
//     zoom: 11,
//   };
//   const Marker = ({ lat, lng }) => (
//     <div className="mapMarker">
//       <img src="https://i.imgur.com/yyandSM.png" alt=""></img>
//     </div>
//   );

//   return (
//     <div className="google-map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyCAr1UIay5E-L26k5sIxbrGHmuwr2AhQ9o" }}
//         defaultCenter={props.center}
//         defaultZoom={props.zoom}
//       >
//         {!!spots &&
//           spots?.map((spot) => (
//             <Link
//               key={spot.id}
//               to={`/spots/${spot.id}`}
//               lat={spot.latitude}
//               lng={spot.longitude}
//             >
//               <Marker />
//             </Link>
//           ))}
//       </GoogleMapReact>
//     </div>
//   );
// }

  const mapStyles = {
    height: "100%",
    width: "100%"};

  const defaultCenter = {
    lat: 48.8583701 , lng: 2.2922926
  };

  return (
     <div>
       <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyADWdTTdivnw39tHOT9H59yhbklqmON6T8'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
     </div>
  )
}

export default MapContainer;
