import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ListUsers from "@/components/ListUsers.js";
import { handleLogout } from "@/redux/reducerSlices/userSlice";
import Pagination from "@mui/material/Pagination";

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
	const [pageCount, setPageCount] = useState(1);
	const dispatch = useDispatch();

	if (!isLoggedIn) {
		router.replace("/medical/login");
	}

	const fetchPatients = async (limit = 2, page = 1) => {
		const response = await fetch(
			`http://localhost:3005/patients?page=${page}&limit=${limit}`
		);
		const data = await response.json();
		setPatients(data.patientData);
		setPageCount(Math.ceil(data.totalCount / limit));
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

	const handlePageChange = (e, page) => {
		fetchPatients(2, page);
	};

	return (
		<div className="flex w-full flex-col  justify-center">
			<Navbar searchInput={searchInput} onSearchInputChange={setSearchInput} />
			{/* <button className="mt-20" onClick={() => dispatch(handleLogout())}>
				sign out
			</button> */}
			<ListUsers filteredPatients={filteredPatients} />
			<Pagination
				className="p-4"
				onChange={handlePageChange}
				count={pageCount}
				variant="outlined"
				shape="rounded"
			/>
		</div>
	);
}
