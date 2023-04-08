const Styles = {
	Colors: {
		black: "#191919",
		darkGrey: "#1E1E1E",
		mediumGrey: "#333333",
		lightGrey: "#F4E8C1",
		darkGreen: "#19261C",
		lightBlue: "#536184",
		spotifyGreen: "#1DB954",
		lighterSpotifyGreen: "#1FC75A",
		lastFmRed: "#D31F27",
		lighterLastFmRed: "#DE212B",
	},
};

const ButtonStyles = {
	SpotifyButtonColors: {
		backgroundColor: Styles.Colors.spotifyGreen,
		hoverColor: Styles.Colors.lighterSpotifyGreen,
	},
	LastFmButtonColors: {
		backgroundColor: Styles.Colors.lastFmRed,
		hoverColor: Styles.Colors.lighterLastFmRed,
	},
};
const Icons = {
	SpotifyIcon: {
		src: require("../assets/spotifyIconWhite.png"),
		style: {
			width: "2rem",
			height: "2rem",
			paddingRight: "0.5em",
			paddingLeft: "0.6em",
		},
	},
	LastFmIcon: {
		src: require("../assets/lastFmIcon.png"),
		style: {
			width: "2.5rem",
			height: "1.4rem",
			paddingRight: "0.5em",
			paddingLeft: "0.5em",
		},
	},
	Icons: {
		lastFmIcon: require("../assets/lastFmIcon.png"),
		spotifyIcon: require("../assets/spotifyIconWhite.png"),
	},
};
export { Styles, ButtonStyles, Icons };
