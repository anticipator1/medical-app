import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ListUsers({ filteredPatients }) {
	return (
		<div className="w-full bg-white border border-blue-300 mt-14 rounded-lg shadow-lg">
			<div className="flex justify-between p-4 bg-indigo-100 border-b border-blue-200">
				<h1 className="w-1/6 text-lg font-semibold">Test ID</h1>
				<h1 className="w-1/4 text-lg font-semibold">Full Name</h1>
				<h1 className="w-1/4 text-lg font-semibold">Sex</h1>
				<h1 className="w-1/4 text-lg font-semibold">Age</h1>
				<h1 className="w-24 text-lg font-semibold"></h1>
			</div>

			{filteredPatients.length > 0 ? (
				filteredPatients.map((item) => (
					<div
						key={item._id}
						className="flex items-center justify-between p-4 border-b border-blue-100 text-lg hover:bg-blue-50"
					>
						<p className="w-1/6">{item.userId}</p>
						{/* <p className="w-1/6">
							<Image
								width={100}
								height={100}
								src={`http://localhost:3005/patient-image/${item._id}`}
							/>
						</p> */}
						<Link
							href={`/medical/detail/${item._id}`}
							className="w-1/4 hover:text-indigo-600 hover:underline"
						>
							<p>{item.fullName}</p>
						</Link>
						<p className="w-1/4">{item.sex}</p>
						<p className="w-1/4">{item.age}</p>
						<Link
							href={`/medical/detail/${item._id}`}
							className="text-indigo-600 underline w-24"
						>
							<p className="text-lg font-semibold">Details</p>
						</Link>
					</div>
				))
			) : (
				<p className="p-4 text-center">Loading....</p>
			)}
		</div>
	);
}
