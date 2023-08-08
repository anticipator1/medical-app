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
		<div className="flex w-full flex-col items-center">
			<Navbar searchInput={searchInput} onSearchInputChange={setSearchInput} />
			<div className="w-full max-w-md p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
				<h1 className="text-2xl font-semibold text-center">User Details</h1>
				<div className="mt-4 space-y-2">
					<div className="flex justify-between">
						<p className="text-gray-600 font-medium">User Id:</p>
						<p>{data.userId}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-gray-600 font-medium">Full Name:</p>
						<p>{data.fullName}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-gray-600 font-medium">Age:</p>
						<p>{data.age}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-gray-600 font-medium">Sex:</p>
						<p>{data.sex}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-gray-600 font-medium">Passport Number:</p>
						<p>{data.passportNumber}</p>
					</div>
					<div className="flex justify-between">
						<p className="text-gray-600 font-medium">Nationality:</p>
						<p>{data.nationality}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
