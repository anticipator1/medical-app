import React from "react";
import Link from "next/link";

export default function ListUsers({ filteredPatients }) {
	return (
		<div className="w-full border-2 border-blue-300 mt-14">
			<div className="flex justify-between m-4 p-2 border-blue-100 border-2">
				<h1 className="w-1/6 text-xl font-serif font-bold">Test ID</h1>
				<h1 className="w-1/4 text-xl font-serif font-bold">Full Name</h1>
				<h1 className="w-1/4 text-xl font-serif font-bold">Sex</h1>
				<h1 className="w-1/4 text-xl font-serif font-bold">Age</h1>
				<h1 className="w-24 text-xl font-serif font-bold"></h1>
			</div>
			{/* {patients.length > 0 ? (
					patients.map((item) => (
						<div
							key={item._id}
							className="flex flex-row justify-between m-4 p-2 border-blue-100 border-b-2 text-lg"
						>
							<p className="w-1/6">{item.userId}</p>
							<p className="w-1/4">{item.fullName}</p>
							<p className="w-1/4">{item.sex}</p>
							<p className="w-1/4">{item.age}</p>
						</div>
					))
				) : (
					<p>Loading....</p>
				)} */}
			{filteredPatients.length > 0 ? (
				filteredPatients.map((item) => (
					<div
						key={item._id}
						className="flex flex-row justify-between m-4 p-2 border-blue-100 border-b-2 text-lg"
					>
						<p className="w-1/6">{item.userId}</p>
						<Link
							href={`/medical/detail/${item._id}`}
							className="w-1/4 hover:text-indigo-600 hover:underline"
						>
							<p>{item.fullName}</p>
						</Link>
						<p className="w-1/4">{item.sex}</p>
						<p className="w-1/4">{item.age}</p>
						<Link
							href="/medical/detail"
							className="text-indigo-600 underline w-24
							"
						>
							<p className=" text-xl font-serif font-bold">details</p>
						</Link>
					</div>
				))
			) : (
				<p>Loading....</p>
			)}
		</div>
	);
}
