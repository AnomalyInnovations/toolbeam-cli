# Toolbeam

[Toolbeam](https://toolbeam.com) converts your API to a native cross-platform mobile tool.

[![NPM Version][npm-image]][npm-url]


## How it works

Toolbeam converts REST APIs to native mobile tools. Let's look at an example:

1. Take a GET API resource that returns the status of the server

   ```
   http://api.example.com/v1/test/dummy_server_status
   ```

2. Add it to Toolbeam and create a tool

   ```
   > tb init http://api.example.com/v1/test
   > tb add /dummy_server_status
   > tb push
   ```

3. Navigate to the tool on your phone

   :calling: &nbsp; **https://toolbeam.com/t/qoqivpum**

   <!---
   ![Tool](http://i.imgur.com/TtNaEfP.gif)
   -->

## Features

+ **Native and Cross Platform**

  Tools run natively on iOS or Android without any additional setup.

+ **Instant Updates**

  Updates made via the CLI are reflected immediately on your phone.

+ **Simple Notification API**

  Send iOS or Android notifications to your tools using our simple notification API.

+ **Share via a Link**

  Share your tool with anybody via a link immediately after you create it.

## Get Started

1. Install [Node.js](https://nodejs.org/)
2. Install the Toolbeam CLI: `npm install -g toolbeam-cli`
3. Sign up for a Toolbeam account: `tb signup`

## Examples

TODO: List all the different examples

## Toolbeam CLI

```
Usage: tb <command>

Commands:
  signup       Sign up for Toolbeam
  login        Login to Toolbeam
  init <url>   Initialize your Toolbeam project
  add <path>   Add an API resource as a tool
  ls           List all your tools
  pull         Pull your spec from Toolbeam
  push <file>  Push your spec to Toolbeam
  whoami       Info about current logged in user
  logout       Logout from Toolbeam

Options:
  -h, --help     Show help  [boolean]
  -v, --version  Show version number  [boolean]
```

### tb init \<url\>

**Arguments**

+ \<url\>

  The base url of your API.

**Examples**

+ Initilize your Example API project.

  `tb init http://api.example.com`

+ Include the base path of your API.

  `tb init http://api.example.com/v1`

### tb add \<path\> [options]

**Arguments**

+ \<path\>

  The path of your API resource. Supports path templating. Use curly braces ({}) to mark a section of a URL path as replaceable using path parameters.

**Options**

+ --set

  Set \<key\>:\<value\> options for the tool [array]

  - operation:[GET|POST|PUT|DELETE]

    The HTTP operation for this resource. Defaults to GET.

  - security:[basic|none]

    Type of security; 'basic' for basic auth or 'none' for no authentication. Defaults to 'none'.

+ --set-param

  Set a parameter for the tool and \<key\>:\<value\> options [array]

  - name:[string]

    The name of the parameter. This will be used in path templating and in the headers depending on where it is used.

  - in:[path|query|header|formData]

    The type of the parameter and where it will be used.

    * path
  
      Used to replace the parameter in path templating. The parameter `foo` will be applied to the base API path `/movies/{foo}`.
  
    * query
  
      Parameter will be added to the query string for the request.
  
    * header
  
      Parameter will be added as a custom header for the request.
  
    * formData
  
      HTTP request will be made as `application/x-www-form-urlencoded` and parameter will be passed in the request body similar to the query string format of `foo=1&bar=value`.

**Examples**

+ Add a GET resource with no parameters as a tool.

  `tb add /movies`

+ Add a POST resource as a tool.

  `tb add /movies/31/like --set operation:POST`

+ Add a GET resource with security type basic auth.

  `tb add /movies/upload --set security:basic`

+  Add a GET resource with a paramter using path templating.

  `tb add /movies/{id} --set-param name:id in:path`

+ Add a GET resource with two query string parameters.

  ```
  tb add /movies/search \
         --set-param name:query in:query \
         --set-param name:sort in:query
  ```

+ Add a DELETE resource with a header parameter.
  
  ```
  tb add /movies/1/remove \
         --set operation:DELETE \
         --set-param name:session_key in:header
  ```

+ Add a POST resource with two form data parameters.

  ```
  tb add /movies/add \
         --set operation:POST \
         --set-param name:title in:formData \
         --set-param name:year in:formData
  ```

## Toolbeam Spec

Running `tb init <url>` and `tb add <path>` creates an [Open API Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) json file describing the API resource in the current directory. To further customize your tool you can directly edit the spec and then run `tb push` to update your tools. Below is an annotated spec as an example.

```javascript
{
  "swagger": "2.0",
  "info": {
    "title": "Acme Api",
    "version": "1.0.0"
  },
  "host": "api.example.com", // API Host
  "basePath": "/v1", // API Basepath
  "schemes": [
    "https" // Supported URL Schemes
  ],
  // Add a definition for the security type used
  "securityDefinitions": {
    "basic_auth": {
      "type": "basic"
    }
  },
  "paths": {
    // Add a Resource
    "/users/{id}": {
      // Specify the Operation Type
      // This block represents a tool
      "get": {
        // <!--- Tool options go here --->
        "x-tb-name": "List of Users", // Name of the tool
        "x-tb-color": "red", // Color of the tool
        "summary": "This tool gets the info about the given user", // Helpful description for the tool
        "operationId": "get_users", // Unique identifier for the tool
        "security": [
          {
            "basic_auth": [] // Use the security definition from above
          }
        ],
        "parameters": [
          {
            // <!--- Field options go here --->
            "name": "id", // Parameter name
            "in": "path", // Where the param is used
            "required": true, // If the user needs to enter it
            "type": "string",
            "default": "819", // Default value for the field
            "x-tb-fieldType": "text", // Type of the field in the tool
            "x-tb-fieldLabel": "User Id", // Label for the field in the tool
            "x-tb-fieldPlaceholder": "Ex: 314159" // Placeholder for the field
          }
        ],
        "responses": {
          "200": {
            "description": "Results"
          }
        },
        "x-tb-actionLabel": "Get User", // Label for the button in the tool
        "x-tb-needsConfirm": false, // Confirm before submitting the tool
        "x-tb-needsNotificationPermission": false // Request notification permission from the user
      }
    }
  }
}
```

Below is a more detailed explanation of the fields that are used.

### Tool Options

+ x-tb-name:[string]

  The name of the tool. If not provided, Toolbeam generates a name.

+ x-tb-color:[red|blue|orange|green|purple]

  The color of the tool.

+ summary:[string]

  A small summary of the tool that is displayed at the top. Can be used to provide the user with a helpful description.

+ operationId:[string]

  A unique id that is used to identify the tool. If changed, Toolbeam will generate a new tool.

+ x-tb-actionLabel:[string]

  The label of the submit button of the tool.

+ x-tb-needsConfirm:[boolean]

  True if a confirm dialog should be presented on submit.

+ x-tb-needsNotificationPermission:[boolean]

    True if the tool needs to ask the user permission to send notifications.

### Field Options

+ name:[string]

  The name of the parameter. This will be used in path templating and in the headers depending on where it is used. This option is required.

+ in:[path|query|header|formData]

  The type of the parameter and where it will be used. This option is required.

+ required:[boolean]

  True if this is a required field.

+ default:[string]

  The default value of the field.

+ x-tb-fieldLabel:[string]

  The label for the field. If not provided, the `name` is used as the label.

+ x-tb-fieldPlaceholder:[string]

  The placeholder text for the field. If not provided, the `type` is used as the placeholder.

+ x-tb-fieldType:[text|number|email|select|hidden]

  The type of the field.

  - text
    
    Displays the standard alphanumeric keypad on field focus.

  - number
    
    Displays the number keypad on field focus.

  - email
    
    Displays the email keypad on field focus.

  - hidden
    
    The field is not displayed to the user. Can be used in conjuction with setting a  `default` to pass some data in the request that does not change.

  - select
    
    The field is displayed as a picker. Use in conjuction with `enum` and `x-tb-fieldEnumLabel`. As an exmaple here is a param block for a select:
    ```
    {
      "name": "type",
      "in": "query",
      "type": "string",
      "x-tb-fieldType": "select",
      "enum": ["casual_users", "paying_users"], // This is sent in the API request
      "x-tb-fieldEnumLabel": ["Casual Users", "Paying Users"] // This is shown to the user
    }
    ```

+ enum:[array]

  An array of values used by the picker if the `x-tb-fieldType` is select. The index corresponding the selected item in the picker is passed in the request.

+ x-tb-fieldEnumLabel:[array]
  
    An array of values displayed as the options in the picker. If not provided, `enum` is displayed as the options.


## Support

Have a feature request or find a bug? [Open a new issue](https://github.com/AnomalyInnovations/toolbeam-cli/issues/new) or contact us via [email](mailto:contact@anomalyinnovations.com).

## License

Copyright (c) 2016 Anomaly Innovations

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.

[npm-image]: https://img.shields.io/npm/v/toolbeam-cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/toolbeam-cli
