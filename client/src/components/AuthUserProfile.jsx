import React, { createContext } from "react";

const ProfileContext = createContext();

//parent component
function AuthUserProfile({ children }) {
	return (
		<ProfileContext.Provider value={{}}>
			<div className="flex flex-col max-w-[262px]  shadow-md  rounded-lg ml-2 border-t-2  min-h-[262px] fontSecondary">
				{children}
			</div>
		</ProfileContext.Provider>
	);
}

//child components

//heading component
function Heading({ children, classes }) {
	return <h4 className={`font-bold leading-7  ${classes}`}>{children}</h4>;
}

//label component
function Label({ children }) {
	return <p className="text-base leading-7 font-semibold  pt-4">{children}</p>;
}

function Line() {
	return <hr class="w-full  mt-4 border-gray-300 "></hr>;
}

//assign children to parent
AuthUserProfile.Heading = Heading;
AuthUserProfile.Label = Label;
AuthUserProfile.Line = Line;

export default AuthUserProfile;
