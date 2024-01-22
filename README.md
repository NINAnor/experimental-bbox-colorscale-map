# Northwind maps

Northwind maps is a set of maps for the [Northwind project](https://www.northwindresearch.no/)


## Running the webapp

The only requirement is having a web server which supports HTTP bytes serving/ranged requests, such as NGINX.

### Development

```bash
docker compose --profile dev up --build
```

Then, the application can be seen by visiting [http://localhost:8000/](http://localhost:8000/).

### Production

Same as development, but using the `prod` profile:

```bash
docker compose --profile prod up
```
