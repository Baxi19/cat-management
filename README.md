> # 1 Install [Docker](https://docs.docker.com/get-started/)


> # 2 Server configuration
> #### Open a termial in a root of proyect 
> #### Go to cat-management/server/ folder
> ```
> cd server
> ```
>
> #### Get Server Dependencies 
> ```
> npm i
> ```
>
> #### Run Postgres and Pg Admin Docker images
> ```
> docker-compose up -d 
> ```
>
> #### Run Migration and update the database
> ```
> npm run migrations:run
> ```
>
> #### Run server in developmment
> ```
> npm run dev
> ```


> # 3 Client configuration
> #### Open a new termial in a root of proyect
> #### Go to cat-management/client/ folder
> ```
> cd client
> ```
>
> #### Get Client Dependencies 
> ```
> npm i
> ```
>
> #### Run Client
> ```
> npm start
> ```
>
> #### Open the web app
> ```
> http://localhost:3000/
> ```


> # 4 How To use pg admin (Optional)
> #### Go to http://localhost:5050/
> #### Use the next credentials
> 
> **Email:**
> ```
> admin@mail.com
> ```
> 
> **Passport:**
> ```
> root
> ```
> 
> #### Create a server in pg admin
> #### Use next configurations 
> #### In General
> **Name:**
> ```
> Docker Database
> ```
> 
> #### In Connection: 
> **Host name/address:**
> ```
> postgres
> ```
> 
> **Port:**
> ```
> 5432
> ```
> 
> **Username:**
> ```
> randald
> ```
> 
> **Passport:**
> ```
> admin123
> ```


> # 5 Close all containers when the review is complete
> ```
> docker-compose down
> ```
