import date from './helpers/date';
import Firebase from 'firebase';

var api = new Firebase('https://amp-stats.firebaseio.com/txgarage/sponsors');

document.addEventListener('click', doOmniture);

function doOmniture(event) {
	if(event.target.className === 'ad-item__link') {
		api.push({
			date: date(),
			link: event.target.attributes['data-ad'].value,
			page: document.baseURI
		});
	}
}
