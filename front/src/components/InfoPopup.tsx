import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ElementIds } from "../common/elementIds";

interface PopupProps {
	handlePopupClose: () => void;
	isOpen: boolean;
	anchorEl: Element | null;
	text?: string;
}

const InfoPopup = (props: PopupProps): JSX.Element => {
	return (
		<div>
			<Popover
				id={ElementIds.Popups.InfoPopup}
				sx={{
					pointerEvents: "none",
					margin: 2,
				}}
				open={props.isOpen}
				anchorEl={props.anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				onClose={props.handlePopupClose}
				disableRestoreFocus
			>
				<Typography sx={{ p: 1 }}>{props.text ? props.text : "AA"}</Typography>
			</Popover>
		</div>
	);
};

export { InfoPopup };
