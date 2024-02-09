import Box from "@mui/material/Box/Box";
import {Divider, Typography} from "@mui/material";

export function Home() {
	return (
		<Box>

			<Typography variant={"h3"}
			            sx={{
				            padding: '0',
				            fontWeight: 300,
			            }}
			>
				Welcome
			</Typography>

			<Divider
				color={"#707070"}
				sx={{
					marginY: '10px',
					width: '50%',
				}}
			/>

			<Typography variant={"body1"}
			>
				My name is Arman Ahmadzadeh and I'm a fullstack developer
				who is passionate about technology and programming.
				{}
			</Typography>
		</Box>

	);
}