import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

const SignupSchema = Yup.object().shape({
	fullName: Yup.string()
		.min(4, "Too Short!")
		.max(25, "Too Long!")
		.required("Required"),
	phoneNumber: Yup.number()
		.min(8, "Too Short!")

		.required("Required"),
	age: Yup.number()
		.min(2, "Too Short!")

		.required("Required"),
	nationality: Yup.string()
		.min(4, "Too Short!")
		.max(16, "Too Long!")
		.required("Required"),
	passportNumber: Yup.number()
		.min(7, "Too Short!")

		.required("Required"),
	sex: Yup.string().required("Required"),
});

export default function addData() {
	const [searchInput, setSearchInput] = useState("");

	const router = useRouter();

	const addUserData = async (values) => {
		try {
			const response = await fetch("http://localhost:3005/patient/addData", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			const result = await response.json();
			console.log("Post response:", result);
			if (result) {
				router.push("/");
			}
		} catch (error) {
			console.error("Error posting data:", error);
		}
	};
	return (
		<div className="flex w-5/6 justify-center  m-auto mt-4">
			<div className="flex flex-col w-full sm:w-3/4 md:w-3/4 lg:w-96  justify-center ">
				<Navbar
					searchInput={searchInput}
					onSearchInputChange={setSearchInput}
				/>
				<h1 className="font-bold text-xl mt-12   md:text-2xl text-center">
					add user data
				</h1>

				<Formik
					initialValues={{
						fullName: "",
						phoneNumber: "",
						age: "",
						nationality: "",
						passportNumber: "",
						sex: "",
					}}
					validationSchema={SignupSchema}
					onSubmit={(values) => {
						// same shape as initial values
						addUserData(values);
					}}
				>
					{({ errors, touched }) => (
						<Form className="w-full flex flex-col justify-center mx-auto mt-5">
							<label
								htmlFor="fullName"
								className="block text-sm font-medium leading-6 text-gray-900 "
							>
								full name
							</label>
							<Field
								name="fullName"
								type="text"
								className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
							/>
							{errors.fullName && touched.fullName ? (
								<div className="text-red-500">{errors.fullName}</div>
							) : null}
							<label
								htmlFor="phoneNumber"
								className="block text-sm font-medium leading-6 text-gray-900 mt-2"
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
								htmlFor="age"
								className="block text-sm font-medium leading-6 text-gray-900 mt-2"
							>
								Age
							</label>
							<Field
								name="age"
								type="text"
								className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
							/>
							{errors.age && touched.age ? (
								<div className="text-red-500">{errors.age}</div>
							) : null}

							<label
								htmlFor="nationality"
								className="block text-sm font-medium leading-6 text-gray-900 mt-2"
							>
								Nationality
							</label>
							<Field
								name="nationality"
								type="text"
								className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
							/>
							{errors.nationality && touched.nationality ? (
								<div className="text-red-500">{errors.nationality}</div>
							) : null}

							<label
								htmlFor="passportNumber"
								className="block text-sm font-medium leading-6 text-gray-900 mt-2"
							>
								Passport Number
							</label>
							<Field
								name="passportNumber"
								type="text"
								className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
							/>
							{errors.passportNumber && touched.passportNumber ? (
								<div className="text-red-500">{errors.passportNumber}</div>
							) : null}
							<label
								htmlFor="sex"
								className="block text-sm font-medium leading-6 text-gray-900 mt-2"
							>
								Sex
							</label>
							<Field
								name="sex"
								type="text"
								className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
							/>
							{errors.sex && touched.sex ? (
								<div className="text-red-500">{errors.sex}</div>
							) : null}

							<button
								type="submit"
								className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-600"
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
