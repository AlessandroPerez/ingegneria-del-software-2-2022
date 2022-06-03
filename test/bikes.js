const app = require('../app.js');

const request = require('supertest');

const {expect} = require('chai');

const {handleGetBike} = require('../routes/bikes');

describe ('bike routes', () => {
  it('should return an appliction/json', (done) => {
    request(app)
      .get('/bikes')
      .set('Accept', 'application/json')
      //.expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body[0].model).to.be.a('string');
        expect(response.body[0].description).to.be.a('string');
        expect(response.body[0].price).to.be.a('number');
          done();
      })
      .catch(err => done(err))
  })
  it('tests a single method', (done) => {
    const bike = handleGetBike();
        expect(bike[0].model).to.be.a('string');
        expect(bike[0].description).to.be.a('string');
        expect(bike[0].price).to.be.a('number');
          done();
  });
})
