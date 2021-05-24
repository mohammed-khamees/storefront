import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		height: '40px',
		background: '#eeeeee',
	},
	title: {
		color: 'black',
		textAlign: 'center',
	},
}));

const Footer = () => {
	const { appBar, title } = useStyles();

	return (
		<AppBar position="fixed" color="primary" className={appBar}>
			<Toolbar>
				<Typography variant="h6" className={title}>
					© Code Fellows 2021
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
