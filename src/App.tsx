import { Box, Container } from '@chakra-ui/react';

import DataSelection from "./features/DataSelection";
import ElectionData from "./features/ElectionData";
import Header from "./features/Header";
import NigerianMap from "./features/NigerianMap";

function App() {
	return (
		<Box bg="brand.light" w="100vw" h="100vh" overflowX="hidden">
			<Container>
				<Header />
				<DataSelection />
				<NigerianMap />
				<ElectionData />
			</Container>
			{/* <Footer /> */}
		</Box>
	);
}

export default App;
