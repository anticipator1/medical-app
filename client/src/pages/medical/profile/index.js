import React, { useState } from "react";
import EditUserModal from "@/components/EditUserModal";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "@/components/Navbar";
import Login from "../login";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";

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
			<div className="flex w-5/6 justify-center  m-auto mt-4">
				<div className="flex flex-col w-full sm:w-3/4 md:w-3/4 lg:w-96  justify-center ">
					<h1 className="font-bold text-xl mt-10   md:text-2xl text-center">
						Log in to your account
					</h1>
					<EditUserModal
						open={open}
						setOpen={setOpen}
						userDetails={userDetails}
					/>

					<Formik
						initialValues={{
							phoneNumber: "",
							password: "",
						}}
						//validationSchema={SignupSchema}
						onSubmit={(values) => {
							// same shape as initial values
							loginUser(values);
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

								<button
									type="submit"
									className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
								>
									Save
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
			{/* <div className="mt-20">
				<EditUserModal
					open={open}
					setOpen={setOpen}
					userDetails={userDetails}
				/>
				<Formik
					initialValues={{
						phoneNumber: "",
						password: "",
					}}
					//validationSchema={SignupSchema}
					onSubmit={(values) => {
						// same shape as initial values
						loginUser(values);
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

							<button
								type="submit"
								className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div> */}
		</div>
	);
}

export default Profile;
