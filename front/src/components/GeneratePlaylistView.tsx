import { Stack, Typography } from "@mui/material";
import React from "react";
import { Texts } from "../common/texts";
import { SmallButtonContainer, ButtonContainer } from "./ButtonContainer";
import useBreakpoints from "../utils/Breakpoints";

const GeneratePlaylistView = (): JSX.Element => {
	const [open, setOpen] = React.useState(false);

	const openQuickPlaylistDialog = () => {
		setOpen(true);
	};

	const openCustomPlaylistDialog = () => {
		setOpen(true);
	};

	const closeCustomPlaylistDialog = () => {
		setOpen(false);
	};
	const closeQuickPlaylistDialog = () => {
		setOpen(false);
	};

	const { isSm } = useBreakpoints();
	return isSm ? (
		<Stack paddingTop={5} alignItems="center" spacing={2}>
			<Stack spacing={2}>
				<Typography color="white">On Repeat But Better</Typography>
				<Typography color="white">LOGO GOES HERE</Typography>
				<SmallButtonContainer
					handleOpen={openQuickPlaylistDialog}
					handleClose={closeQuickPlaylistDialog}
					infoDialogTitle={Texts.Generic.QuickPlaylist}
					isOpen={open}
					infoDialogContent={Texts.InfoDialog.QuickPlaylist}
				></SmallButtonContainer>
				<SmallButtonContainer
					handleOpen={openCustomPlaylistDialog}
					handleClose={closeCustomPlaylistDialog}
					infoDialogTitle={Texts.Generic.CustomPlaylist}
					isOpen={open}
					infoDialogContent={Texts.InfoDialog.CustomPlaylist}
				></SmallButtonContainer>
			</Stack>
		</Stack>
	) : (
		<ButtonContainer></ButtonContainer>
	);
};

export { GeneratePlaylistView };
