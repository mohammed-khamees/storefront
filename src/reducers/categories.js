const intialState = {
	categories: [
		{
			name: 'electronics',
			displayName: 'ELECTRONICS',
			description: 'ELECTRONICS description',
		},
		{
			name: 'food',
			displayName: 'FOOD',
			description: 'FOOD description',
		},
	],
	active: '',
};

const categories = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'ACTIVE_CATEGORY':
			const active = payload;
			const categories = state.categories;
			return { categories, active };

		default:
			return state;
	}
};

export default categories;

export const getCategory = (category) => {
	return {
		type: 'ACTIVE_CATEGORY',
		payload: category,
	};
};
