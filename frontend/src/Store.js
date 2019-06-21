import { observable, action } from 'mobx';

const Store = observable({
	ipsum: '',
	paragraphCount: 1,
	loading: false,
	changeParagraphCount: action(count => {
		Store.paragraphCount = count;
	}),
	changeLoadingState: action(value => {
		Store.loading = value;
	}),

	fetchIpsum: action(async count => {
		await fetch(`/api/ipsum?count=${count}`)
			.then(res => res.json())
			.then(response => {
				Store.ipsum = response;
				Store.changeLoadingState(false);
			})
			.catch(error => console.error('Error:', error));
	})
});

export default Store;
