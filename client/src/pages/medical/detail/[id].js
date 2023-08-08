import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
export default function patientDetail() {
	const router = useRouter();
	const [data, setData] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const userDetail = async () => {
		const response = await fetch(
			`http://localhost:3005/patient/${router.query.id}`
		);
		const patient = await response.json();
		setData(patient.patientData);
	};
	useEffect(() => {
		userDetail();
	}, [router.query.id]);

	return (
		<div className="flex w-full flex-col  justify-center">
			<Navbar searchInput={searchInput} onSearchInputChange={setSearchInput} />
			<div className="mt-20 w-full  flex flex-col justify-center ">
				{console.log(data)}
				<h1 className="text-2xl ">Details Page</h1>
				<div className="w-1/4 border-red-400 border-2">
					<p>User Id : {data.userId}</p>
					<p>Full Name : {data.fullName}</p>
					<p>Age : {data.age}</p>
					<p>Phone Number : {data.phoneNumber}</p>
					<p>Sex : {data.sex}</p>
					<p>Passport Number : {data.passportNumber}</p>
					<p>Nationality : {data.nationality}</p>
				</div>
			</div>
		</div>
	);
}
