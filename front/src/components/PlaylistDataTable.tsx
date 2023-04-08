import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 60 },
	{ field: "song", headerName: "song", width: 210 },
	{ field: "artist", headerName: "artist", width: 150 },
	{ field: "album", headerName: "album", width: 210 },
	{
		field: "year",
		headerName: "year",
		type: "string",
		width: 100,
	},
];

// temporary dummy data
const rows = [
	{
		id: 1,
		song: "SUPERNØVA (feat. Marcus Bischoff of Heaven Shall Burn)",
		artist: "Ghøstkid",
		album: "SUPERNØVA (feat. Marcus Bischoff of Heaven Shall Burn) - Single",
		year: "2023",
	},
	{
		id: 2,
		song: "Ghosts (feat. Rudi Schwarzer)",
		artist: "setyøursails",
		album: "Nightfall",
		year: "2022",
	},
	{
		id: 3,
		song: "Dinner",
		artist: "Unprocessed",
		album: "Boy Without A Gun",
		year: "2022",
	},
	{
		id: 4,
		song: "Ablaze - New Mix",
		artist: "Siamese",
		album: "Shameless",
		year: "2018",
	},
	{
		id: 5,
		song: "Of the Abyss",
		artist: "Lorna Shore ",
		album: "..And I Return To Nothingness",
		year: "2021",
	},
];

export default function PlaylistDataTable() {
	return (
		<div style={{ height: 500 }}>
			<DataGrid
				rowHeight={35}
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
				}}
				pageSizeOptions={[10]}
				sx={{
					padding: 2,
					background: "white",
				}}
			/>
		</div>
	);
}
