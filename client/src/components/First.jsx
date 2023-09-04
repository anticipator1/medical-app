import React from "react";
import AuthUserProfile from "./AuthUserProfile";

function First() {
	return (
		<AuthUserProfile>
			<div className="pl-8">
				<AuthUserProfile.Heading classes="text-lg pt-6">
					Your account
				</AuthUserProfile.Heading>

				<AuthUserProfile.Label>Login</AuthUserProfile.Label>
				<AuthUserProfile.Label>Sign Up</AuthUserProfile.Label>
			</div>

			<AuthUserProfile.Line />
			<div className="pl-8">
				<AuthUserProfile.Label>Host events</AuthUserProfile.Label>
				<AuthUserProfile.Label>Help</AuthUserProfile.Label>
			</div>
		</AuthUserProfile>
	);
}

export default First;
