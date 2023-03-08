import { Box } from "@chakra-ui/react";

import DataSelection from "./features/DataSelection";
import ElectionData from "./features/ElectionData";
import Footer from "./features/Footer";
import Header from "./features/Header";
import NigerianMap from "./features/NigerianMap";
import { PageContainerProvider } from "./features/PageContainer/context";

function App() {
	return (
		<Box bg="brand.light" w="100vw" h="100vh" overflowX="hidden">
			<PageContainerProvider>
				<>
					<Header />
					<DataSelection />
					<NigerianMap />
					<ElectionData />
				</>
			</PageContainerProvider>
			<Footer />
		</Box>
	);
}

export default App;
