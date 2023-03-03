import { Box, Container } from '@chakra-ui/react';

import DataSelection from './features/DataSelection';
import Header from './features/Header';

function App() {
	return (
		<Box bg="brand.light" w="100vw" h="100vh" overflowX="hidden">
			<Container maxW={['100%', '100%', 'container.md', 'container.lg', 'container.xl']}>
				<Header />
                <DataSelection />
			</Container>
		</Box>
	);
}

export default App;
