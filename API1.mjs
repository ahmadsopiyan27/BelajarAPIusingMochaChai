import { expect } from 'chai';
// const expect = chai.expect;


let statusCode = 200;
let failedstatusCode= 404;

describe('flow checkout', function() {
    context('hit api login', function(){
        it('status code 200', function () {
            //  console.log(statusCode)
            expect(statusCode).to.eq(200)
            
        })

        it('failed', function () {
            // console.log(failedstatusCode)
            expect(failedstatusCode).to.eq(404)
            
        })
    })
    
})