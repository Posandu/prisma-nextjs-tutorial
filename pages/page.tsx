import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useDebouncedValue } from "@mantine/hooks";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import ColormodeToggle from "@/colormodeToggle";

const Home: NextPage = () => {
	const [value, setValue] = useState("");
	const [debouncedValue] = useDebouncedValue(value, 500);

	return (
		<Container maxW="4xl" p={4}>
			<Flex alignItems="center" justifyContent="space-between" mt={6}>
				<Heading>Page</Heading>
				<ColormodeToggle />
			</Flex>

			<Input
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<Text>Debounced Value: {debouncedValue}</Text>

			<Link href="/">
				<a>Home</a>
			</Link>
		</Container>
	);
};

export default Home;
