import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Navbar from "@/components/Navbar";

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	phoneNumber: Yup.string()
		.min(10, "Too Short!")
		.max(15, "Too Long!")
		.required("Required"),
});

export default function Dashboard() {
	const [patients, setPatients] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	const fetchPatients = async () => {
		const response = await fetch("http://localhost:3005/patients");
		const data = await response.json();
		setPatients(data.patientData);
		console.log(data);
	};

	useEffect(() => {
		fetchPatients();
	}, []);

	const filteredPatients = searchInput
		? patients.filter(
				(patient) =>
					patient.fullName.toLowerCase().includes(searchInput.toLowerCase()) ||
					patient.userId.toString().includes(searchInput)
		  )
		: patients;

	return (
		<div className="flex w-full flex-col  justify-center">
			<Navbar searchInput={searchInput} onSearchInputChange={setSearchInput} />
			<div className="w-full border-2 border-blue-300 mt-14">
				<div className="flex justify-between m-4 p-2 border-blue-100 border-2">
					<h1 className="w-1/6 text-xl font-serif font-bold">Test ID</h1>
					<h1 className="w-1/4 text-xl font-serif font-bold">Full Name</h1>
					<h1 className="w-1/4 text-xl font-serif font-bold">Sex</h1>
					<h1 className="w-1/4 text-xl font-serif font-bold">Age</h1>
				</div>
				{/* {patients.length > 0 ? (
					patients.map((item) => (
						<div
							key={item._id}
							className="flex flex-row justify-between m-4 p-2 border-blue-100 border-b-2 text-lg"
						>
							<p className="w-1/6">{item.userId}</p>
							<p className="w-1/4">{item.fullName}</p>
							<p className="w-1/4">{item.sex}</p>
							<p className="w-1/4">{item.age}</p>
						</div>
					))
				) : (
					<p>Loading....</p>
				)} */}
				{filteredPatients.length > 0 ? (
					filteredPatients.map((item) => (
						<div
							key={item._id}
							className="flex flex-row justify-between m-4 p-2 border-blue-100 border-b-2 text-lg"
						>
							<p className="w-1/6">{item.userId}</p>
							<p className="w-1/4">{item.fullName}</p>
							<p className="w-1/4">{item.sex}</p>
							<p className="w-1/4">{item.age}</p>
						</div>
					))
				) : (
					<p>Loading....</p>
				)}
			</div>
		</div>
	);
}
