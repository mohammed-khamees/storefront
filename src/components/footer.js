import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		height: '60px',
		background: '#aaa',
	},
	title: {
		color: 'black',
		textAlign: 'center',
	},
}));

const Footer = () => {
	const { appBar, title } = useStyles();

	return (
		<AppBar color="primary" className={appBar}>
			<Toolbar>
				<Typography variant="h6" className={title}>
					© Code Fellows 2021
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
