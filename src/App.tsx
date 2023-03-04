import { Box, Container } from '@chakra-ui/react';

import Header from "./features/Header";

function App() {
	return (
		<Box bg="brand.light" w="100vw" h="100vh" overflowX="hidden">
			<Container>
				<Header />
				{/* <DataSelection />
				<NigerianMap />
				<ElectionData /> */}
			</Container>
			{/* <Footer /> */}
		</Box>
	);
}

export default App;
