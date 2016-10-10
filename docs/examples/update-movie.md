Below is the annotated version of the spec with the changes made. View the [complete spec](update-movie.json). See the full list of options that Toolbeam uses [here](/README.md#toolbeam-spec).

```javascript
{
  "swagger": "2.0",
  "info": {
    "title": "Classic Movies",
    "version": "1.0.0"
  },
  "host": "toolbeam-example-api-mdoemmcvce.now.sh",
  "schemes": [
    "https"
  ],
  "paths": {
    "/movies/{id}": {
      "get": {
        ... // This is unchanged from before
      },
      "put": {
        "x-tb-name": "Edit Movie", // Change the tool name
        "operationId": "bghmbzjv",
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
          },
          {
            "name": "genre",
            "in": "formData",
            "required": true,
            "type": "string",
            "x-tb-fieldLabel": "Genre",
            "x-tb-fieldPlaceholder": "Select a Genre…", // Add a placeholder
            "x-tb-fieldType": "select",
            "enum": [
              "Romance",
              "Mystery",
              "Fantasy",
              "Thriller",
              "Action"
            ],
            "x-tb-fieldEnumLabel": [
              "Romance",
              "Mystery",
              "Fantasy",
              "Thriller",
              "Action"
            ]
          },
          {
            "name": "poster",
            "in": "formData",
            "required": false, // Let's not make this a required field
            "type": "file",
            "x-tb-fieldLabel": "Poster",
            "x-tb-fieldPlaceholder": "Choose a photo", // Add a placeholder
            "x-tb-fieldType": "image"
          }
        ],
        "responses": {
          "200": {
            "description": "Movie Info Updated" // Add some response text
          }
        },
        "x-tb-actionLabel": "Submit",
        "x-tb-color": "green", // Change the color
        "x-tb-needsConfirm": false,
        "x-tb-needsNotificationPermission": false
      }
    }
  }
}
```
