const intialState = {
	products: [
		{
			id: 1,
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro 1',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://pcloft.com/wp-content/uploads/2020/12/Best-Laptop-for-Gaming-And-Everyday-Use.jpg',
		},
		{
			id: 2,
			categoryAssociation: 'FOOD',
			name: 'FOOD pro 2',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
		},
		{
			id: 3,
			categoryAssociation: 'FOOD',
			name: 'FOOD pro 3',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
		},
		{
			id: 4,
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro 4',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://pcloft.com/wp-content/uploads/2020/12/Best-Laptop-for-Gaming-And-Everyday-Use.jpg',
		},
		{
			id: 5,
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro 5',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://pcloft.com/wp-content/uploads/2020/12/Best-Laptop-for-Gaming-And-Everyday-Use.jpg',
		},
		{
			id: 6,
			categoryAssociation: 'FOOD',
			name: 'FOOD pro 6',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
		},
		{
			id: 7,
			categoryAssociation: 'FOOD',
			name: 'FOOD pro 7',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
		},
		{
			id: 8,
			categoryAssociation: 'FOOD',
			name: 'FOOD pro 8',
			description: 'FOOD pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
		},
		{
			id: 9,
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro 9',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://pcloft.com/wp-content/uploads/2020/12/Best-Laptop-for-Gaming-And-Everyday-Use.jpg',
		},
		{
			id: 10,
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro 10',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://pcloft.com/wp-content/uploads/2020/12/Best-Laptop-for-Gaming-And-Everyday-Use.jpg',
		},
		{
			id: 11,
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro 11',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://pcloft.com/wp-content/uploads/2020/12/Best-Laptop-for-Gaming-And-Everyday-Use.jpg',
		},
		{
			id: 12,
			categoryAssociation: 'ELECTRONICS',
			name: 'ELECTRONICS pro 12',
			description: 'ELECTRONICS pro description',
			price: '20$',
			inventoryCount: 0,
			img: 'https://pcloft.com/wp-content/uploads/2020/12/Best-Laptop-for-Gaming-And-Everyday-Use.jpg',
		},
	],
	TotalInventoryCount: 0,
	cartProducts: [],
	show: false,
};

const products = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'INCREMENT':
			const TotalInventoryCount = state.TotalInventoryCount + 1;
			const products = state.products.map((product) => {
				if (payload === product.id) {
					return {
						id: payload,
						categoryAssociation: product.categoryAssociation,
						name: product.name,
						description: product.description,
						price: product.price,
						inventoryCount: product.inventoryCount + 1,
						img: product.img,
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
			const product = state.products.find((product) => product.id === payload);

			const cartProducts = [...state.cartProducts, product];

			const prev = state.cartProducts.find((product) => product.id === payload);

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
				(product) => product.id !== payload,
			);

			const sum = productsDelete.reduce((acc, product) => {
				acc += product.inventoryCount;
				return acc;
			}, 0);

			const InventoryCount = sum;

			const newProducts = state.products.map((product) => {
				if (payload === product.id) {
					return {
						id: payload,
						categoryAssociation: product.categoryAssociation,
						name: product.name,
						description: product.description,
						price: product.price,
						inventoryCount: 0,
						img: product.img,
					};
				} else {
					return product;
				}
			});

			return {
				products: newProducts,
				TotalInventoryCount: InventoryCount,
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
