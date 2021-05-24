import { connect } from 'react-redux';
import { Toolbar, Typography, makeStyles, AppBar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	title: {
		flexGrow: 1,
		color: 'black',
		fontSize: '2em',
	},

	navBar: {
		background: '#aaa',
		width: '100%',
	},
}));

const Header = (props) => {
	const { title, navBar } = useStyles();

	return (
		<AppBar className={navBar}>
			<Toolbar>
				<Typography variant="h6" className={title}>
					OUR STORE
				</Typography>
				<Typography variant="h6" className={title}>
					CART ({props.TotalInventoryCount})
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = (state) => {
	return { TotalInventoryCount: state.products.TotalInventoryCount };
};

export default connect(mapStateToProps)(Header);
