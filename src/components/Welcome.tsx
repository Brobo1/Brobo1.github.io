import {Typography} from "@mui/material";

export function Welcome() {
	return (
		<>
			<Typography variant={"h2"}
			            sx={{
				            padding: '10px',
				            fontWeight: 300,
			            }}
			>
				Welcome
			</Typography>

			<Typography variant={"body1"}
			>
				My name is Arman Ahmadzadeh and I'm a fullstack developer
				who is passionate about technology and programming.
				I'm currently
			</Typography>
		</>
	);
}