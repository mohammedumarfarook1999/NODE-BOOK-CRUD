# NODE-BOOK-CRUD

CRUD Application in Express JS

Getting Started

cd backend

npm install 

pm2 start or node index

CURL REQUEST 

ADD BOOK :
curl --location --request POST 'http://localhost:1233/user/add-book' \
--header 'origin: http://localhost:3000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"Big Lion",
    "author":"David",
    "summary":"This is Crud App"
}'

LIST BOOK :

curl --location --request POST 'http://localhost:1233/user/list-book' \
--header 'origin: http://localhost:3000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "page":4,
    "pageSize":2
}'

GET SINGLE BOOK :

curl --location --request POST 'http://localhost:1233/user/get-single-book' \
--header 'origin: http://localhost:3000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "_id":"654d2bdd4dea021c55f3750a"
}'

UPDATE BOOK :

curl --location --request POST 'http://localhost:1233/user/update-book' \
--header 'origin: http://localhost:3000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "_id":"654d2bdd4dea021c55f3750a",
            "title": "new 111",
            "author": "smith",
            "summary": "This is Crud App 1"
}'

Delete Book

curl --location --request POST 'http://localhost:1233/user/delete-book' \
--header 'origin: http://localhost:3000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "_id":"654d2bdd4dea021c55f3750a"
          
}'

