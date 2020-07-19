# Create and Upload Movie

## Endpoints

GET /movie/all

GET /movie/paging?page={page}&limit={limit}

GET /movie/views

GET /movie/mostview

GET /movie/?title={title}

GET /movie/?description={description}

GET /movie/?artists={artists}

POST /movie/upload/ req.body

PUT /movie/ req.body

DELETE /movie/ req.query.title

GET /genres/all

GET /genres/views

GET /genres/mostview

GET /user/all

POST /user/regist

PUT /user/ req.body

DELETE /user/ req.query.userName


## how to auth 

1. cocokan userName dan userPassword dengan yang ada di db

2. POST request ke /login yg berisi json 

3. masukan request yang berisi token ke variabel

4. gunakan token di header dengan format header {token: isitoken} 
