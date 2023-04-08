import { Styles } from "./common/styles";
import { Box } from "@mui/material";
import { GeneratePlaylistView } from "./components/GeneratePlaylistView";

function App() {
	return (
		<Box
			height="100vh"
			sx={{
				background: `linear-gradient(to right, ${Styles.Colors.darkGrey} 0%, #19261C 30%, ${Styles.Colors.mediumGrey})`,
			}}
		>
			<header className="App-header"></header>
			<GeneratePlaylistView></GeneratePlaylistView>
		</Box>
	);
}

export default App;
