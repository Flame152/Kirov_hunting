ymaps.ready(function () {
	// Рыбалка Филипповские (Исаковские) пруды
	if (document.getElementById('map-filippovka')) {
		let myMap1 = new ymaps.Map('map-filippovka', {
			center: [58.39959200234527,50.444702050070056],
			zoom: 9,
			controls: ['routePanelControl'],
			
		});
		let control = myMap1.controls.get('routePanelControl');
	
			control.routePanel.state.set({
				type: 'auto',
				fromEnabled: true,
				from: 'Киров',
				toEnabled: false,
				to: 'деревня Исаковцы, Коныпское сельское поселение, Кирово-Чепецкий район',
			});
		
			control.routePanel.options.set({
				types: {
					auto: true,
				}
			});
	}
	//Рыбалка Приветлужье
	if (document.getElementById('map-privetlyjie')) {
		let myMap = new ymaps.Map('map-privetlyjie', {
			center: [58.67223536661895,47.39899588092037],
			zoom: 9,
			controls: ['routePanelControl'],
			
		});
		let control = myMap.controls.get('routePanelControl');
	
			control.routePanel.state.set({
				type: 'auto',
				fromEnabled: true,
				from: 'Киров',
				toEnabled: false,
				to: 'Кировская область, Шабалинский район, Черновское сельское поселение, посёлок Льнозавод',
			});
		
			control.routePanel.options.set({
				types: {
					auto: true,
				}
			});
	}
	// let myMap = new ymaps.Map('map-filippovka', {
	// 	center: [58.39959200234527,50.444702050070056],
	// 	zoom: 9,
	// 	controls: ['routePanelControl']
	// });
	// let control = myMap.controls.get('routePanelControl');

	// control.routePanel.state.set({
	// 	type: 'auto',
	// 	fromEnabled: true,
	// 	from: 'Киров',
	// 	toEnabled: false,
	// 	to: 'деревня Исаковцы, Коныпское сельское поселение, Кирово-Чепецкий район',
	// });

	// control.routePanel.options.set({
	// 	types: {
	// 		auto: true,
	// 	}
	// })
});

//Рыбалка Приветлужье

// ymaps.ready(function () {

// 	let myMap = new ymaps.Map('map-privetlyjie', {
// 		center: [58.67223536661895,47.39899588092037],
// 		zoom: 9,
// 		controls: ['routePanelControl']
// 	});
// 	let control = myMap.controls.get('routePanelControl');

// 	control.routePanel.state.set({
// 		type: 'auto',
// 		fromEnabled: true,
// 		from: 'Киров',
// 		toEnabled: false,
// 		to: 'Кировская область, Шабалинский район, Черновское сельское поселение, посёлок Льнозавод',
// 	});

// 	control.routePanel.options.set({
// 		types: {
// 			auto: true,
// 		}
// 	})
// });
//я карты -end