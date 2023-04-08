import React from "react";
import { Container, Button, Stack, Grid, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ElementIds } from "../common/elementIds";
import { Texts } from "../common/texts";
import { DefaultButton } from "./Buttons";
import { ButtonStyles, Icons } from "../common/styles";
import { InfoPopup } from "./InfoPopup";
import { InfoDialog } from "./InfoDialog";
import { DataDialog, SmallDialog } from "./DataDialog";

interface SmallButtonContainerProps {
	handleOpen: () => void;
	handleClose: () => void;
	isOpen: boolean;
	infoDialogTitle: string;
	infoDialogContent: string;
}

const SmallButtonContainer = (
	props: SmallButtonContainerProps,
): JSX.Element => {
	const [open, setOpen] = React.useState(false);

	const openInfo = () => {
		setOpen(true);
	};

	const closeInfo = () => {
		setOpen(false);
	};

	return (
		<Container>
			<Button
				variant="text"
				onClick={openInfo}
				endIcon={<InfoOutlinedIcon />}
				sx={{
					color: "white",
				}}
			>
				{props.infoDialogTitle}
			</Button>
			<Stack direction="row" spacing={2}>
				<DefaultButton
					id={ElementIds.Buttons.CustomSpotify}
					handleClick={props.handleOpen}
					buttonStyle={ButtonStyles.SpotifyButtonColors}
					iconStyle={Icons.SpotifyIcon}
				></DefaultButton>
				<DefaultButton
					id={ElementIds.Buttons.CustomLastFm}
					handleClick={props.handleOpen}
					buttonStyle={ButtonStyles.LastFmButtonColors}
					iconStyle={Icons.LastFmIcon}
				></DefaultButton>
			</Stack>
			<InfoDialog
				dialogTitle={props.infoDialogTitle}
				dialogContent={props.infoDialogContent}
				handleClose={closeInfo}
				isOpen={open}
			></InfoDialog>
			<SmallDialog
				handleClose={props.handleClose}
				isOpen={props.isOpen}
				titleText={Texts.Generic.PlaylistDialog}
				handleOk={props.handleClose}
				handleCancel={props.handleClose}
			></SmallDialog>
		</Container>
	);
};

const ButtonContainer = (): JSX.Element => {
	const setPopupText = (elementId: string) => {
		switch (elementId) {
			case ElementIds.Buttons.QuickSpotify: {
				return Texts.InfoPopup.QuickSpotify;
			}
			case ElementIds.Buttons.CustomSpotify: {
				return Texts.InfoPopup.CustomSpotify;
			}
			case ElementIds.Buttons.QuickLastFm: {
				return Texts.InfoPopup.QuickLastFm;
			}
			case ElementIds.Buttons.CustomLastFm: {
				return Texts.InfoPopup.CustomLastFm;
			}
		}
	};

	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const [text, setText] = React.useState<string | undefined>("");
	const [open, setOpen] = React.useState(false);

	const handlePopupOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setText(setPopupText(event.currentTarget.id));
	};

	const handlePopupClose = () => {
		setAnchorEl(null);
	};

	const handleDialogClickOpen = () => {
		setOpen(true);
	};
	const handleDialogClose = () => {
		setOpen(false);
	};

	const isOpen = Boolean(anchorEl);

	return (
		<Box width="80%" margin="auto">
			<Grid direction="row">
				<Grid item padding={2}>
					<DefaultButton
						id={ElementIds.Buttons.QuickSpotify}
						handleClick={handleDialogClickOpen}
						handlePopupClose={handlePopupClose}
						handlePopupOpen={handlePopupOpen}
						buttonStyle={ButtonStyles.SpotifyButtonColors}
						iconStyle={Icons.SpotifyIcon}
						buttonText={Texts.Generic.QuickPlaylist}
					></DefaultButton>
				</Grid>
				<Grid item padding={2}>
					<DefaultButton
						id={ElementIds.Buttons.CustomSpotify}
						handleClick={handleDialogClickOpen}
						handlePopupClose={handlePopupClose}
						handlePopupOpen={handlePopupOpen}
						buttonStyle={ButtonStyles.SpotifyButtonColors}
						iconStyle={Icons.SpotifyIcon}
						buttonText={Texts.Generic.CustomPlaylist}
					></DefaultButton>
				</Grid>
				<Grid item padding={2}>
					<DefaultButton
						id={ElementIds.Buttons.QuickLastFm}
						handleClick={handleDialogClickOpen}
						handlePopupClose={handlePopupClose}
						handlePopupOpen={handlePopupOpen}
						buttonStyle={ButtonStyles.LastFmButtonColors}
						iconStyle={Icons.LastFmIcon}
						buttonText={Texts.Generic.QuickPlaylist}
					></DefaultButton>
				</Grid>
				<Grid item padding={2}>
					<DefaultButton
						id={ElementIds.Buttons.CustomLastFm}
						handleClick={handleDialogClickOpen}
						handlePopupClose={handlePopupClose}
						handlePopupOpen={handlePopupOpen}
						buttonStyle={ButtonStyles.LastFmButtonColors}
						iconStyle={Icons.LastFmIcon}
						buttonText={Texts.Generic.CustomPlaylist}
					></DefaultButton>
				</Grid>
				<Grid item padding={2}>
					<DataDialog
						handleClose={handleDialogClose}
						isOpen={open}
						titleText={Texts.Generic.PlaylistDialog}
					></DataDialog>
				</Grid>
			</Grid>
			<Grid item>
				<InfoPopup
					handlePopupClose={handlePopupClose}
					isOpen={isOpen}
					anchorEl={anchorEl}
					text={text}
				></InfoPopup>
			</Grid>
		</Box>
	);
};

export { SmallButtonContainer, ButtonContainer };
