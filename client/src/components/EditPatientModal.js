import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const style = {
	// position: "absolute",
	// top: "50%",
	// left: "50%",
	// overflow: "scroll",
	// transform: "translate(-50%, -50%)",
	// width: 400,
	// bgcolor: "background.paper",
	// border: "2px solid #000",
	// boxShadow: 24,
	// p: 4,
	position: "absolute",
	top: "50%",
	left: "50%",
	p: 4,

	overflow: "scroll",
	transform: "translate(-50%, -50%)",
	height: "100%",
	display: "block",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function EditPatientModal(props) {
	// const handleOpen = () => props.setOpen(true);
	// const handleClose = () => setOpen(false);

	return (
		<div>
			<Button
				variant="outlined"
				size="small"
				onClick={() => props.setOpen(true)}
			>
				<EditIcon />
				<p className="p-1">Edit Details</p>
			</Button>
			<Modal
				open={props.open}
				onClose={() => props.setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div className="flex w-5/6 justify-center  m-auto ">
						<div className="flex flex-col w-full sm:w-3/4 md:w-3/4 lg:w-96  justify-center ">
							<h1 className="font-bold text-xl    md:text-2xl text-center">
								Edit Details
							</h1>

							<Formik
								initialValues={{
									userId: props.data.userId,
									fullName: props.data.fullName,
									age: props.data.age,
									sex: props.data.sex,
									passportNumber: props.data.passportNumber,
									nationality: props.data.nationality,
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
											htmlFor="userId"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											User Id
										</label>
										<Field
											disabled
											name="userId"
											type="text"
											className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
										/>

										<label
											htmlFor="fullName"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Full Name
										</label>
										<Field
											name="fullName"
											type="text"
											className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
										/>

										<label
											htmlFor="age"
											className="block text-sm font-medium leading-6 text-gray-900 mt-5"
										>
											Age
										</label>
										<Field
											name="age"
											type="text"
											className="block mt-2  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
										/>
										<label
											htmlFor="sex"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Sex
										</label>
										<Field
											name="sex"
											type="text"
											className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
										/>
										<label
											htmlFor="passportNumber"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Passport Number
										</label>
										<Field
											name="passportNumber"
											type="text"
											className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
										/>
										<label
											htmlFor="nationality"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Nationality
										</label>
										<Field
											name="nationality"
											type="text"
											className="block mt-2 w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 focus:outline-none"
										/>

										<button
											type="submit"
											className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700"
										>
											Edit
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
				</Box>
			</Modal>
		</div>
	);
}
