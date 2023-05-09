# Flight Booking System

### To start The server 
```bash
npm i 
npm index.js
```
I have not included node_module folder, so `npm i` can install all the dependencies that i have used in my project 
`npm index.js` will start the server in port 3000

Software Required
   - Node js 
   - Mongodb (No Sql Database)
   - postman (To Test our Api)

## Api routes

### Admin
- Create a admin 
    - `POST` [http://localhost:3000/admins](http://localhost:3000/admins)
        
        ```json
        // Req Body
        {
            "name":"Harish Goku G",
            "email":"harishgokul@gmail.com",
            "password":"harishgokul",
            "phone": "9876543210"
        }
        // Res Body
        {
            "admin": {
                "name": "Harish Goku G",
                "email": "harishgokul@gmail.com",
                "_id": "6445bc6bdde421220dd637f2",
                "phone": 9876543210
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ1YmM2YmRkZTQyMTIyMGRkNjM3ZjIiLCJpYXQiOjE2ODIyOTE4MTl9.3Ba-f8IRtt0dHhTRE4UafROoq2g0_hXV6ai7zNKN9aY"
        }
        ```
- Authentication of Admin
    - `POST` [http://localhost:3000/authAdmin](http://localhost:3000/authAdmin)
    ```json
        // Request body
        {
            "email":"harishgokul@gmail.com",
            "password":"harishgokul"
        }
        // Response
        {
    "admin": {
        "name": "Harish Goku G",
        "email": "harishgokul@gmail.com",
        "_id": "6445bc6bdde421220dd637f2",
        "phone": 9876543210
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ1YmM2YmRkZTQyMTIyMGRkNjM3ZjIiLCJpYXQiOjE2ODIyOTIxODR9.-9Gxnz80PnwEGxb65ReJNzzEwx1vpoR0z3ICKGr42bI"
    }
    ```
In the Above code i have returned a JWT (javascript web token), This token has to be sent in the request header `x-auth-admin-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ1YmM2YmRkZTQyMTIyMGRkNjM3ZjIiLCJpYXQiOjE2ODIyOTIxODR9.-9Gxnz80PnwEGxb65ReJNzzEwx1vpoR0z3ICKGr42bI`

To access specific Routes



### Flights
- To GET All Flights (**No Auth Required**)
    - `GET` [http://localhost:3000/flights/allFlights](http://localhost:3000/flights/allFlights)
- To GET One specific Flight (**No Auth Required**)
    - `GET` [http://localhost:3000/flights/:ID](http://localhost:3000/flights/:ID)
- To filter flights based on from, to , departureDateAndTime (**No Auth Required**)
    - `GET` [http://localhost:3000/flights/?from=Coimbatore&to=Chennai&departureDateAndTime=2023-04-21](http://localhost:3000/flights/?from=Coimbatore&to=Chennai&departureDateAndTime=2023-04-21)
- To Create A Flight (**Admin Auth Required we have provide token in Header with `x-auth-admin-token` key**)
    - `POST` [http://localhost:3000/flights](http://localhost:3000/flights)
        ```json
        // request Header - x-auth-admin-token : token
        // request body
        {
            "from": "Bengaluru",
            "to": "Chennai",
            "departureDateAndTime": "2023-04-21T23:50:00.000Z",
            "name": "Indigo",
            "number": 9876,
            "pricePerSeat":966,
            "seats":[{"seatId":"a0","isAvailable":true}.....{"seatId":"f10","isAvailable":true}] 
        }
        ```
        Seats Can be Generated by using [https://github.com/harishgokul-S/flight-booking-system-backEnd/blob/main/generateSeat.js](https://github.com/harishgokul-S/flight-booking-system-backEnd/blob/main/generateSeat.js)
- To Edit a Flight (**Admin Auth Required**)
    - `PUT` [http://localhost:3000/flights/:ID](http://localhost:3000/flights/:ID) Same req body with changed values is required 
- To Delete a Flight (**Admin Auth Required**)
     - `DELETE` [http://localhost:3000/flights/:ID](http://localhost:3000/flights/:ID)

## User 
- To Create A User
    - `POST` [http://localhost:3000/users] (**No Auth Required**)
    ```json
    // request body
        {
            "name":"Sample Name",
            "phone":"9876543210",
            "email":"Sample@gmail.com",
            "password":"123456789"
        }
    // Response Data 
        {
            "user": {
                "name": "Sample Name",
                "email": "Sample@gmail.com",
                "_id": "6445c517df41caaf5f748109",
                "tickets": [],
                "phone": 9876543210
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ1YzUxN2RmNDFjYWFmNWY3NDgxMDkiLCJpYXQiOjE2ODIyOTQwMzl9.DboGw1XBAmYg1ONhhIBmUwcuT5Ag1tLgruVwxrtd524"
        }
    ```
- Authentication of User
    - `POST` [http://localhost:3000/authUser](http://localhost:3000/authUser)
    ```json
    // Request body
        { 
            "email":"sample@gmail.com",
            "password":"123456789"
        }
    // Response Body
      {
            "user": {
                "name": "Sample Name",
                "email": "Sample@gmail.com",
                "_id": "6445c517df41caaf5f748109",
                "tickets": [],
                "phone": 9876543210
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ1YzUxN2RmNDFjYWFmNWY3NDgxMDkiLCJpYXQiOjE2ODIyOTQwMzl9.DboGw1XBAmYg1ONhhIBmUwcuT5Ag1tLgruVwxrtd524"
        }
    ```
- To Book a Ticket
    - `PUT` [http://localhost:3000/bookTicket/:USERID](http://localhost:3000/:USERID) (**User Auth Token Requried**)
    ```json
    //Request Header x-auth-user-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9/eyJfaWQiOiI2NDQ1YzUxN2RmNDFjYWFmNWY3NDgxMDkiLCJpYXQiOjE2ODIyOTQzMzd9.snV5MM-WmRsIbiKzOxPU4sFbdjWzGY1odc5hyqnk0Y4
    // Request body
    {
        "flightId":"644145215424dd0c8d0d312b",
        "seats":[{"seatId":"f1"},{"seatId":"f2"}]
    }


