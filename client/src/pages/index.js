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

	const fetchPatients = async () => {
		const response = await fetch("http://localhost:3005/patients");
		const data = await response.json();
		setPatients(data.patientData);
		console.log(data);
	};

	useEffect(() => {
		fetchPatients();
	}, []);
	return (
		<div className="flex w-5/6 flex-col  justify-center  m-auto mt-4">
			<Navbar />
			<div className="w-full border-2 border-blue-300">
				<div className="flex justify-between m-4 p-2 border-blue-100 border-2">
					<h1 className="w-1/3">full name</h1>
					<p className="w-1/3">sex</p>
					<p className="w-1/3">age</p>
				</div>
				{patients.length > 0 ? (
					patients.map((item) => (
						<div
							key={item._id}
							className="flex flex-row justify-between m-4 p-2 border-blue-100 border-b-2"
						>
							<p className="w-1/3">{item.fullName}</p>
							<p className="w-1/3">{item.sex}</p>
							<p className="w-1/3">{item.age}</p>
						</div>
					))
				) : (
					<p>Loading....</p>
				)}
			</div>
		</div>
	);
}
