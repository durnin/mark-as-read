chrome.storage.sync.get(["visited"], function (visitedObj) {
	if(typeof visitedObj !== 'undefined') {
		let visited = visitedObj['visited'];
		var links = document.getElementsByTagName('a');
		for(var link in links) {
			var element = links[link];
			if (isVisited(element.href, visited)) {
				element.style.backgroundColor = 'blue';
			}
		}
	}
});



function isVisited(url, visitedHash) {
	if(url) {
		var key = getKey(url);
		if(visitedHash[key]) {
			var path = getPathFromUrlAndKey(url, key);
			return visitedHash[key].includes(path);
		}		
	}
	return false;
}

function getKey(url) {
	return new URL(url).origin;
}

function getPathFromUrlAndKey(url, key) {
	var path = url.replace(key, '');
	if (key == 'https://apartamento.mercadolibre.com.uy') {
		path = path.split('#')[0];
	}
	return path;
}
