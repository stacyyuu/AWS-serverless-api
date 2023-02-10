# Lab Class 18 - AWS: API Gateway, Lambda, and DynamoDB
# Documentation

## What is the root URL to your API?
- dynamodb:us-west-2:639185967817:table/books

## What are the routes?
- POST /books
- GET /books/{book_id}
- PUT /books/{book_id}
- DELETE /books/{book_id}

## What inputs do they require?

- POST requires title, author, and/or genre
- GET requires book_id
- PUT requires book_id and updated title, author, and/or genre
- DELETE requires book_id

## What output do they return?

- POST creates a new book
- GET gets a specific book by id
- PUT updates an existing book by id
- DELETE deletes an existing book by id