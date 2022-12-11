import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Input,
	Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import ColormodeToggle from "@/colormodeToggle";

const Home: NextPage = () => {
	const [data, setData] = useState({
		name: "",
		price: "",
		img: "",
	});

	const add = () => {
		fetch("/api/createProduct", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(({ data }) => console.log(data));
	};

	return (
		<Container maxW="4xl" p={4}>
			<Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
				<Heading>Add product</Heading>

				<Link href="/">
					<Button colorScheme="teal" variant="outline">
						Return to home
					</Button>
				</Link>

				<Flex justifyContent="flex-end">
					<ColormodeToggle />
				</Flex>
			</Grid>

			{["name", "price", "img"].map((item) => (
				<Box key={item}>
					<Text fontSize="xl">
						{item.replace(/^\w/, (c) => c.toUpperCase())}
					</Text>

					<Input
						placeholder={item}
						value={
							// @ts-ignore
							data[item]
						}
						onChange={(e) =>
							setData({ ...data, [item]: e.target.value })
						}
						mb={4}
					/>
				</Box>
			))}

			<Button colorScheme="teal" onClick={add}>
				Add
			</Button>
		</Container>
	);
};

export default Home;
