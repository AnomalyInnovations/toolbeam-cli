<p align="center">
  <a href="https://toolbeam.com/">
    <img alt="Toolbeam" src="https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/images/logo.png" width="340" />
  </a>
</p>

<p align="center">
  <b>Convert your API to a native mobile tool</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/toolbeam-cli"><img alt="NPM Version" src="https://img.shields.io/npm/v/toolbeam-cli.svg?style=flat-square" /></a>
  <a href="https://gitter.im/toolbeam-cli/Lobby"><img alt="Chat on Gitter" src="https://img.shields.io/gitter/room/toolbeam-cli/lobby.svg?style=flat-square" /></a>
  <a href="https://github.com/AnomalyInnovations/toolbeam-cli/blob/master/license"><img alt="License" src="https://img.shields.io/badge/license-MIT-lightgrey.svg?style=flat-square" /></a>
</p>

------------------------------------------------------------------------------------

Toolbeam converts your API into a native cross-platform mobile tool. A quick example:

1. Take a GET API resource that returns a list of movies

   https://toolbeam-example-api-wgkghsyfrv.now.sh/top_movies

2. Add it to Toolbeam and create a tool

   ```bash
   > tb init https://toolbeam-example-api-wgkghsyfrv.now.sh
   > tb add /top_movies
   > tb push
   ```

3. Navigate to the tool on your phone

   :calling: &nbsp; **https://toolbeam.com/t/tnqjurvz**

   ![Example Gif](https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/examples/example.gif)

## Contents

