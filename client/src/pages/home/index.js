import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ListUsers from "@/components/ListUsers";

import { useDispatch, useSelector } from "react-redux";

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
	const { isLoggedIn } = useSelector((state) => state.user);

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
			<ListUsers filteredPatients={filteredPatients} />
		</div>
	);
}
