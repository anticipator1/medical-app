import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { UseSelector } from "react-redux/es/hooks/useSelector";

const SignupSchema = Yup.object().shape({
	phoneNumber: Yup.string()
		.min(7, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	password: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
});

export default function Login() {
	const router = useRouter();
	const [error, setError] = useState("");
	const loginAdmin = async (values) => {
		try {
			const response = await fetch("http://localhost:3005/admin/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			const result = await response.json();

			console.log("Post response:", result);
		} catch (error) {
			console.error("Error posting data:", error);
		}
	};
	return (
		<div className="flex w-5/6 justify-center  m-auto mt-4">
			<div className="flex flex-col w-full sm:w-3/4 md:w-3/4 lg:w-96  justify-center ">
				<h1 className="font-bold text-xl mt-10   md:text-2xl text-center">
					Log in admin
				</h1>

				<Formik
					initialValues={{
						phoneNumber: "",
						password: "",
					}}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						// same shape as initial values
						loginAdmin(values);
					}}
				>
					{({ errors, touched }) => (
						<Form className="w-full flex flex-col justify-center mx-auto mt-10">
							<label
								htmlFor="phoneNumber"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Phone Number
							</label>
							<Field
								name="phoneNumber"
								type="text"
								className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
							/>
							{errors.phoneNumber && touched.phoneNumber ? (
								<div className="text-red-500">{errors.phoneNumber}</div>
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
								className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
							/>
							{errors.password && touched.password ? (
								<div className="text-red-500">{errors.password}</div>
							) : null}

							<button
								type="submit"
								className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>

				{/* <div className="flex flex-col md:flex-row justify-between mt-5">
				<p>Don't have an account ?</p>
				<a href="/" className="text-blue-600">
					Create New Account
				</a>
			</div> */}
			</div>
		</div>
	);
}
