import {Box, Button, Divider, Typography, ButtonGroup} from "@mui/material";

export function Project1() {
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
				color={"#707070"}
				sx={{
					marginY: '10px',
					width: '50%',
				}}
			/>
			<Typography variant={"body1"}
			>
				This is an website/app that was made together with a team of 4 people. <br/>
				The website/app is a platform for borrowing and lending items. <br/>
				We used React, MaterialUI, .NET, and SQL.
			</Typography>

			<ButtonGroup variant={"contained"}
			             sx={{
							 paddingY:"10px",
			             }}

			>
				<Button>
					Visit Website
				</Button>
				<Button>
					See on GitHub
				</Button>
			</ButtonGroup>
		</Box>
	);
}