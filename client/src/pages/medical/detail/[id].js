import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import EditPatientModal from "@/components/EditPatientModal";
import { Formik, Form, Field } from "formik";
import { IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import { PDFViewer } from "@react-pdf/renderer";
import Report from "@/components/Report";
import { BlobProvider } from "@react-pdf/renderer";

export default function patientDetail() {
	const router = useRouter();
	const [showLabForm, setShowLabForm] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [data, setData] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [loading, setLoading] = useState(false);
	const { userDetails, isLoggedIn } = useSelector((state) => state.user);
	const formRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [generate, setGenerate] = useState(false);

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
		console.log(data);
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

	const handleFormOpen = () => {
		setIsOpen(!isOpen);
	};

	const generateReport = () => {
		setGenerate(true);
	};

	return (
		<div className="flex w-full flex-col items-center">
			<Navbar searchInput={searchInput} onSearchInputChange={setSearchInput} />
			{/* <h1 className="text-2xl font-semibold text-center">User Details</h1> */}

			<div className="w-full p-6 mx-auto mt-14 bg-white rounded-lg shadow-md flex">
				<div className="mt-6 space-y-2  w-full ">
					{data && (
						<div className="flex flex-col md:flex-row justify-between ">
							<div className="w-full md:w-2/3 order-2 md:order-1 pl-1 md:pl-10">
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
								{console.log(JSON.stringify(data.status))}
								{data.status && data.status === "incomplete" ? (
									<div>
										<div className="flex items-center gap-6 mt-2  py-2 max-w-xl">
											<div>Add Medical </div>
											<svg
												className={`w-4 h-4 dark:text-black font-bold inline-block text-3xl hover:cursor-pointer ${
													isOpen ? "" : "rotate-180"
												} transition-transform duration-500 ease-in`}
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 14 8"
												onClick={handleFormOpen}
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
												/>
											</svg>
										</div>
										<Formik
											initialValues={{
												height: "",
												weight: "",
												temperature: "",
												jaundice: "",
												hernia: "",
												cardioVascular: "",
												status: "",
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
												<div
													ref={formRef}
													style={{
														maxHeight: `${
															isOpen
																? `${formRef.current.scrollHeight}px`
																: "0px"
														}`,
													}}
													className="overflow-hidden transition-all duration-700 ease-in-out"
												>
													<Form ref={formRef}>
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
														<div className="mt-4">
															<label className="block text-gray-600 font-medium">
																Select
															</label>
															<Field as="select" id="status" name="status">
																<option value="">Select an option...</option>
																<option value="fit">Fit</option>
																<option value="unfit">Unfit</option>
															</Field>
														</div>

														<button
															type="submit"
															className="mt-4 bg-blue-500 text-white px-4 py-2 	rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
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
												</div>
											)}
										</Formik>
									</div>
								) : (
									<div>
										<hr class="border-t-2 border-gray-300 mb-2 mt-2" />
										<div className="flex justify-between">
											<p className="text-gray-600 font-medium">Height:</p>
											<p>{data.height}</p>
										</div>

										<div className="flex justify-between">
											<p className="text-gray-600 font-medium">Weight:</p>
											<p>{data.weight}</p>
										</div>

										<div className="flex justify-between">
											<p className="text-gray-600 font-medium">Temperature:</p>
											<p>{data.temperature}</p>
										</div>
										<div className="flex justify-between">
											<p className="text-gray-600 font-medium">jaundice:</p>
											<p>{data.jaundice}</p>
										</div>
										<div className="flex justify-between">
											<p className="text-gray-600 font-medium">hernia:</p>
											<p>{data.hernia}</p>
										</div>
										<div className="flex justify-between">
											<p className="text-gray-600 font-medium">
												cardioVascular:
											</p>
											<p>{data.cardioVascular}</p>
										</div>
										<div className="flex justify-between">
											<p className="text-gray-600 font-medium">Status:</p>
											<p>{data.status}</p>
										</div>
										<button
											onClick={generateReport}
											className="mt-4 bg-blue-500 text-white px-4 py-2 	rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
										>
											{generate ? (
												<div className="flex">
													<p>Generating..</p>
													{/* <CircularProgress color="success" size={25} /> */}
												</div>
											) : (
												"Generate Report"
											)}
										</button>
										{generate && (
											<BlobProvider document={<Report />}>
												{({ blob, url, loading, error }) => {
													if (loading) {
														return "Generating PDF...";
													}
													if (url) {
														return (
															<div>
																<a
																	className="mt-4 bg-blue-500 text-white px-4 py-2 	rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
																	href={url}
																	target="_blank"
																	rel="noopener noreferrer"
																>
																	Download Report
																</a>
															</div>
														);
													}
													if (error) {
														return "An error occurred while generating the PDF.";
													}
												}}
											</BlobProvider>
										)}
									</div>
								)}
								{}
							</div>
							<div className="w-full md:1/3   order-1 md:order-2 ">
								{data._id ? (
									<div className="flex justify-end">
										<Image
											className="w-full h-48 object-contain"
											src={`http://localhost:3005/patient-image/${data._id}`}
											width={400}
											height={400}
											//quality={100}
											alt="image"
										/>
									</div>
								) : (
									"not loaded"
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
