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
						justify="space-evenly"
						xs={3}
						spacing={3}
						className={root}
					>
						{state.cartProducts.map((product, i) => {
							return (
								<Grid
									item
									key={i}
									style={{ marginBottom: '1rem', background: '#eaeaea' }}
								>
									{product.name} ({product.inventoryCount})
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
