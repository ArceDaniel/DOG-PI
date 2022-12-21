import test from 'node:test';
import assert from 'node:assert';
import httpServer from '../../src/config/http.js';


const data = {
  "name":"naomi",
  "height":"12-13",
  "weight":"5-16",
  "lifeSpan":"12",
  "temperaments":["rompe bola","ladradora"]
 }

test('fetch', async ()=>{
  const response = await fetch(httpServer,'/dogs', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json)
  assert.equal(json.name,'naomi')
})