+ [Features](#features)
+ [Get Started](#get-started)
+ [Examples](#examples)
+ [How it Works](#how-it-works)
+ [Documentation](#documentation)
  - [Toolbeam CLI](#toolbeam-cli)
    * [tb init](#tb-init-url)
    * [tb add](#tb-add-oprn-path-options)
    * [tb rm](#tb-rm-oprn-path)
    * [tb push](#tb-push)
    * [tb pull](#tb-pull-id)
    * [tb project ls](#tb-project-ls)
    * [tb project rm](#tb-project-rm-id)
    * [tb messageme](#tb-messageme)
    * [tb whoami](#tb-whoami)
  - [Toolbeam Spec](#toolbeam-spec)
    * [Project Options](#project-options)
    * [Tool Options](#tool-options)
    * [Field Options](#field-options)
  - [Linking Tools](#linking-tools)
  - [Toolbeam Notification API](#toolbeam-notification-api)
+ [Pricing](#pricing)
+ [Support](#support)
+ [License](#license)

## Features

+ **Native and Cross Platform**

  Tools run natively on iOS or Android without any additional setup.

+ **Simple Notification API**

  Send iOS or Android notifications to your tools using our simple notification API.

+ **Mobile Specific Form Fields**

  Form fields designed for mobile including geolocation, image, and video.

+ **Instant Updates**

  Updates made via the CLI are reflected immediately on your phone.

+ **Share via a Link**

  Share your tool with anybody via a link immediately after you create it.

## Get Started

1. Install [Node.js](https://nodejs.org/)
2. Install the Toolbeam CLI: `npm install -g toolbeam-cli`
3. Sign up for a Toolbeam account: `tb signup`

## Examples

Continuing with the movie example, we are going to create a set of tools to explore some of the features of Toolbeam. We are going to use a very simple JSON API that is publicly accessible and you can see the source for it [here](https://github.com/AnomalyInnovations/toolbeam-example-api/blob/master/index.js).

### Setting API Parameters

To start off, let's create a tool to get a movie given it's id. We'll use the API `GET /movies/{id}`.

```
> tb init https://toolbeam-example-api-wgkghsyfrv.now.sh
> tb add /movies/{id} --set-param name:id in:path field:number
```

The `id` parameter above is passed in through the path using path templating but can be passed through the query string, header, or form data. Read more about setting API Parameters using the `tb add` command [here](#tb-add-oprn-path-options).

We are also setting the field type for the `id` parameter to `number` to use the number keypad. We'll go over field types in a little more detail in the next example.

Running the two above commands create a [Open API Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) file called `toolbeam.json` in the current directory.

(Optionally, we'll edit the [spec](docs/examples/get-movie.md) manually to make our tool a bit more user friendly)

And now running `tb push` will push the spec to Toolbeam; creating the project and the tool.

```
> tb push
Loading toolbeam.json
Validating spec
Pushing toolbeam.json
Tools added:

  + Get a Movie
    -> https://toolbeam.com/t/oevonxry

Project created 'Classic Movies'
Run 'tb messageme' to send the links to your phone
```

Go ahead and navigate to **https://toolbeam.com/t/oevonxry** or run `tb messageme` to send the link to your phone and try it out.

<img alt="Example Screenshot" src="https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/examples/1.png" width="270" />

### Setting Field Types and Handling File Uploads

Let's make something a bit more complicated and explore the different field types. We'll create a new tool to edit the genre of the movie and upload a new poster. We are going to use the API `PUT /movies/{id}`. The API takes the `id` of the movie, the `genre`, and an image as the `poster`.

```
> tb add PUT /movies/{id} --set-param name:id in:path field:number \
                          --set-param name:genre in:formData field:select enum:Romance,Mystery,Fantasy,Thriller,Action \
                          --set-param name:poster in:formData field:image
```

We're using the `select` field type for the `genre` parameter and passing in the possible values using the `enum` option as a comma separated list.

To upload the `poster` we are using the `image` field type. When using a file field type (`image` or `video`) the API request uses the `multipart/form-data` encoding. Without a file field type, the API request is made using the `application/x-www-form-urlencoded` header for `formData` parameters. You can read more about the different field options [below](#tb-add-oprn-path-options).

(Optionally, you can edit the [spec](docs/examples/update-movie.md) to change the appearance of the tool)

Let's create the tool:

```
> tb push
```

And now navigate to **https://toolbeam.com/t/kldgocfm** and try taking a photo from your camera or uploading an image from your camera roll.

<img alt="Example Screenshot" src="https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/examples/2.png" width="320" />

### Using Basic Auth

Now let's look at deleting a movie and making it so that the user needs to authenticate to do so. We'll use the API `DELETE /movies/{id}` that requires basic auth with the username `admin` and password `password`.

```
> tb add DELETE /movies/{id} --set security:basic \
                             --set-param name:id in:path field:number
```

Notice that we are setting the the tool option `security`. You can read further about the other tool options [below](#tb-add-oprn-path-options).

(Optionally, we'll edit the [spec](docs/examples/delete-movie.md) to tweak the appearance of the tool)

Create the tool:

```
> tb push
```

Navigate to **https://toolbeam.com/t/moqulqnk** and try it with the basic auth info `admin:password`.

<img alt="Example Screenshot" src="https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/examples/3.png" width="270" />

### Sending Notifications

To explore how to use notifications, let's create a tool that'll notify us when a movie is playing near our location. We'll use the API `POST /movies/{id}/subscribe`; that takes the `id` of the movie and `location` of the user.

```
> tb add POST /movies/{id}/subscribe --set needsNotificationPermission:true \
                                     --set-param name:id in:path field:number \
                                     --set-param name:location in:formData field:geolocation
```

Notice that we set the flag `needsNotificationPermission` to indicate that we'd like to send the user notifications. Toolbeam makes it easy to send notifications using the [Toolbeam Notification API](#toolbeam-notification-api). Simply, send us the uuid of the tool and user you'd like to send the notification to, along with your API Key. You can get user uuid and the tool uuid from the request headers and your API Key by running `tb whoami`. You can read more about the Notification API [here](#toolbeam-notification-api).

Parameters sent using `formData` are passed in to the API using the `application/x-www-form-urlencoded` header. Also, the location of the user is passed in as a JSON object containing latitude and longitude. You can read more about the `geolocation` field type for the `tb add` command [here](#tb-add-oprn-path-options).

(Optionally, you can edit the [spec](docs/examples/subscribe-movie.md) to change the appearance of the tool)

Let's create the tool:

```
> tb push
```

And head over to **https://toolbeam.com/t/bcgrjtcu** to give it a try. Now after you subscribe to a movie, you should get a notification on your phone after about 10s!

If you are connecting to the example API using your own tools, the notifications will not work since the API Key used belongs to a demo account. Just be sure to grab your own API Key (using `tb whoami`) when trying to send notifications using your own API.

<img alt="Example Screenshot" src="https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/examples/4.png" width="320" />

### Linking Tools Together

While, the tools on their own are useful; linking them together allows us to create more complicated CRUD-like tools. We'll use the API `GET /movies`; that takes a keyword to search for matching movies and returns a list of movies. For the sake of the example it always returns the same list. In addition to the movie object, it also returns a couple fields with links to the tools we created in the above examples. Here are the extra fields returned by the API:

```javascript
{
  'edit': 'https://toolbeam.com/t/kldgocfm?id=${movie.id}&genre=${movie.genre}',
  'delete': 'https://toolbeam.com/t/moqulqnk/response?id=${movie.id}',
  'subscribe': 'https://toolbeam.com/t/bcgrjtcu?id=${movie.id}'
}
```

We are linking to the Edit, Delete, and Subscribe tools from above and passing in the info for the movie that is returned. By doing so Toolbeam will convert these fields into buttons that'll link to the specified tools. And the query string parameters in these urls are used as the default values in the linked tools.

Notice that the unlike the others, the delete tool is linking to `/response`. By doing so, it links directly to the response screen of the Delete tool and skips the form screen. You can read further about linking tools [below](#linking-tools).

Now let's add the API resource:

```
> tb add /movies --set-param name:keyword in:query
```

(Optionally, edit the [spec](docs/examples/search-movie.md) to change the appearance of the tool)

And create the tool:

```
> tb push
```

Head over to **https://toolbeam.com/t/dbgfrxpi** and search for a movie to give linking a try. If you are building your own tools by connecting to the example API, remember that the tools that are linked are the ones from a demo account.

<img alt="Example Screenshot" src="https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/examples/5.png" width="320" />

## How it Works

Running `tb init` and `tb add` creates an [Open API Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) JSON file called `toolbeam.json` describing the API resource in the current directory. And `tb push` uploads this to Toolbeam.com and creates the tools. The tools talk directly to your API and the data transferred is not stored on the device or on our servers.

<img alt="Flowchart" src="https://github.com/AnomalyInnovations/toolbeam-cli/raw/master/docs/images/flow.png" width="710" />

## Documentation

### Toolbeam CLI

```
Usage: tb <command>

Commands:
  signup             Sign up for Toolbeam
  login              Login to Toolbeam
  init <url>         Initialize your Toolbeam project
  add [oprn] <path>  Add an API resource as a tool
  rm [oprn] <path>   Remove the given API resource
  push               Push your current project spec to Toolbeam
  pull [id]          Pull your current project spec from Toolbeam
  project            View and manage your projects
  messageme          Send a text message with your recently created tools
  whoami             Info about current logged in user
  logout             Logout from Toolbeam
```

### tb init \<url\>

Initialize a new Toolbeam project with the given base url. Group all your API resources that are under the same base url into a single project. Conversely, create a new project for when adding an API resource that has a different base url.

**Arguments**

+ \<url\>

  The base url of your API.

**Examples**

+ Initilize your Example API project.

  `tb init http://api.example.com`

+ Include the base path of your API.

  `tb init http://api.example.com/v1`

### tb add [oprn] \<path\> [options]

Add an API resource with the given path as a tool. The path is relative to the base url of the current project.

**Arguments**

+ [oprn]:GET|POST|PUT|PATCH|DELETE

  The HTTP operation of the resource. Defaults to GET.

+ \<path\>

  The path of your API resource. Supports path templating. Use curly braces ({}) to mark a section of a URL path as replaceable using path parameters.

**Options**

+ --set

  Set \<key\>:\<value\> options for the tool [array]

  | Option                      | Description |
  | --------------------------- | ----------- |
  | security                    | Type of security;  `basic` for basic auth or `none` for no authentication. Defaults to `none`. |
  | needsNotificationPermission | Set to `true` if your tool needs to send notifications to the user. It will prompt the user for permission. Defaults to `false`. |

+ --set-param

  Set a parameter for the tool and \<key\>:\<value\> options [array]

  | Option | Description |
  | -----  | ----------- |
  | name   | **Required** The name of the parameter. This will be used in path templating and in the headers depending on where it is used. |
  | in     | **Required** The type of the parameter and where it will be used. <ul><li>`path`: Used to replace the parameter in path templating. The parameter `foo` will be applied to the base API path `/movies/{foo}`.</li><li>`query`: Parameter will be added to the query string for the request.</li><li>`header`: Parameter will be added as a custom header for the request.</li><li>`formData`: The request will be made using `application/x-www-form-urlencoded` or `multipart/form-data`. If there are no parameters with field type `image` or `video`, then the parameters will be passed in the request body similar to the query string format of `foo=1&bar=value` using `application/x-www-form-urlencoded`. But in the presence of a paramter with field type `image` or `video`; the request will be encoded using `multipart/form-data`.</li></ul> |
  | field  | The type of field used in the UI. Defaults to `text`.<ul><li>`text`: Displays the standard alphanumeric keypad on field focus.</li><li>`number`: Displays the number keypad on field focus.</li><li>`email`: Displays the email keypad on field focus.</li><li>`hidden`: The field is not displayed to the user.</li><li>`select`: The field is displayed as a picker. Use in conjuction with `enum` to display a list of options.</li><li>`image`: Let's the user upload an image from their camera roll or take a photo with their camera. The API request is made using `multipart/form-data`.</li><li>`video`: Similar to `image` but let's the user upload a video.</li><li>`geolocation`: Prompts the user for their current location and passes that to the API as a JSON object with `latitude` and `longitude` (ex:`{"latitude":43.64,"longitude":-79.37}`).</li></ul>|
  | enum   | Comma separated list of option in a select picker. Used in conjuction with field type `select`. |

**Examples**

+ Add a GET resource with no parameters as a tool.

  `tb add /movies`

+ Add a POST resource as a tool.

  `tb add POST /movies/31/like`

+ Add a GET resource with security type basic auth.

  `tb add /movies/upload --set security:basic`

+ Add a POST resource with security type basic auth that needs to send notifications.

  `tb add POST /movies/upload --set security:basic needsNotificationPermission:true`

+  Add a GET resource with a paramter using path templating.

  `tb add /movies/{id} --set-param name:id in:path`

+ Add a GET resource with two query string parameters.

  ```
  tb add /movies/search \
         --set-param name:keyword in:query \
         --set-param name:sort in:query
  ```

+ Add a DELETE resource with a header parameter.
  
  ```
  tb add DELETE /movies/1/remove \
         --set-param name:session_key in:header
  ```

+ Add a POST resource with three form data parameters and one with field type select.

  ```
  tb add POST /movies/add \
         --set-param name:title in:formData field:text \
         --set-param name:year in:formData field:number \
         --set-param name:genre in:formData field:select enum:comedy,drama,romance,action
  ```

### tb rm [oprn] \<path\>

Remove an API resource with the given path from the spec. This does the opposite of `tb add`.

**Arguments**

+ [oprn]:GET|POST|PUT|PATCH|DELETE

  The HTTP operation of the resource. Defaults to GET.

+ \<path\>

  The path of your API resource to remove.

**Examples**

+ Remove the /movies GET resource from the spec.

  `tb add /movies`

+ Remove a POST resource from the spec.

  `tb add POST /movies/{id}/like`

### tb push

Push your current spec to Toolbeam. Looks for the `toolbeam.json` in the current directory. Creates or removes the tools in your spec.

### tb pull [id]

Pull the spec for your current project. Optionally, pull a specific project spec by passing in a project id. You can get the id of a project by using the `tb project ls` command.

**Examples**

+ Pull the current project spec

  `tb pull`

+ Pull the spec of the given project

  `tb pull stqpliww`

### tb project ls

List all your projects along with their project ids. And all the tools with their shareable URLs.

### tb project rm \<id\>

Removes a project and all their tools. The tools in the project will also be removed from any users that have them. This command cannot be undone, please use with caution.

**Arguments**

+ \<id\>

  The id of the project. You can look up a project's id using `tb project ls`.

**Examples**

+ Remove the project with the given id

  `tb project rm stqpliww`

### tb messageme

Sends a text message to the given number with the 3 most recently created tools. Uses [TextBelt](http://textbelt.com) to send the messages.

**Example**

+ Sample text message

  ```
  Toolbeam:

  Get Top Movies - https://toolbeam.com/t/tnqjurvz

  Find a Classic Movie - https://toolbeam.com/t/dbgfrxpi

  Subscribe to Movie - https://toolbeam.com/t/bcgrjtcu
  ```

### tb whoami

Shows information about the current logged in session. Also, shows the API key of the current user.

### Toolbeam Spec

Under the hood, running `tb init` and `tb add` creates an [Open API Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) JSON file describing the API in the current directory. To further customize your tools you can directly edit the spec and then run `tb push` to update your tools. Below is an annotated spec as an example.

```javascript
{
  // <!--- Project options go here --->
  "swagger": "2.0",
  "info": {
    "title": "Acme Api", // A name for your Toolbeam project
    "version": "1.0.0",
    "x-tb-uuid": "e5433e29" // The UUID for the project, do not change
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
        "operationId": "a10khwea", // Unique identifier for the tool, do not change
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

### Project Options

+ **info.title**:[string]

  The name of the current project.

+ **info.x-tb-uuid**:[string]

  The UUID for the project, generated after the first `tb push`. Do not change.

+ **host**:[string]

  The host name of your API

+ **basePath**:[string]

  The base path of your API, relative to the API host.

### Tool Options

+ **x-tb-name**:[string]

  The name of the tool. If not provided, Toolbeam generates a name.

+ **x-tb-color:**red|blue|orange|green|purple

  The color of the tool.

+ **summary**:[string]

  A small summary of the tool that is displayed at the top. Can be used to provide the user with a helpful description.

+ **operationId**:[string]

  A unique id that is used to identify the tool. Please do not change.

+ **x-tb-actionLabel**:[string]

  The label of the submit button of the tool.

+ **x-tb-needsConfirm**:[boolean]

  True if a confirm dialog should be presented on submit.

+ **x-tb-needsNotificationPermission**:[boolean]

    True if the tool needs to ask the user permission to send notifications.

### Field Options

+ **name**:[string]

  The name of the parameter. This will be used in path templating and in the headers depending on where it is used. This option is required.

+ **in**:path|query|header|formData

  The type of the parameter and where it will be used. This option is required.

    - path

      Used to replace the parameter in path templating. The parameter `foo` will be applied to the base API path `/movies/{foo}`.

    - query

      Parameter will be added to the query string for the request.
    - header
    
      Parameter will be added as a custom header for the request.

    - formData
    
      The request will be made using `application/x-www-form-urlencoded` or `multipart/form-data`. If there are no parameters with field type `image` or `video`, then the parameters will be passed in the request body similar to the query string format of `foo=1&bar=value` using `application/x-www-form-urlencoded`. But in the presence of a paramter with field type `image` or `video`; the request will be encoded using `multipart/form-data`.

+ **required**:[boolean]

  True if this is a required field.

+ **default**:[string]

  The default value of the field.

+ **x-tb-fieldLabel**:[string]

  The label for the field. If not provided, the `name` is used as the label.

+ **x-tb-fieldPlaceholder**:[string]

  The placeholder text for the field. If not provided, the `type` is used as the placeholder.

+ **x-tb-fieldType**:text|number|email|select|hidden

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
    ```javascript
    {
      "name": "type",
      "in": "query",
      "type": "string",
      "x-tb-fieldType": "select",
      "enum": ["casual_users", "paying_users"], // This is sent in the API request
      "x-tb-fieldEnumLabel": ["Casual Users", "Paying Users"] // This is shown to the user
    }
    ```

  - image

    Let's the user upload an image from their camera roll or take a photo with their camera. The API request is made using `multipart/form-data`.

  - video

    Similar to `image` but let's the user upload a video.

  - geolocation
    
    Prompts the user for their current location and passes that to the API as a JSON object with `latitude` and `longitude`. For example, a geolocation field will pass in the following in the API request; `{"latitude":43.64,"longitude":-79.37}`.

+ **enum**:[array]

  An array of values used by the picker if the `x-tb-fieldType` is select. The index corresponding the selected item in the picker is passed in the request.

+ **x-tb-fieldEnumLabel**:[array]
  
    An array of values displayed as the options in the picker. If not provided, `enum` is displayed as the options.

### Linking Tools

Toolbeam auto converts `https://toolbeam.com/t/{toolId}` urls in an API response into a button that directs users to the specified tool. By using these links we can chain tools together. This is useful for cases where you want a user to execute an action based on what is returned from a tool.

**Types of Links**

+ Link to the tool

  Link to a tool by returning `https://toolbeam.com/t/{toolId}?paramName={defaultValue}` in your API. In the query string of the url you can add the parameters of the tool that you would like to initialize with.

+ Link directly to the tool response screen

  You can also directly link to the response screen of a tool by returning the url `https://toolbeam.com/t/{toolId}/response?paramName={defaultValue}`. This is effectively making the API request of the tool with the passed in parameters.

**Examples**

Suppose your API responded with a user object. And you had a Edit User Info tool @ `https://toolbeam.com/t/whvhltqmi`.

```javascript
{
  "user_id": 512,
  "username": "jdoe",
  "email": "jdoe@example.com",
  "edit": <link>
}
```

Then you could do the following by returning these links:

+ Link to the Edit User Info tool

  `https://toolbeam.com/t/whvhltqmi`

+ Link to the tool with parameter `user_id` initialized to `512`

  `https://toolbeam.com/t/whvhltqmi?user_id=512`

+ Link to the tool with parameter `user_id` and `type` initialized

  `https://toolbeam.com/t/whvhltqmi?user_id=512&type=admin`

+ Link directly to the response screen of a tool with parameters `user_id` and `type`

  `https://toolbeam.com/t/whvhltqmi/response?user_id=512&type=admin`

### Toolbeam Notification API

To send notifications to your tools in Toolbeam we have a simplified API to use. Set `needsNotificationPermission` to `true` while creating your tool with `tb add`. Refer to [tb add](#tb-add-oprn-path-options) for further details. By setting this flag, Toolbeam asks the user permission to send notifications and stores the user's preference. You can then make requests to the Toolbeam Notification API below to send your users notifications. 

```
POST https://api.toolbeam.com/v1/app/send_notifications
```

The notifications API needs your API Key, you can get this by running `tb whoami`. And it needs the uuid's of the tool and user we are going to be sending notifications to. This is passed in the request headers when Toolbeam makes a request to your API. Here is a sample of the headers that are a part of a Toolbeam request.

```
Content-Type: application/x-www-form-urlencoded
User-Agent: Toolbeam/1.12.20 CFNetwork/808.0.2 Darwin/15.6.0
Connection: keep-alive
Accept: */*
Accept-Language: en-us
TB-User-UUID: adqlymds
TB-Tool-UUID: bcgrjtcu
Accept-Encoding: gzip, deflate
```

The notification API ensures that you own the tool you are sending notifications to. And that the user you are sending to is subscribed to the tool.

**Request Parameters**

  + **message** in:query

    The message to be sent in the notification.

  + **user_uuid** in:query

    The UUID of the recipient user. An identifier for a user. This is passed in through the header of every single request made to your API by Toolbeam. Passed in as `TB-User-UUID`.

  + **tool_uuid** in:query

    The uuid of the tool that we are sending notifications to. This is passed in through the header of every single request made to your API by Toolbeam. Passed in as `TB-Tool-UUID`.

  + **API-KEY** in:header

    The API key of your account. You can find this by running `tb whoami`.

**Response**

  + 200

    The notifications have been successfully sent.

  + 500

    There was a problem sending the notification.

**Examples**

  + Send a simple "hello world" message using cURL

    ```
    > curl -X POST -H "API-KEY: <Your API KEY>" \
           -d message=hello%20world&user_uuid=<Recipient User UUID>&tool_uuid=<Recipient Tool UUID> \
           https://api.toolbeam.com/v1/app/send_notifications
    ```

## Pricing

Toolbeam is free to use. Tools can be accessed by anybody via the share url.

If you'd like to create private tools for your team, feel free to contact us via [email](mailto:contact@toolbeam.com).

## Support

Need help figuring something out? Chat with us on [Gitter](https://gitter.im/toolbeam-cli/Lobby) or send us an [email](mailto:contact@toolbeam.com).

Have a feature request or find a bug? Open a [new issue](https://github.com/AnomalyInnovations/toolbeam-cli/issues/new).

## License

Copyright (c) 2016 Anomaly Innovations

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.
