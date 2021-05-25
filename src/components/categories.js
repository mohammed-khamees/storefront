import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from './../reducers/categories';
import { handleShow, deleteCartPeoduct } from './../reducers/products';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 250,
		backgroundColor: theme.palette.background.paper,
		position: 'absolute',
		right: '2%',
		top: '15%',
		overflow: 'auto',
		maxHeight: 150,
		borderRadius: '0.5rem',
		boxShadow: '2px 2px 19px -3px rgba(0,0,0,0.66)',
	},
	listSection: {
		backgroundColor: 'inherit',
	},
	ul: {
		backgroundColor: 'inherit',
		padding: 0,
	},
}));

const Categories = () => {
	const classes = useStyles();

	const state = useSelector((state) => {
		return {
			TotalInventoryCount: state.products.TotalInventoryCount,
			categories: state.categories.categories,
			active: state.categories.active,
			cartProducts: state.products.cartProducts,
			products: state.products.products,
		};
	});

	const dispatch = useDispatch();

	const handleClick = (name) => {
		dispatch(handleShow(false));
		dispatch(getCategory(name));
	};

	const handleRemove = (id) => {
		dispatch(deleteCartPeoduct(id));
	};

	return (
		<>
			<ul
				style={{
					marginTop: '5rem',
					listStyle: 'none',
					display: 'flex',
					justifyContent: 'space-evenly',
				}}
			>
				{state.categories.map((category, i) => (
					<li
						key={i}
						onClick={() => handleClick(category.name)}
						style={{
							cursor: 'pointer',
						}}
					>
						<Button
							variant="contained"
							color="primary"
							style={{ width: '9rem' }}
						>
							{category.displayName}
						</Button>
					</li>
				))}
				<List className={classes.root} subheader={<li />}>
					{state.cartProducts.map((product) => (
						<li key={product.id} className={classes.listSection}>
							<ListItem key={product.id}>
								<ListItemText primary={product.name} />
								<DeleteIcon
									onClick={() => handleRemove(product.id)}
									style={{
										cursor: 'pointer',
										color: 'red',
									}}
								/>
							</ListItem>
						</li>
					))}
				</List>
			</ul>
		</>
	);
};

export default Categories;
