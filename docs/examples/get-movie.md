Below is the annotated version of the spec with the changes made. View the [complete spec](get-movie.json). See the full list of options that Toolbeam uses [here](/README.md#toolbeam-spec).

```javascript
{
  "swagger": "2.0",
  "info": {
    "title": "Classic Movies", // Give our project a name
    "version": "1.0.0"
  },
  "host": "toolbeam-example-api-usbvhngxwi.now.sh",
  "schemes": [
    "https"
  ],
  "paths": {
    "/movies/{id}": {
      "get": {
        "x-tb-name": "Get a Movie", // Give our tool a name
        "operationId": "fpaehmze",
        "security": [],
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
            "description": "Movie Info" // Add some helpful response text
          }
        },
        "x-tb-actionLabel": "Get Movie", // Change the label on the button
        "x-tb-color": "blue", //Change the color
        "x-tb-needsConfirm": false,
        "x-tb-needsNotificationPermission": false
      }
    }
  }
}
```
