var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');
var server = require('../../bin/www');
var request = require('request');

var base_url = "https://localhost:3000/api/bicicletas";

describe('Bicicleta API', () => {
	beforeEach(function(done) {
		var mongoDB = 'mongodb://localhost/testdb';
		mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser:true,  useCreateIndex: true });

		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error'));
		db.once('open', function() {
			console.log('We are connected to test database!');
			done();
		});
	});
});

	

	afterEach(function(done) {
		Bicicleta.deleteMany({}, function(err, success){
			if(err) console.log(err);
			done();
		});
	});


	describe("GET BICICLETAS /", () => {
		it("Status 200", (done) => {
			request.get(base_url, function(error, response, body) {
				var result = JSON.parse(body);
				expect(response.status.Code).toBe(200);
				expect(result,bicicletas.length).toBe(0);
				done();
			});
		});
	});

	describe("POST BICICLETAS /create", () => {
		it("Status 200", (done) => {
			var headers = {'content-type' : 'application/json'};
			var aBici = {'conde': 10, "color": "rojo", "modelo": "urbana", "Lat": -34, "Long": -54};
			request.post({
				headers: headers,
				url:     base_url + '/create',
				body:    aBici
			},   function(error, response, body) {
				expect(response.status.Code).toBe(200);
				var bici = JSON.parse(body).bicicleta;
				console.log(bici);
				expect(bici.color)toBe("rojo");
				expect(bici.ubicacion[0])toBe(-34);
				expect(bici.ubicacion[1])toBe(-54);
				done();
			});
		});
	});

	describe("DELETE BICICLETAS /delete", () => {
		it("Status 204", (done) => {
			var a = Bicicleta,createInstance(1, 'negro', 'urbana', [-34.6012424,-58.3661] );
			Bicicleta.add(a, function(err, newBici){
				var headers = {'content-type' : 'application/json'};
			})






// describe('Bicicleta API', () => {
// 	describe('GET BICICLETAS /', () => {
// 		it('Status 200', () => {
// 			expect(Bicicleta.allBicis.length).toBe(0);

// 			var a = new Bicicleta(1, 'negro' , 'urbana', [14.6263757,-90.5626013]);
// 			Bicicleta.add(a);

// 			request.get('http://localhost:5000/api/bicicletas', function(error, reponse, body){
// 				expect(reponse.statusCode).toBe(200);
// 			});
// 		});
// 	});

// describe('POST BICICLETAS /create', () => {
// 		it('Status 200', (done) => {
// 			var headers = {'content-type' : 'aplication/json'};
// 			var aBici = '{"id": 10, "color": "rojo", "modelo": "urbana", "Lat": -34, "Lng": -54 }';
// 			request.post({
// 			    headers: headers,
// 			    url: 'http://localhost:5000/api/bicicletas/create',
// 			    body: aBici
// 		      }, function(error, reponse, body) {
// 				expect(reponse.statusCode).toBe(200);
// 				expect(Bicicleta.findById(10).color).toBe("rojo");
// 				done();
// 			});
// 		});
// 	});
// });