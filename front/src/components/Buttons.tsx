import { Button, IconButton } from "@mui/material";
import { ElementIds } from "../common/elementIds";
import useBreakpoints from "../utils/Breakpoints";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface IconProps {
	src: string;
	style: object;
}

interface ButtonStyle {
	backgroundColor: string;
	hoverColor: string;
	size?: "large" | "medium" | "small";
}

interface IconButtonProps {
	id: string;
	hasPopup?: "false" | "true" | boolean;
	isPopupOpen?: string;
	handlePopupOpen?: (event: React.MouseEvent<HTMLElement>) => void;
	handlePopupClose?: () => void;
	handleClick?: () => void;
}

interface ButtonProps {
	buttonStyle: ButtonStyle;
	iconStyle: IconProps;
	id: string;
	buttonText?: string;
	buttonVariant?: "text" | "contained" | "outlined";
	fontColor?: string;
	startIcon?: HTMLImageElement;
	width?: string;
	height?: string;
	hasPopup?: boolean;
	isPopupOpen?: string;
	handleClick: () => void;
	handlePopupOpen?: (event: React.MouseEvent<HTMLElement>) => void;
	handlePopupClose?: () => void;
}

const InfoIconButton = (props: IconButtonProps): JSX.Element => {
	return (
		<IconButton
			aria-label="info"
			sx={{
				id: props.id,
				color: "white",
				width: "4rem",
			}}
		>
			<InfoOutlinedIcon />
		</IconButton>
	);
};

const SmallIconButton = (props: ButtonProps): JSX.Element => {
	return (
		<Button
			disableRipple
			startIcon={
				<img alt="" src={props.iconStyle.src} style={props.iconStyle.style} />
			}
			onClick={props.handleClick}
			sx={{
				id: props.id,
				width: props.width ? props.width : "4rem",
				height: props.height ? props.height : "4rem",
				color: props.fontColor ? props.fontColor : "white",
				background: props.buttonStyle.backgroundColor,
				borderRadius: "12px",
				padding: 1.5,
				paddingLeft: 2.5,
				boxShadow: 8,
				":hover": {
					boxShadow: `0 0 0 0.1rem ${props.buttonStyle.hoverColor}`,
					background: props.buttonStyle.hoverColor,
				},
			}}
		></Button>
	);
};

const IconTextButton = (props: ButtonProps): JSX.Element => {
	return (
		<Button
			variant={props.buttonVariant ? props.buttonVariant : "contained"}
			size={props.buttonStyle.size ? props.buttonStyle.size : "medium"}
			id={props.id}
			startIcon={
				<img alt="" src={props.iconStyle.src} style={props.iconStyle.style} />
			}
			aria-owns={props.isPopupOpen ? ElementIds.Popups.InfoPopup : undefined}
			aria-haspopup={props.hasPopup ? props.hasPopup : "false"}
			onMouseEnter={props.handlePopupOpen}
			onMouseLeave={props.handlePopupClose}
			onClick={props.handleClick}
			sx={{
				width: props.width ? props.width : "17rem",
				color: props.fontColor ? props.fontColor : "white",
				fontSize: "1.1em",
				background: props.buttonStyle.backgroundColor,
				borderRadius: "12px",
				height: props.height ? props.height : "4rem",
				borderColor: props.buttonStyle.backgroundColor,
				boxShadow: 8,
				justifyContent: "start",

				":hover": {
					border: `${props.buttonStyle.hoverColor} solid 1px`,
					fontWeight: 600,
					background: props.buttonStyle.hoverColor,
					boxShadow: 12,
				},
			}}
		>
			{props.buttonText}
		</Button>
	);
};

const DefaultButton = (props: ButtonProps): JSX.Element => {
	const { isSm } = useBreakpoints();
	return isSm ? (
		<SmallIconButton
			id={props.id}
			handleClick={props.handleClick}
			buttonStyle={props.buttonStyle}
			iconStyle={props.iconStyle}
		></SmallIconButton>
	) : (
		<IconTextButton
			id={props.id}
			handleClick={props.handleClick}
			handlePopupClose={props.handlePopupClose}
			handlePopupOpen={props.handlePopupOpen}
			buttonStyle={props.buttonStyle}
			iconStyle={props.iconStyle}
			buttonText={props.buttonText}
		></IconTextButton>
	);
};

export { DefaultButton, InfoIconButton };
