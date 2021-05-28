const intialState = {
	products: [],
	TotalInventoryCount: 0,
	cartProducts: [],
	show: false,
};

const products = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET':
			return {
				products: payload.results,
				TotalInventoryCount: state.TotalInventoryCount,
				cartProducts: state.cartProducts,
				show: state.show,
			};

		case 'INCREMENT':
			const TotalInventoryCount = !state.cartProducts.find(
				(product) => product._id === payload,
			)
				? state.TotalInventoryCount + 1
				: state.TotalInventoryCount;
			const products = state.products.map((product) => {
				if (payload === product._id) {
					return {
						_id: payload,
						name: product.name,
						category: product.category,
						inStock: product.inStock - 1,
						price: product.price,
					};
				} else {
					return product;
				}
			});
			return {
				products,
				TotalInventoryCount,
				cartProducts: state.cartProducts,
				show: state.show,
			};

		case 'ADD_CART':
			const product = state.products.find((product) => product._id === payload);

			const cartProducts = [...state.cartProducts, product];

			const prev = state.cartProducts.find(
				(product) => product._id === payload,
			);

			const index = cartProducts.indexOf(prev);

			if (index !== -1) cartProducts.splice(index, 1);

			return {
				products: state.products,
				TotalInventoryCount: state.TotalInventoryCount,
				cartProducts,
				show: state.show,
			};

		case 'DELETE':
			const productsDelete = state.cartProducts.filter(
				(product) => product._id !== payload,
			);

			return {
				products: state.products,
				TotalInventoryCount:
					state.TotalInventoryCount && state.TotalInventoryCount - 1,
				cartProducts: productsDelete,
				show: state.show,
			};

		case 'SHOW':
			return {
				products: state.products,
				TotalInventoryCount: state.TotalInventoryCount,
				cartProducts: state.cartProducts,
				show: payload,
			};

		default:
			return state;
	}
};

export default products;

export const getProducts = (products) => {
	return {
		type: 'GET',
		payload: products,
	};
};

export const increment = (id) => {
	return {
		type: 'INCREMENT',
		payload: id,
	};
};

export const getCartProducts = (id) => {
	return {
		type: 'ADD_CART',
		payload: id,
	};
};

export const handleShow = (boolean) => {
	return {
		type: 'SHOW',
		payload: boolean,
	};
};

export const deleteCartPeoduct = (id) => {
	return {
		type: 'DELETE',
		payload: id,
	};
};
