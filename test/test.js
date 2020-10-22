import chai from 'chai'
import chaiHttp from 'chai-http'
import mocha from 'mocha'
import app from '../index'

const { expect } = chai;

chai.use(chaiHttp);
chai.should();

mocha.describe('Contact return test', () => {
    describe('GET', () => {
        it('should return all contacts', (done) => {
            chai.request(app)
                .get('/api/contacts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        })
    })
})
