import {Box, Divider, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";


export function NavBar() {
	const nav = useNavigate();
	const {pathname} = useLocation();

	const style = (path: string) => ({
		padding: '10px',
		marginLeft: '20px',
		transition: ' 0.1s ease',

		color: pathname === path ? '#e4e4e4' : '#7c7c7c',
		'&:hover': {
			color: '#ffffff',
			transform: 'scale(1.5)',
		}
	});
	const style2 = {
		padding: '0',
		margin: '0',
		fontWeight: 100,
		color: '#e4e4e4',
	};


	return (
		<>

			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				backgroundColor: '#313131',
				borderRadius: '5px',
				paddingX: '20px',
				paddingY:"10px",

				height: '100%',
				width: '170px',
				boxShadow: 1,
			}}
			>

				<Typography variant={"h5"}
				            sx={style2}
				>
					Projects
				</Typography>

				<Divider color={"#707070"}/>

				<Typography sx={style('/project1')}
				            onClick={() => nav('/project1')}
				>
					Borro
				</Typography>

				<Typography sx={style('/project2')}
				            onClick={() => nav('/project2')}
				>
					Second
				</Typography>

				<Typography sx={style('/project3')}
				            onClick={() => nav('/project3')}
				>
					Third
				</Typography>

			</Box>
		</>
	);
}