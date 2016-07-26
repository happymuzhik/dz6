;(function(w, document, undefined){

w.drawArray = function(arr,container){
	if (!container){ container = document.body; }
	for (let i = 0; i < arr.length; i++){
		let el = document.createElement('div');
		el.innerText = (i+1)+'. '+arr[i].name;
		container.appendChild(el);
	};
};

let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
Ajax(url).then(
	function(response){
		response.sort(function(a,b){
			if (a.name > b.name) { return 1; }
			if (a.name < b.name) { return -1;}
			return 0;
		});
		drawArray(response);
	}
);

})(window, document);