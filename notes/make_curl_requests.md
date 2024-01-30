# Making http requests using curl 📗

## GET Request 📌
``` bash
>> curl -X 'GET' localhost:3000/
>> curl -X 'GET' localhost:3000/authors/1
```
## POST Request 📌
``` bash
>> curl -d "name=Tiger Boss" -X 'POST' localhost:3000/authors/
```
## PUT Request 📌
``` bash 
>> curl -X 'PUT' -d argument=value -d argument=value localhost:3000/endpoint
>> curl -X 'PUT' -d "name=Nikhil" localhost:3000/authors/d4183a96-6231-4b90-a9d7-ae8823d94bf7
```

## Delete Request 📌
``` bash
>> curl -X 'DELETE' localhost:3000/authors/:id
>> curl -X 'DELETE' localhost:3000/authors/89199614-2559-4577-9303-06f70c541d1c
```
