import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { ElementIds } from "../common/elementIds";

interface DialogProps {
	dialogTitle: string;
	dialogContent: string;
	handleClose: () => void;
	isOpen: boolean;
}

const InfoDialog = (props: DialogProps): JSX.Element => {
	return (
		<div>
			<Dialog
				id={ElementIds.Dialogs.InfoDialog}
				open={props.isOpen}
				onClose={props.handleClose}
			>
				<DialogTitle>{props.dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>{props.dialogContent}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.handleClose}>
						<CloseIcon />
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export { InfoDialog };
