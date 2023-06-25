# Leechineo Backend Plugin

## Description
The Leechineo Backend Plugin is a powerful Node.js package designed to streamline backend development tasks. It provides error handling utilities, database communication capabilities, and useful plugins to enhance your project's functionality.
## Features

### Error Handling
The Leechineo Backend Plugin offers a comprehensive error handling system that simplifies the process of sending standardized HTTP error responses. This makes it easier to handle and communicate errors throughout your application. The plugin includes pre-defined error classes for various categories, such as account-related errors, address errors, authentication errors, cart errors, category errors, credit card errors, payment errors, product errors, setting errors, shipping method errors, ticket errors, and zipcode errors. Each error class provides detailed information and appropriate status codes for easy identification and troubleshooting.

### Database Communication
The Leechineo Backend Plugin facilitates seamless communication with [ms-database-manager](https://github.com/Leechineo/ms-database-manager). It provides a unified and consistent interface to perform CRUD (Create, Read, Update, Delete) operations on different models or collections within the database. The plugin supports the following methods for each model:

* `create(props)`: Creates a new record in the model with the provided properties.
* `find(params)`: Retrieves records from the model based on specified filters and sorting criteria.
* `findById(id, params)`: Retrieves a single record from the model based on the provided ID.
* `findByIdAndUpdate(id, props)`: Updates a record in the model with the specified ID and properties.
* `findByIdAndDelete(id)`: Deletes a record from the model with the specified ID.
* `findOne(filters)`: Retrieves a single record from the model based on the provided filters.
* `findOneAndUpdate(filters, props)`: Updates a record in the model that matches the provided filters with the specified properties.
* `findOneAndDelete(filters)`: Deletes a record from the model that matches the provided filters.

These methods allow you to interact with your database effortlessly, perform complex queries, and manipulate data efficiently.

### Useful Plugins
The Leechineo Backend Plugin also includes various helpful plugins to enhance your development experience. The currently available plugin is:

* `isStringParsableToObj(string)`: A utility function that checks whether a given string can be parsed into a valid JSON object. It returns true if the string is parsable, and false otherwise.
## Installation

To install the Leechineo Backend Plugin, follow these steps:

1. Open your project's `package.json` file.
2. Locate the `"dependencies"` section.
3. Add the following line to the `"dependencies"` section:

```json
"leechineo-backend-plugin": "https://github.com/Leechineo/leechineo-backend-plugin.git"
```
Make sure the `"dependencies"` section maintains the correct JSON formatting. In the end, the relevant portion of your `package.json` should look like this:

```json
"dependencies": {
  "leechineo-backend-plugin": "https://github.com/Leechineo/leechineo-backend-plugin.git",
  // other dependencies of your project...
}
```
4. Save the `package.json` file.

After adding the dependency, you can run the `yarn` or `npm install` command in your project's directory to install the Leechineo Backend Plugin from the specified Git repository. Yarn or NPM will download and install the package as needed.

Please ensure you have a stable internet connection and that the Git repository is public and accessible so that NPM can download the package correctly.
## Usage

1. Import the Leechineo class from the package:

```javascript
const Leechineo = require('leechineo-backend-plugin')
```
2. Create an instance of the Leechineo class, providing the necessary configuration options as environment variables:

```javascript
const leechineo = new Leechineo('your-database-password')
```
3. Access the models and plugins using the instance of the Leechineo class. For the models, it is recommended to use an async function. For example:

```javascript
const coolFunction = async () => {
    const users = await leechineo.user.find()
    const brands = await leechineo.brand.find()
    const isParsable = leechineo.plugins.isStringParsableToObj('{"key": "value"}')
}
```

## Configuration

The Leechineo Backend Plugin relies on the following environment variables for configuration:

* `LEECHINEO_AUTH_HASH`: The hash used by the `jsonwebtoken` library to generate a unique authentication token for communicating with the database microservice.

* `DB_MANAGER_URL`: The URL of the database microservice that will receive the HTTP requests.

Make sure to set these environment variables in your project before using the Leechineo Backend Plugin.
## License

This project is licensed under the [MIT License](/LICENSE)

