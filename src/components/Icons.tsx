import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import {Box} from "@mui/material";
import {useNavigate} from 'react-router-dom';

export function Icons() {
	const nav = useNavigate();

	const style = {
		margin: '10px',
		height: '50px',
		width: 'auto',
		color: '#868686',
		transition: ' 0.1s ease',
		'&:hover': {
			color: 'white',
			transform: 'scale(1.2)',
		}
	};

	const githubHandler = () => {
		location.href = "https://github.com/Brobo1";
	};
	const linkedinHandler = () => {
		location.href = "https://www.linkedin.com/in/arman-ahmadzadeh-892310241/";
	};
	const emailHandler = () => {
		location.href = "mailto:armanahz95@gmail.com";
	};

	return (
		<>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
			>
				<Box>
					<HomeIcon sx={style}
					          onClick={() => nav('/')}
					/>
				</Box>
				<Box>
					<EmailIcon
						sx={style}
						onClick={emailHandler}
					/>
					<GitHubIcon
						sx={style}
						onClick={githubHandler}
					/>
					<LinkedInIcon
						sx={style}
						onClick={linkedinHandler}
					/>
				</Box>
			</Box>
		</>
	);
}