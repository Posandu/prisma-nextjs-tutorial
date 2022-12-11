import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import ColormodeToggle from "@/colormodeToggle";

const Home: NextPage = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("/api/getProducts")
			.then((res) => res.json())
			.then(({ data }) => setItems(data));
	}, []);

	return (
		<Container maxW="4xl" p={4}>
			<Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
				<Heading>Home</Heading>

				<Link href="/add">
					<Button colorScheme="teal" variant="outline">
						Add product
					</Button>
				</Link>

				<Flex justifyContent="flex-end">
					<ColormodeToggle />
				</Flex>
			</Grid>

			<Grid templateColumns="repeat(3, 1fr)" gap={4}>
				{items &&
					items.map((item: any) => (
						<Box key={item.id} p={4} shadow="md" borderWidth="1px">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={item.img} alt={item.name} />
							<Text fontSize="xl">{item.name}</Text>
							<Text fontSize="lg">{item.price}</Text>
							<Button colorScheme="teal" variant="outline">
								Add to cart
							</Button>
						</Box>
					))}

				{!items.length && (
					<Box p={4} shadow="md" borderWidth="1px">
						<Text fontSize="xl">No items found</Text>
					</Box>
				)}
			</Grid>
		</Container>
	);
};

export default Home;
