import { expect } from 'chai';
import request from 'supertest';


let statusCode = 200;
let failedstatusCode= 404;

let methode = 'get';
let url = 'https://fakestoreapi.com';
let endpoint = '/products'

describe('flow checkout', function() {
    context('hit api login', function(){
        it('status code 200', function () {
            //  console.log(statusCode)
            // expect(statusCode).to.eq(200)
            const response = request(url).get(endpoint);
            console.log(response)
            
        })

        // it('failed', function () {
        //     // console.log(failedstatusCode)
        //     expect(failedstatusCode).to.eq(404)
            
        })
    })
    
