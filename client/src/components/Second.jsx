import React from "react";
import AuthUserProfile from "./AuthUserProfile";

function Second() {
	return (
		<AuthUserProfile>
			<div className="flex flex-col   pt-6 items-center justify-center">
				<img className="w-[60px] h-[60px] " src="/Ellipse.png" alt="profile" />

				<AuthUserProfile.Heading classes="text-lg">
					Hans Dawson
				</AuthUserProfile.Heading>
			</div>
			<div className="pl-6">
				<div className="flex   gap-4">
					<svg
						className="self-end"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M19.5 12.5C19.5 11.837 19.7634 11.2011 20.2322 10.7322C20.7011 10.2634 21.337 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C2.66304 9.5 3.29893 9.76339 3.76777 10.2322C4.23661 10.7011 4.5 11.337 4.5 12C4.5 12.663 4.23661 13.2989 3.76777 13.7678C3.29893 14.2366 2.66304 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C21.337 15 20.7011 14.7366 20.2322 14.2678C19.7634 13.7989 19.5 13.163 19.5 12.5Z"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 4V20"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-dasharray="5 5"
						/>
					</svg>

					<AuthUserProfile.Label>My Tickets</AuthUserProfile.Label>
				</div>
				<div className="flex gap-4 ">
					<svg
						className="self-end"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M12 12C13.3261 12 14.5979 11.4732 15.5355 10.5355C16.4732 9.59785 17 8.32608 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2C10.6739 2 9.40215 2.52678 8.46447 3.46447C7.52678 4.40215 7 5.67392 7 7C7 8.32608 7.52678 9.59785 8.46447 10.5355C9.40215 11.4732 10.6739 12 12 12Z"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19.21 15.74L15.67 19.28C15.53 19.42 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.82 15.13 19.21 15.74Z"
							stroke="black"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18.7 16.25C19 17.33 19.84 18.17 20.92 18.47"
							stroke="black"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<AuthUserProfile.Label>Account settings</AuthUserProfile.Label>
				</div>
			</div>

			<AuthUserProfile.Line></AuthUserProfile.Line>
			<div className="pl-6">
				<div className="flex  gap-4">
					<svg
						className="self-end"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M15.49 20.01L20.5 14.99H3.5M8.51 3.98999L3.5 9.00999H20.5"
							stroke="black"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<AuthUserProfile.Label>Switch to hosting</AuthUserProfile.Label>
				</div>

				<div className="flex  gap-4">
					<svg
						className="self-end"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M17 18.4299H13L8.55 21.3899C8.39982 21.49 8.22528 21.5475 8.045 21.5562C7.86472 21.5649 7.68546 21.5245 7.52635 21.4393C7.36724 21.3541 7.23424 21.2273 7.14154 21.0724C7.04884 20.9175 6.99992 20.7404 7 20.5599V18.4299C4 18.4299 2 16.4299 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.4299C22 16.4299 20 18.4299 17 18.4299Z"
							stroke="black"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12.0001 11.3601V11.1501C12.0001 10.4701 12.4201 10.1101 12.8401 9.82011C13.2501 9.54011 13.6601 9.18011 13.6601 8.52011C13.6601 7.60011 12.9201 6.86011 12.0001 6.86011C11.0801 6.86011 10.3401 7.60011 10.3401 8.52011M11.9951 13.7501H12.0051"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<AuthUserProfile.Label>Help</AuthUserProfile.Label>
				</div>
			</div>

			<AuthUserProfile.Line></AuthUserProfile.Line>
			<div className="flex flex-row  justify-center text-sm pb-2">
				<AuthUserProfile.Heading classes="py-4">
					Log Out
				</AuthUserProfile.Heading>
			</div>
		</AuthUserProfile>
	);
}

export default Second;
