import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	userDetails: {},
	isLoggedIn: false,
	role: "",
};

const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserDetails: (state, actions) => {
			return {
				...state,
				token: actions.payload.token,
				isLoggedIn: actions.payload.success,
				userDetails: actions.payload.userDetails,
				role: actions.payload.userDetails.role,
			};
		},
	},
});

export const { setUserDetails } = UserSlice.actions;
export default UserSlice.reducer;
