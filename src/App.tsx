import './App.css'
import {Icons} from "./components/Icons";
import {Box} from "@mui/material";
import {NavBar} from "./components/NavBar";
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {Home} from "./components/Home";
import {Project1} from "./components/projects/Project1";
import {Project2} from './components/projects/Project2';
import {Project3} from './components/projects/Project3';
import {animated, useTransition} from 'react-spring';
import {ReactNode} from 'react';


type animProps = {
	children: ReactNode;
}

const AnimatedRoutes: React.FC<animProps> = ({children}) => {
	const location = useLocation();

	const transitions = useTransition(location, {
		keys: location => location.key, // set the keys
		from: {opacity: 0},
		enter: {opacity: 1},
		leave: {opacity: 0}
	});

	return (
		<Box sx={{
			position: 'relative',
			minHeight: '200px',
			paddingY:"20px",
			overflow: 'hidden'
		}}> {/* Adjust the minHeight based your needs */}
			{
				transitions((style, item) => (
					<animated.div
						style={{
							...style,
							position: 'absolute',
							padding:"20px",
						}}
					>
						<Routes location={item}>
							{children}
						</Routes>
					</animated.div>
				))
			}
		</Box>
	);
}

function App() {

	return (

		<BrowserRouter>
			<Box
				sx={{
					display: "flex",
					paddingX: [0, "20px", "20px", "20px", "200px"],
					height: '100vh',
					justifyContent: 'center',
				}}>
				<Box
					sx={{
						display: "flex",
						width: '80%',

						flexDirection: 'column',
						justifyContent: 'center',

					}}>

					<Icons/>
					<Box
						sx={{
							display: "flex",
							flexDirection: 'row',
							paddingX: [0, 0, "20px", "150px", "200px"],
							paddingY: '50px',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '20px',
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: 'column',
								width: '100%',
								height: '100%',
								position: 'relative',
								backgroundColor: '#313131',
								borderRadius: '5px',
								'&::-webkit-scrollbar': {
									display: 'none',
								},
								boxShadow: 1,
							}}
						>
							<AnimatedRoutes>
								<Route path="/" Component={Home}/>
								<Route path="/project1" Component={Project1}/>
								<Route path="/project2" Component={Project2}/>
								<Route path="/project3" Component={Project3}/>
							</AnimatedRoutes>
						</Box>
						<NavBar/>
					</Box>
				</Box>
			</Box>
		</BrowserRouter>

	)
}

export default App
