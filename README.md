# YOU EXPRESS VEHICLE API DOCUMENTATION - Test No 3

### This API covers the CRUD functionaility of a model with the fields (tipe, image_source, weight, and order)
___

|   type | endpoint |   |                                   body | params | response |
|-------:|:--------:|---|---------------------------------------:|--------|----------|
| GET    |     /    |   |                                      - |        | 200      |
| POST   |     /    |   | - tipe - image_source - weight - order |        | 201      |
| PUT    |   /:id   |   | - tipe - image_source - weight - order | id     | 201      |
| DELETE |  /:id    |   |                                        | id     | 201      |

___