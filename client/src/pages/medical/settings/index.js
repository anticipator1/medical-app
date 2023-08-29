import { useEffect, useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
	LoadScript,
} from "@react-google-maps/api";

// const { isLoaded, loadError } = useJsApiLoader({
// 	googleMapsApiKey: "AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0", // ,
// 	// ...otherOptions
// });
const containerStyle = {
	width: "400px",
	height: "400px",
};

function Setting() {
	const [center, setCenter] = useState({
		lat: 27.702348,
		lng: 85.307631,
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			const { longitude, latitude } = pos.coords;
			setCenter({ lat: latitude, lng: longitude });
			console.log(pos.coords.latitude, pos.coords.longitude);
		});
	}, []);
	return (
		<div>
			<LoadScript googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0">
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
					{/* Child components, such as markers, info windows, etc. */}
					<MarkerF position={center} />
				</GoogleMap>
			</LoadScript>
		</div>
	);
}
export default Setting;
