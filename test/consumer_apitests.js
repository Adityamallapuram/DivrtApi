var app = 'https://test-api.divrt.co';
var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;



describe('Api Tests', function() {


it('should forceupdate', function(done) {
request(app)
  .post('/api/v3/app/forceupdate')
  .set('Accept', 'application/json')
  .send({
  "type":"android,version:1.0.6"
  
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should getMobileOtp ', function(done) {
request(app)
  .post('/api/v3/user/getMobileOtp')
  .set('Accept', 'application/json')
  .send({"tn":"+919999999999"})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should validateMobileOtp', function(done) {
request(app)
  .post('/api/v3/user/validateMobileOtp')
  .set('Accept', 'application/json')
  .send({"otp":"2722","tn":"+919999999999"})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should modify', function(done) {
request(app)
  .post('/api/v3/user/modify')
  .set('Accept', 'application/json')
  .send({
  "uid": 56,
  "divrt": "be4078934e9ed0da51c4fcbf6fee8777e1953d46687000d658aa9a7f3f7385fe",
  "n": "aditya",
  "tn": "+919030007974",
  "me": "mallapuramaditya@gmail.com",
  "as1":" ",
  "vehicles": "add123"
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});


it('should getUserBookingByLatLng', function(done) {
request(app)
  .post('/api/v3/booking/getUserBookingByLatLng')
  .set('Accept', 'application/json')
  .send({
  "uid": "2488",
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e",
  "lla": "12.9118521",
  "llo": "77.649065"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should getRefpoints', function(done) {
request(app)
  .post('/api/v3/user/getRefpoints')
  .set('Accept', 'application/json')
  .send({
  "uid": "2488",
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should modifyPush', function(done) {
request(app)
  .post('/api/v3/push/modifyPush')
  .set('Accept', 'application/json')
  .send({
  "uid": "2488",
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e",
  "n": "mallapuramaditya",
  "tn": "+919030007974",
  "me": "mallapuramaditya@gmail.com",
  "vehicles": "ADITYA12"
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should latlng', function(done) {
request(app)
  .post('/api/v3/zone/latlng')
  .set('Accept', 'application/json')
  .send({
  "lla": "12.9118521",
  "llo": "77.649065",
  "start": "1496466060",
  "ver": "3.5"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});


it('should getpointsDetails', function(done) {
request(app)
  .post('/api/v3/user/getpointsDetails')
  .set('Accept', 'application/json')
  .send({
  "uid": "2488",
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should getBookingsHistoryByUserId', function(done) {
request(app)
  .post('/api/v3/booking/getBookingsHistoryByUserId')
  .set('Accept', 'application/json')
  .send({
  "uid": "2488",
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e",
  "currenttime": "1496466060"
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should book byGeolocation', function(done) {
request(app)
  .post('/api/v3/booking/byGeolocation')
  .set('Accept', 'application/json')
  .send({
  "uid": "2488",
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e",
  "vendor": "DIVRT",
  "lla": "12.9118577",
  "llo": "77.6490598"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should checkBookingExist', function(done) {
request(app)
  .post('/api/v3/booking/checkBookingExist')
  .set('Accept', 'application/json')
  .send({
  "uid": "2488",
  "zid": 1,
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e",
  "starttime": "1496470620"
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should add booking', function(done) {
request(app)
  .post('/api/v3/booking/add')
  .set('Accept', 'application/json')
  .send({
  "state": 6,
  "vendor": "DIVRT",
  "uid": 56,
  "zid": 3,
  "timezone": "Asia/ x5C / Calcutta",
  "timezoneoffset": 19800,
  "start": 1496489400,
  "duration": 180,
  "price": 100,
  "timezonedstoffset": 0,
  "divrt": "de74020c4651c3694ad405c4d07122e6e7d997ef87b85cd798c01962cbd66354"
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
  });

it('should checkin vehicle', function(done) {
request(app)
  .post('/api/v3/payment/add')
  .set('Accept', 'application/json')
  .send({
  "vendor": "DIVRT",
  "uid": 2488,
  "divrt": "29b4db106685c52c22b3bf7ab233a9aa3518eba5c0b29acda27f46afab7f8f8e",
  "order_id": "tj6d5LSrcX",
  "transaction_id":" ",
  "mode": "MODE",
  "created_at": "1496470800",
  "amount": "12",
  "currency": "INR",
  "method":" ",
  "amount_refunded":" ",
  "refund_status":" ",
  "description":" ",
  "card_id":" ",
  "bank":" ",
  "captured":" ",
  "error_code":" ",
  "error_description":" ",
  "status":" ",
  "gateway_name":" ",
  "banktnxid":""
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should checkFirstTimeRechargeUser', function(done) {
request(app)
  .post('/api/v3/user/checkFirstTimeRechargeUser')
  .set('Accept', 'application/json')
  .send({
  "uid": 56,
  "divrt":"de74020c4651c3694ad405c4d07122e6e7d997ef87b85cd798c01962cbd66354"
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
});

it('should getPrimeZoneList', function(done) {
request(app)
  .post('/api/v3/prime/getPrimeZoneList')
  .set('Accept', 'application/json')
  .send({
  "divrt": "de74020c4651c3694ad405c4d07122e6e7d997ef87b85cd798c01962cbd66354"
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
  });

it('should getSubscriptionDetailsForZone', function(done) {
request(app)
  .post('/api/v3/prime/getSubscriptionDetailsForZone')
  .set('Accept', 'application/json')
  .send({
  "zid": 8,
  "divrt": "de74020c4651c3694ad405c4d07122e6e7d997ef87b85cd798c01962cbd66354"
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
  });

it('should generateSubscriptionId', function(done) {
request(app)
  .post('/api/v3/prime/generateSubscriptionId')
  .set('Accept', 'application/json')
  .send({
  "divrt": "de74020c4651c3694ad405c4d07122e6e7d997ef87b85cd798c01962cbd66354",
  "id": 1,
  "amount": 1.0,
  "uid": 56
})
  .end(function(err, res){
      	//console.log(body);
      	//expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
  });


it('should add prime user', function(done) {
request(app)
  .post('/api/v3/prime/add')
  .set('Accept', 'application/json')
  .send({
  "divrt": "be4078934e9ed0da51c4fcbf6fee8777e1953d46687000d658aa9a7f3f7385fe",
  "id": 1,
  "amount": 1,
  "order_id": "prMdFNcWFSY9",
  "mode": "RAZOR",
  "vendor": "RAZOR",
  "transaction_id": "pay_7yjsUB3ySatHiJ",
  "uid": 56,
  "zid": "8",
  "count":""
})
  .end(function(err, res){
        //console.log(body);
        //expect(res.body).to.contain('true');
        //expect(res.body).to.be.equal('true');
        expect(res.statusCode).to.be.equal(200);
        
        done();
      });
  });

});


