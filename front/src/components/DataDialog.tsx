import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Button, DialogActions } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlaylistDataTable from "./PlaylistDataTable";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
	"& .MuiDialog-container": {
		"& .MuiPaper-root": {
			width: "100%",
			maxWidth: "800px",
		},
	},
}));

export interface TitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}
export interface DialogProps {
	handleClose: () => void;
	isOpen: boolean;
	titleText: string;
	handleOk?: () => void;
	handleCancel?: () => void;
}

function BootstrapDialogTitle(props: TitleProps) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

const DataDialog = (props: DialogProps): JSX.Element => {
	return (
		<div>
			<BootstrapDialog
				onClose={props.handleClose}
				aria-labelledby="customized-dialog-title"
				open={props.isOpen}
			>
				<BootstrapDialogTitle
					id="customized-dialog-title"
					onClose={props.handleClose}
				>
					{props.titleText}
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<PlaylistDataTable></PlaylistDataTable>
				</DialogContent>
			</BootstrapDialog>
		</div>
	);
};

const SmallDialog = (props: DialogProps): JSX.Element => {
	return (
		<Dialog open={props.isOpen}>
			<DialogTitle>{props.titleText}</DialogTitle>
			<DialogContent dividers>Lorem ipsum dolor sit amet</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={props.handleCancel}>
					Cancel
				</Button>
				<Button onClick={props.handleOk}>Ok</Button>
			</DialogActions>
		</Dialog>
	);
};

export { SmallDialog, DataDialog };
