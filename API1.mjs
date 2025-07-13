import { expect } from 'chai';
import request from 'supertest';


let statusCode = 200;
let failedstatusCode= 404;

let methode = 'get';
let url = 'https://fakestoreapi.com';
let endpoint = '/products'
let body = {
    
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"

}

describe('flow checkout', function() {
    context('hit api login', function(){
        it('status code 200',async function () {
            //  console.log(statusCode)
            // expect(statusCode).to.eq(200)
            const response = await request(url).get(endpoint);
            // console.log(response.body)
            // console.log(statusCode)
            expect(response.statusCode).to.eq(200);
            expect(response.body[0].id).to.eq(1);
            
        })

        it('failed', async function () {
            const response = await request(url).get(`${endpoint}s`)
            expect(response.statusCode).to.eq(404)
            
        })
     context('hit api create product', function () {
            it('success', async function () {
                const response = await request(url).post(endpoint).send(body);
                expect(response.statusCode).to.eq(200);
                expect(response.body.title).to.eq(body.title);
            })
            it('gagal', async function () {
                let wrongBody = {...body};
                wrongBody.title =12345;
                const response =  await request(url).post(endpoint).send(wrongBody);
                expect(response.statusCode).to.eq(400);
               
            })
        })
    })
})
