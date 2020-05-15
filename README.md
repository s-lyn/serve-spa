# serve-spa

Simple server based on [zeit/serve-handler](https://github.com/zeit/serve-handler)
to serve the Single Page Application (SPA) or other static sites in docker
containers.

The mail feature is to send the environment variables from the
container executor to the client. It uses a HTTP header
`Set-Cookie: clientConfig={...}` on server and you can read
this values in browser with JavaScript.


## How to use this image

### start to serve your application

```bash
docker run -it -p 8080:8080 -v /your/public:/usr/share/public:ro slynn/serve-spa
```


## Examples

TODO: Add the examples for docker and docker-compose.


## Configuration

You can configure the container with environment variables:

| Environment variable | Default value | Description |
|----------------------|---------------|-------------|
| INCLUDE_KEYS | `""` (empty string) | Comma-separated list of environment variables to send to cookie |
| COOKIE_KEY | `clientConfig` | Cookie key to use on the server |
| FILES_MATCH | `**/*.@(html\|htm)` | Match files where cookie config shoul be added (string with [minimatch](https://github.com/isaacs/minimatch) support) |
