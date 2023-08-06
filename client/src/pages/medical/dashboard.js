import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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
	const fetchPatients = async () => {
		const response = await fetch("http://localhost:3005/user/register");
		const data = response.json();
		console.log(data);
	};

	useEffect(() => {
		fetchPatients();
	}, []);
	return (
		<div className="flex w-5/6  justify-center  m-auto mt-4">
			<div className="flex flex-col w-full sm:w-3/4 md:w-3/4  lg:w-2/4 xl:w-96  justify-center ">
				<h1 className="font-bold text-xl mt-4 w-full text-center md:text-2xl ">
					Dashboard
				</h1>
			</div>
		</div>
	);
}
