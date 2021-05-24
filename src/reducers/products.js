const intialState = {
	products: [
		{
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
		},
		{
			categoryAssociation: 'FOOD',
			name: 'FOOD pro',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
		},
		{
			categoryAssociation: 'FOOD',
			name: 'FOOD pro',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
		},
		{
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
		},
		{
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
		},
		{
			categoryAssociation: 'FOOD',
			name: 'FOOD pro',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
		},
		{
			categoryAssociation: 'FOOD',
			name: 'FOOD pro',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
		},
	],
	TotalInventoryCount: 0,
};

const products = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'INCREMENT':
			const TotalInventoryCount = state.TotalInventoryCount + 1;
			const products = state.products.map((product) => {
				if (payload === product.name) {
					return {
						categoryAssociation: product.categoryAssociation,
						name: product.name,
						description: product.description,
						price: product.price,
						inventoryCount: product.inventoryCount + 1,
					};
				} else {
					return product;
				}
			});
			return { products, TotalInventoryCount };

		default:
			return state;
	}
};

export default products;

export const increment = (name) => {
	return {
		type: 'INCREMENT',
		payload: name,
	};
};
