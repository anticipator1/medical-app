import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

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
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords do not match")
		.required("Required"),
	phoneNumber: Yup.string()
		.min(10, "Too Short!")
		.max(15, "Too Long!")
		.required("Required"),
});

export default function Register() {
	const router = useRouter();
	const [error, setError] = useState({ errorMsg: "", type: "" });
	const registerUser = async (values) => {
		try {
			const response = await fetch("http://localhost:3005/user/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			const result = await response.json();
			console.log("Post response:", result);
			if (response.status == 409) {
				setError({ errorMsg: result.msg, type: "error" });
			} else {
				setError({ errorMsg: result.msg, type: "success" });
				setTimeout(() => {
					router.push("/medical/login");
				}, 1000);
			}
		} catch (error) {
			console.error("Error posting data:", error);
		}
	};

	return (
		<div className="flex w-5/6  justify-center  m-auto mt-4">
			<div className="flex flex-col w-full sm:w-3/4 md:w-3/4  lg:w-2/4 xl:w-96  justify-center ">
				<h1 className="font-bold text-xl mt-4 w-full text-center md:text-2xl ">
					Register client account
				</h1>

				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						phoneNumber: "",
						email: "",
						password: "",
						confirmPassword: "",
						role: "",
					}}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						// same shape as initial values
						registerUser(values);
					}}
				>
					{({ errors, touched }) => (
						<Form className="w-full flex flex-col justify-center mx-auto mt-10">
							{error.errorMsg ? (
								<Alert
									onClose={() => {
										setError("");
									}}
									severity={error.type}
								>
									<AlertTitle>Error</AlertTitle>
									{error.errorMsg}
								</Alert>
							) : (
								""
							)}
							<div className="flex  sm:flex-row flex-col  align-center ">
								<div className="w-full sm:w-1/2">
									<label
										htmlFor="firstName"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										First Name
									</label>
									<Field
										className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
										name="firstName"
									/>
									{errors.firstName && touched.firstName ? (
										<div className="text-red-500">{errors.firstName}</div>
									) : null}
								</div>
								<div className="w-full sm:w-1/2 ml-1">
									<label
										htmlFor="lastName"
										className="block text-sm font-medium leading-6 text-gray-900 "
									>
										Last Name
									</label>
									<Field
										name="lastName"
										className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
									/>
									{errors.lastName && touched.lastName ? (
										<div className="text-red-500">{errors.lastName}</div>
									) : null}
								</div>
							</div>
							<label
								htmlFor="phoneNumber"
								className="block text-sm font-medium leading-6 text-gray-900 mt-5"
							>
								Phone Number
							</label>
							<Field
								className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
								name="phoneNumber"
							/>
							{errors.phoneNumber && touched.phoneNumber ? (
								<div className="text-red-500">{errors.phoneNumber}</div>
							) : null}

							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900 mt-5"
							>
								Email address
							</label>
							<Field
								name="email"
								type="email"
								className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
							/>
							{errors.email && touched.email ? (
								<div className="text-red-500">{errors.email}</div>
							) : null}
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900 mt-5"
							>
								Password
							</label>
							<Field
								name="password"
								type="password"
								className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
							/>
							{errors.password && touched.password ? (
								<div className="text-red-500">{errors.password}</div>
							) : null}

							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium leading-6 text-gray-900 mt-5"
							>
								Confirm Password
							</label>
							<Field
								name="confirmPassword"
								type="password"
								className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none"
							/>
							{errors.confirmPassword && touched.confirmPassword ? (
								<div className="text-red-500">{errors.confirmPassword}</div>
							) : null}
							<button
								type="submit"
								className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}
