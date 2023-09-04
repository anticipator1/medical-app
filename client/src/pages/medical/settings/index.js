import { useEffect, useState } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	MarkerF,
	LoadScript,
} from "@react-google-maps/api";
import AuthUserProfile from "@/components/AuthUserProfile";
import First from "@/components/First";
import Second from "@/components/Second";

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
			{/* <LoadScript googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0">
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
					
					<MarkerF position={center} />
				</GoogleMap>
			</LoadScript> */}
			<First />
			<div className="mt-5"></div>
			<Second />
			<div className="mt-4 pt-4 h-20"></div>
		</div>
	);
}
export default Setting;
