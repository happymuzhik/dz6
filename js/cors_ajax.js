;(function(w, document, undefined){

w.Ajax = function(url){
	return new Promise(function(resolve, reject){
		let req = new XMLHttpRequest();
		req.open('GET', url, true);
		req.responseType = 'json';
		req.addEventListener('load', function() {
  			resolve(req.response);
		});
		req.addEventListener('error', function() {
  			reject();
		});
		req.send();
  	});
};

})(window, document);