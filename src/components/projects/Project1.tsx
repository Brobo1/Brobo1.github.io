import {Box, Divider, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function Project1() {
	const nav = useNavigate();
	return (
		<Box>
			<Typography variant={"h3"}
			            sx={{

				            fontWeight: 300,
			            }}
			>
				Borro
			</Typography>
			<Divider
				color={"#ffffff"}
				sx={{
					marginY : '10px',
					width: '50%',
				}}
			/>
			<Typography variant={"body1"}
			>
				This is an website/app that was made together with a team of 4 people. <br/>
				The website/app is a platform for borrowing and lending items. <br/>
				We used React, MaterialUI, .NET, and SQL.
			</Typography>
		</Box>
	);
}