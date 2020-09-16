var map = L.map('main_map').setView([14.6263757,-90.5626013], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
	attribution: '&copy; <a href="https://openstreetmap.org/copyrigth">OpenStreetMap</a> contributors'
}).addTo(map);

$.ajax({
	dataType: "json",
	url: "api/bicicletas",
	success: function(result){
		console.log(result);
		result.bicicletas.forEach(function(bici){
			L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
		});
	}
})