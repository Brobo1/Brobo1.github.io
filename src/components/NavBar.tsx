import {Box, Divider, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";


export function NavBar() {
	const nav = useNavigate();
	const loc = useLocation();

	const style = {
		padding: '10px',
		marginLeft: '20px',
		transition: ' 0.1s ease',
		'&:hover': {
			color: '#000000',
			transform: 'scale(1.2)',
		}
	};
	const style2 = {
		padding: '0',
		margin: '5px',
		fontWeight: 100,
	};


	return (
		<>
			<Divider orientation={"vertical"}
			         color={"#707070"}
			         variant="middle"
			         sx={{
				         height: '5em',
				         marginTop: '80px',

			         }}
			/>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				paddingX: '10px',
			}}
			>

				<Typography variant={"h5"}
				            sx={style2}
				>
					Projects
				</Typography>
				<Divider color={"#707070"}/>


				<Typography sx={style}
				            onClick={() => nav('/project1')}
				>
					Borro
				</Typography>

				<Typography sx={style}
				            onClick={() => nav('/project2')}
				>
					Second
				</Typography>

				<Typography sx={style}
				            onClick={() => nav('/project3')}
				>
					Third
				</Typography>

			</Box>
		</>
	);
}