# Go to cat-management/server/
```
cd server
```

# Get Server Dependencies 
```
npm i
```

# Run Postgres and Pg Admin Docker images
```
docker-compose up -d 
```

# Run Migration and update the database
```
npm run migrations:run
```

# How To use pg admin 
go to http://localhost:5050/
the use the next credentials

email:
```
admin@mail.com
```

passport:
```
root
```

Create a server in pg admin
use next configurations 
In General
Name:
```
Docker Database
```

In Connection: 
Host name/address:
```
postgres
```

Port:
```
5432
```

username:
```
randald
```

passport:
```
admin123
```

# Run server
```
npm run dev
```






# Close all containers
```
docker-compose down
```
