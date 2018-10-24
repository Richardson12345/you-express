# YOU EXPRESS VEHICLE API DOCUMENTATION - Test No 3

### This API covers the CRUD functionaility of a model with the fields (tipe, image_source, weight, and order)
___

|   type | endpoint |   |                                   body | params | response |
|-------:|:--------:|---|---------------------------------------:|--------|----------|
| GET    |  https://you-express-server.richardsondomain.xyz/    |   |                                      - |        | 200      |
| POST   |  https://you-express-server.richardsondomain.xyz/    |   | - tipe - image_source - weight - order |        | 201      |
| PUT    |   https://you-express-server.richardsondomain.xyz/:id   |   | - tipe - image_source - weight - order | id     | 201      |
| DELETE |  https://you-express-server.richardsondomain.xyz/:id    |   |                                        | id     | 201      |

___