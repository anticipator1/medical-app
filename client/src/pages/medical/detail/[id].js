import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import EditPatientModal from "@/components/EditPatientModal";
import { Formik, Form, Field } from "formik";
import { IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";

export default function patientDetail() {
	const router = useRouter();
	const [showLabForm, setShowLabForm] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [data, setData] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [loading, setLoading] = useState(false);
	const { userDetails, isLoggedIn } = useSelector((state) => state.user);

	if (!isLoggedIn) {
		router.replace("/medical/login");
	}

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

	const editData = async (values) => {
		try {
			const response = await fetch(
				"http://localhost:3005/patient/" + router.query.id,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				}
			);

			const result = await response.json();
			console.log("Post response:", result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex w-full flex-col items-center">
			<Navbar searchInput={searchInput} onSearchInputChange={setSearchInput} />
			<div className="w-full max-w-md p-6 mx-auto mt-14 bg-white rounded-lg shadow-md ">
				<h1 className="text-2xl font-semibold text-center">User Details</h1>
				<div className="mt-6 space-y-2">
					{data && (
						<>
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
						</>
					)}
					<EditPatientModal open={open} setOpen={setOpen} data={data} />
					<IconButton
						className={`mt-4 rounded-md focus:outline-none ${
							showLabForm
								? "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-0"
								: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:ring-0"
						}`}
						onClick={() => setShowLabForm(!showLabForm)}
					>
						{showLabForm ? <Remove /> : <Add />}
						<Typography variant="button" className="ml-2">
							{showLabForm ? "Hide Lab Form" : "Add Lab Data"}
						</Typography>
					</IconButton>
					{showLabForm && (
						<div>
							<Formik
								initialValues={{
									height: data.height,
									weight: data.weight,
									temperature: data.temperature,
									jaundice: data.jaundice,
									hernia: data.hernia,
									cardioVascular: data.cardioVascular,
									// Add more fields here
								}}
								onSubmit={async (values, { setSubmitting }) => {
									//setSubmitting(true); // Set isSubmitting to true before the API call
									setLoading(true);
									await editData(values);
									setTimeout(() => {
										setLoading(false);
									}, 3000);
								}}
							>
								{({ isSubmitting }) => (
									<Form>
										<div className="mt-4">
											<label className="block text-gray-600 font-medium">
												Height:
											</label>
											<Field
												type="text"
												name="height"
												className="mt-1 px-4 py-2 border rounded-md w-full"
												placeholder="Enter height"
											/>
										</div>
										<div className="mt-4">
											<label className="block text-gray-600 font-medium">
												Weight:
											</label>
											<Field
												type="text"
												name="weight"
												className="mt-1 px-4 py-2 border rounded-md w-full"
												placeholder="Enter weight"
											/>
										</div>
										<div className="mt-4">
											<label className="block text-gray-600 font-medium">
												Temperature:
											</label>
											<Field
												type="text"
												name="temperature"
												className="mt-1 px-4 py-2 border rounded-md w-full"
												placeholder="Enter temperature"
											/>
										</div>
										<div className="mt-4">
											<label className="block text-gray-600 font-medium">
												jaundice:
											</label>
											<Field
												type="text"
												name="jaundice"
												className="mt-1 px-4 py-2 border rounded-md w-full"
												placeholder="Enter jaundice"
											/>
										</div>
										<div className="mt-4">
											<label className="block text-gray-600 font-medium">
												hernia:
											</label>
											<Field
												type="text"
												name="hernia"
												className="mt-1 px-4 py-2 border rounded-md w-full"
												placeholder="Enter hernia"
											/>
										</div>
										<div className="mt-4">
											<label className="block text-gray-600 font-medium">
												cardioVascular:
											</label>
											<Field
												type="text"
												name="cardioVascular"
												className="mt-1 px-4 py-2 border rounded-md w-full"
												placeholder="Enter cardioVascular"
											/>
										</div>

										<button
											type="submit"
											className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
											disabled={isSubmitting}
										>
											{loading ? (
												<div className="flex">
													<p>Submitting..</p>
													<CircularProgress color="success" size={25} />
												</div>
											) : (
												"Submit"
											)}
										</button>
									</Form>
								)}
							</Formik>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
