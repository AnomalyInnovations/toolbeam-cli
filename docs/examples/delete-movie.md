Below is the annotated version of the spec with the changes made. View the [complete spec](delete-movie.json). See the full list of options that Toolbeam uses [here](/README.md#toolbeam-spec).

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
        "x-tb-name": "Delete Movie", // Give our tool a name
        "operationId": "vskhioho",
        "security": [
          {
            "basic_auth": []
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string",
            "x-tb-fieldLabel": "Movie Id", // Change the field label
            "x-tb-fieldPlaceholder": "Ex: 4", // Add a placeholder text
            "x-tb-fieldType": "number"
          }
        ],
        "responses": {
          "200": {
            "description": "Movie Deleted" // Add some response text
          }
        },
        "x-tb-actionLabel": "Delete", // Change the button text
        "x-tb-color": "red", // Change the button color
        "x-tb-needsConfirm": true, // Confirm before deleting
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
