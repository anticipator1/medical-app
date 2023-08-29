import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	Image,
	StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		fontFamily: "Helvetica",
		padding: 20,
	},
	logo: {
		width: 100,
		height: 100,
	},
	title: {
		fontSize: 24,
		marginBottom: 10,
	},
	content: {
		fontSize: 16,
	},
});

const getCurrentDate = () => {
	const currentDate = new Date();
	return currentDate.toLocaleDateString();
};

const Report = () => (
	<Document>
		<Page style={styles.page}>
			<View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-evenly",
					}}
				>
					<Image
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04zpL4R7AWa1SQZNLMdkcO_1ksnOXRWW3NlzTBvKaxg&s"
						style={styles.logo}
					/>
					<Text style={styles.title}>XYZ Medical Co ltd</Text>
					<Text style={styles.content}> Date: {getCurrentDate()}</Text>
				</View>

				<Text>{`Company Name: medical`}</Text>
				<Text>{`Report Date: 2-74-76`}</Text>
				{/* Additional report content */}
			</View>
		</Page>
	</Document>
);

export default Report;
