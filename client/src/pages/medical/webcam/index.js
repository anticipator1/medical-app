import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

const CustomWebcam = ({
	webcamRef,
	imgSrc,
	setImgSrc,
	capture,
	click,
	setClick,
}) => {
	const handleCapture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		//console.log(imageSrc);
		setImgSrc(imageSrc);
		//console.log("lol", imgSrc);
		setClick(false); // Reset the click state
	}, [webcamRef, setImgSrc, setClick]);

	// Callback function to handle taking a photo again
	const handleTakePhotoAgain = () => {
		setImgSrc(null);
		setClick(true);
	};
	// const webcamRef = useRef(null); // create a webcam reference
	// const [imgSrc, setImgSrc] = useState(null);

	// const capture = useCallback(() => {
	// 	const imageSrc = webcamRef.current.getScreenshot();
	// 	setImgSrc(imageSrc);
	// }, [webcamRef]);

	return (
		<div className="container">
			{/* {imgSrc ? <img src={imgSrc} alt="webcam" /> : <Webcam ref={webcamRef} />} */}
			{/* <button onClick={() => setClick(true)}>take </button> */}

			{imgSrc ? <img src={imgSrc} alt="webcam" /> : ""}

			<div className="btn-container">
				{click ? (
					<>
						<Webcam ref={webcamRef} />
						<button onClick={handleCapture}>Capture photo</button>
					</>
				) : (
					<>
						<button onClick={handleTakePhotoAgain}>Take Photo </button>
					</>
				)}
			</div>
		</div>
	);
};

export default CustomWebcam;
