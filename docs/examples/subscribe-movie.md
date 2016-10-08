Below is the annotated version of the spec with the changes made. The complete spec is available [here](docs/examples/subscribe-movie.json).

```javascript
{
  "swagger": "2.0",
  "info": {
    "title": "Classic Movies",
    "version": "1.0.0",
    "x-tb-uuid": "kwdxpjpc"
  },
  "host": "toolbeam-example-api-ynqjhhiqee.now.sh",
  "schemes": [
    "https"
  ],
  "paths": {
    "/movies/{id}": {
      "get": {
        ... // This is unchanged from before
      },
      "put": {
        ... // This is unchanged from before
      },
      "delete": {
        ... // This is unchanged from before
      }
    },
    "/movies/{id}/subscribe": {
      "post": {
        "x-tb-name": "Subscribe to Movie", // Name the tool
        "operationId": "twxhdser",
        "security": [],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string",
            "x-tb-fieldLabel": "Movie Id", // Change the field label
            "x-tb-fieldPlaceholder": "Ex: 4", // Add a placeholder
            "x-tb-fieldType": "number"
          },
          {
            "name": "location",
            "in": "formData",
            "required": true,
            "type": "string",
            "x-tb-fieldLabel": "Location",
            "x-tb-fieldPlaceholder": "Your Current Location…", // Add a placeholder
            "x-tb-fieldType": "geolocation"
          }
        ],
        "responses": {
          "200": {
            "description": "Subscribed" // Add some response text
          }
        },
        "x-tb-actionLabel": "Notify Me", // Change the button text
        "x-tb-color": "purple", // Change the tool color
        "x-tb-needsConfirm": false,
        "x-tb-needsNotificationPermission": true
      }
    }
  },
  "securityDefinitions": {
    "basic_auth": {
      "type": "basic"
    }
  }
}
```
