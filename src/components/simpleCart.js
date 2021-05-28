import { useSelector } from 'react-redux';
import { If, Else, Then } from 'react-if';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		textAlign: 'center',
		margin: '5rem auto 5rem',
		fontSize: '1.5rem',
		padding: '0.5rem 1rem',
	},
}));

const SimpleCart = () => {
	const { root } = useStyles();

	const state = useSelector((state) => {
		return {
			TotalInventoryCount: state.products.TotalInventoryCount,
			products: state.products.products,
			cartProducts: state.products.cartProducts,
		};
	});

	return (
		<>
			<If condition={state.show}>
				<Then>
					<div></div>
				</Then>
				<Else>
					<Grid
						container
						xs={3}
						justify="space-evenly"
						spacing={3}
						className={root}
					>
						{state.cartProducts.map((product) => {
							return (
								<Grid
									item
									key={product._id}
									style={{ marginBottom: '1rem', background: '#eaeaea' }}
								>
									{product.name} ({product.price} $)
								</Grid>
							);
						})}
					</Grid>
				</Else>
			</If>
		</>
	);
};

export default SimpleCart;
