import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, getCartProducts } from './../reducers/products';
import { If, Else, Then } from 'react-if';
import SimpleCart from './simpleCart';
import { getRemoteData } from './../reducers/actions';

import {
	Typography,
	Grid,
	Card,
	CardContent,
	CardActions,
	Button,
	makeStyles,
	CardActionArea,
	CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 250,
		flexGrow: 1,
		margin: '1rem',
	},

	typography: {
		textAlign: 'center',
		fontSize: '2rem',
	},

	h2: {
		textAlign: 'center',
		fontSize: '3rem',
		marginBottom: '7rem',
	},
});

const Products = () => {
	const classes = useStyles();
	const { typography, h2 } = useStyles();

	const state = useSelector((state) => {
		return {
			TotalInventoryCount: state.products.TotalInventoryCount,
			products: state.products.products,
			cartProducts: state.products.cartProducts,
			show: state.products.show,
			active: state.categories.active,
			categories: state.categories.categories,
		};
	});

	let activeProducts = state.products.filter((product) => {
		return product.category === state.active;
	});

	const dispatch = useDispatch(getCartProducts);

	const handleClick = (id) => {
		dispatch(increment(id));
		dispatch(getCartProducts(id));
	};

	useEffect(() => {
		dispatch(getRemoteData('https://api-js401.herokuapp.com/api/v1/products'));
	}, [dispatch]);

	return (
		<>
			<If condition={!state.show}>
				<Then>
					<Typography variant="h5" component="h5" className={typography}>
						Browse our Categories
					</Typography>
					<h2 className={h2}>{state.active}</h2>
					<Grid
						container
						justify="center"
						wrap="wrap"
						spacing={0}
						style={{ marginBottom: '10rem' }}
					>
						<Grid container item wrap="wrap" xs={10} spacing={0}>
							<Grid container justify="space-evenly" wrap="wrap" spacing={8}>
								{activeProducts.map((product) => (
									<Card key={product._id} className={classes.root}>
										<CardActionArea>
											<CardMedia
												component="img"
												alt={product.name}
												height="140"
												image={product.img}
												title={product.name}
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													{product.name}
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													price: {product.price} $
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													inStock: {product.inStock}
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Button size="small" color="primary">
												View More
											</Button>
											<Button
												size="small"
												color="primary"
												onClick={() => handleClick(product._id)}
											>
												Add to Cart
											</Button>
										</CardActions>
									</Card>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Then>
				<Else>
					<SimpleCart />
				</Else>
			</If>
		</>
	);
};

export default Products;
