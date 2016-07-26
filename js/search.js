;(function(w, document, undefined){

let search_arr = null;
let allow_search = false;
let input = document.getElementById('cities_input');
let timer = false

let draw_res = function(arr){
	container = document.getElementById('res_cont');
	container.innerHTML = '';
	for (let i = 0; i < arr.length; i++){
		let el = document.createElement('div');
		el.innerText = (i+1)+'. '+arr[i];
		container.appendChild(el);
	};
};

let debounce = function(time){
	return new Promise(function(resolve, reject){
		if (timer){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			resolve();
			clearTimeout(timer);
		}, time);
	});
};

let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
Ajax(url).then(
	function(response){
		search_arr = response;
		allow_search = true;
	}
);

input.addEventListener('input', function(){
	let str = this.value;
	if(allow_search){
		debounce(500).then(
			function(){
				let res = [];
				if(str.trim().length > 0){
					for (let i = 0; i < search_arr.length; i++) {
						if (search_arr[i].name.toUpperCase().indexOf(str.toUpperCase())>-1){
							res.push(search_arr[i].name);
						}
					};
				}				
				draw_res(res);
			}
		);
	}
});

input.focus();

})(window, document);