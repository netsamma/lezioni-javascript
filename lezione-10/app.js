window.onload = function() { // equivale window.addEventListener('load', (event) => {
	alert('Page loaded');
	// l'immagine è già caricata in questo momento
	alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
};