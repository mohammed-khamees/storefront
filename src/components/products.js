import React from 'react';
import { connect } from 'react-redux';
import { increment } from './../reducers/products';

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
		maxWidth: 345,
		flexGrow: 1,
	},

	typography: {
		height: 140,
		width: 100,
	},

	h2: {
		extAlign: 'center',
		fontSize: '3rem',
	},
});

const Products = ({ products, active, increment }) => {
	const classes = useStyles();
	const { typography, h2 } = useStyles();

	let activeProducts = products.filter(
		(product) => product.categoryAssociation === active,
	);

	return (
		<>
			<Typography variant="h5" component="h5" className={typography}>
				Browse our Categories
			</Typography>
			<h2 className={h2}>{active}</h2>
			<Grid container justify="center" spacing={4}>
				<Grid item xs={12}>
					<Grid container justify="center">
						{activeProducts.map((product, i) => (
							<Card key={i} className={classes.root}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="140"
										image="/static/images/cards/contemplative-reptile.jpg"
										title="Contemplative Reptile"
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
											{product.description}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											{product.price}
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
										onClick={() => increment(product.name)}
									>
										Add to Cart ({product.inventoryCount})
									</Button>
								</CardActions>
							</Card>
						))}
					</Grid>
				</Grid>
			</Grid>
			;
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.products.products,
		active: state.categories.active,
	};
};

const mapDispatchToProps = { increment };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
