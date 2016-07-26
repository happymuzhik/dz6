let timer = function(time){
	return new Promise(function(resolve, reject){
		let t = setTimeout(function(){
			resolve();
			clearTimeout(t);
		}, time);
	});
};
module.exports = timer;
