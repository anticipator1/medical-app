import React, { useState } from "react";
import EditUserModal from "@/components/EditUserModal";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "@/components/Navbar";
import Login from "../login";
import { useRouter } from "next/router";

function Profile() {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);

	const [searchInput, setSearchInput] = useState("");
	const { userDetails, isLoggedIn } = useSelector((state) => state.user);

	if (!isLoggedIn) {
		router.replace("/medical/login");
	}

	return (
		<div>
			//
			<Navbar searchInput={searchInput} onSearchInputChange={setSearchInput} />
			<div className="mt-20">
				<EditUserModal
					open={open}
					setOpen={setOpen}
					userDetails={userDetails}
				/>
			</div>
		</div>
	);
}

export default Profile;
