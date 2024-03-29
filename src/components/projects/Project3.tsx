import {Box, Divider, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function Project3() {
	return (
		<Box>
			<Typography variant={"h3"}
			            sx={{

				            fontWeight: 300,
			            }}
			>
				3rd Project
			</Typography>
			<Divider
				color={"#707070"}
				sx={{
					marginY : '10px',
					width: '50%',
				}}
			/>
			<Typography variant={"body1"}
			>
				This is where I will put my second project to showcase.
			</Typography>
		</Box>
	);
}