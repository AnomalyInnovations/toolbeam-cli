Below is the annotated version of the spec with the changes made. View the [complete spec](search-movie.json). See the full list of options that Toolbeam uses [here](/README.md#toolbeam-spec).

```javascript
{
  "swagger": "2.0",
  "info": {
    "title": "Classic Movies",
    "version": "1.0.0"
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
        ... // This is unchanged from before
      }
    },
    "/movies": {
      "get": {
        "x-tb-name": "Find a Classic Movie", // Change the tool name
        "operationId": "lwtnxikt",
        "security": [],
        "parameters": [
          {
            "name": "keyword",
            "in": "query",
            "required": true,
            "type": "string",
            "x-tb-fieldLabel": "Keyword",
            "x-tb-fieldPlaceholder": "Ex: Ben-Hur", // Add a placeholder
            "x-tb-fieldType": "text"
          }
        ],
        "responses": {
          "200": {
            "description": "Search Results" // Change the response text
          }
        },
        "x-tb-actionLabel": "Search", // Change the button text
        "x-tb-color": "orange", // Change the tool color
        "x-tb-needsConfirm": false,
        "x-tb-needsNotificationPermission": false
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
