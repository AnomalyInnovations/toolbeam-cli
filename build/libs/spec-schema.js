"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  "title": "A JSON Schema for Swagger 2.0 API.",
  "id": "#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "required": ["swagger", "info", "paths"],
  "additionalProperties": false,
  "patternProperties": {
    "^x-([^t]|(t[^b]))": {
      "$ref": "#/definitions/vendorExtension"
    }
  },
  "properties": {
    "swagger": {
      "type": "string",
      "enum": ["2.0"],
      "description": "The Swagger version of this document."
    },
    "info": {
      "$ref": "#/definitions/info"
    },
    "host": {
      "type": "string",
      "pattern": "^[^{}/ :\\\\]+(?::\\d+)?$",
      "description": "The host (name or ip) of the API. Example: 'swagger.io'"
    },
    "basePath": {
      "type": "string",
      "pattern": "^/",
      "description": "The base path to the API. Example: '/api'."
    },
    "schemes": {
      "$ref": "#/definitions/schemesList"
    },
    "consumes": {
      "description": "A list of MIME types accepted by the API.",
      "allOf": [{
        "$ref": "#/definitions/mediaTypeList"
      }]
    },
    "produces": {
      "description": "A list of MIME types the API can produce.",
      "allOf": [{
        "$ref": "#/definitions/mediaTypeList"
      }]
    },
    "paths": {
      "$ref": "#/definitions/paths"
    },
    "definitions": {
      "$ref": "#/definitions/definitions"
    },
    "parameters": {
      "$ref": "#/definitions/parameterDefinitions"
    },
    "responses": {
      "$ref": "#/definitions/responseDefinitions"
    },
    "security": {
      "$ref": "#/definitions/security"
    },
    "securityDefinitions": {
      "$ref": "#/definitions/securityDefinitions"
    },
    "tags": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/tag"
      },
      "uniqueItems": true
    },
    "externalDocs": {
      "$ref": "#/definitions/externalDocs"
    }
  },
  "definitions": {
    "info": {
      "type": "object",
      "description": "General information about the API.",
      "required": ["version", "title"],
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "title": {
          "type": "string",
          "description": "A unique and precise title of the API."
        },
        "version": {
          "type": "string",
          "description": "A semantic version number of the API."
        },
        "description": {
          "type": "string",
          "description": "A longer description of the API. Should be different from the title.  GitHub Flavored Markdown is allowed."
        },
        "termsOfService": {
          "type": "string",
          "description": "The terms of service for the API."
        },
        "contact": {
          "$ref": "#/definitions/contact"
        },
        "license": {
          "$ref": "#/definitions/license"
        }
      }
    },
    "contact": {
      "type": "object",
      "description": "Contact information for the owners of the API.",
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string",
          "description": "The identifying name of the contact person/organization."
        },
        "url": {
          "type": "string",
          "description": "The URL pointing to the contact information.",
          "format": "uri"
        },
        "email": {
          "type": "string",
          "description": "The email address of the contact person/organization.",
          "format": "email"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "license": {
      "type": "object",
      "required": ["name"],
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the license type. It's encouraged to use an OSI compatible license."
        },
        "url": {
          "type": "string",
          "description": "The URL pointing to the license.",
          "format": "uri"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "paths": {
      "type": "object",
      "description": "Relative paths to the individual endpoints. They must be relative to the 'basePath'.",
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        },
        "^/": {
          "$ref": "#/definitions/pathItem"
        }
      },
      "additionalProperties": false
    },
    "definitions": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/schema"
      },
      "description": "One or more JSON objects describing the schemas being consumed and produced by the API."
    },
    "parameterDefinitions": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/parameter"
      },
      "description": "One or more JSON representations for parameters"
    },
    "responseDefinitions": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/response"
      },
      "description": "One or more JSON representations for parameters"
    },
    "externalDocs": {
      "type": "object",
      "additionalProperties": false,
      "description": "information about external documentation",
      "required": ["url"],
      "properties": {
        "description": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "examples": {
      "type": "object",
      "additionalProperties": true
    },
    "mimeType": {
      "type": "string",
      "description": "The MIME type of the HTTP message."
    },
    "operation": {
      "type": "object",
      "required": ["responses"],
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true
        },
        "summary": {
          "type": "string",
          "description": "A brief summary of the operation."
        },
        "description": {
          "type": "string",
          "description": "A longer description of the operation, GitHub Flavored Markdown is allowed."
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        },
        "operationId": {
          "type": "string",
          "description": "A unique identifier of the operation."
        },
        "produces": {
          "description": "A list of MIME types the API can produce.",
          "allOf": [{
            "$ref": "#/definitions/mediaTypeList"
          }]
        },
        "consumes": {
          "description": "A list of MIME types the API can consume.",
          "allOf": [{
            "$ref": "#/definitions/mediaTypeList"
          }]
        },
        "parameters": {
          "$ref": "#/definitions/parametersList"
        },
        "responses": {
          "$ref": "#/definitions/responses"
        },
        "schemes": {
          "$ref": "#/definitions/schemesList"
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "security": {
          "$ref": "#/definitions/security"
        },
        "x-tb-name": {
          "type": "string",
          "minLength": 1
        },
        "x-tb-needs_confirm": {
          "type": "boolean",
          "default": false
        },
        "x-tb-needsConfirm": {
          "type": "boolean",
          "default": false
        },
        "x-tb-needsNotificationPermission": {
          "type": "boolean",
          "default": false
        },
        "x-tb-color": {
          "type": "string",
          "enum": ["orange", "red", "green", "purple", "blue"]
        },
        "x-tb-action_label": {
          "type": "string",
          "minLength": 1
        },
        "x-tb-actionLabel": {
          "type": "string",
          "minLength": 1
        }
      }
    },
    "pathItem": {
      "type": "object",
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "$ref": {
          "type": "string"
        },
        "get": {
          "$ref": "#/definitions/operation"
        },
        "put": {
          "$ref": "#/definitions/operation"
        },
        "post": {
          "$ref": "#/definitions/operation"
        },
        "delete": {
          "$ref": "#/definitions/operation"
        },
        "options": {
          "$ref": "#/definitions/operation"
        },
        "head": {
          "$ref": "#/definitions/operation"
        },
        "patch": {
          "$ref": "#/definitions/operation"
        },
        "parameters": {
          "$ref": "#/definitions/parametersList"
        }
      }
    },
    "responses": {
      "type": "object",
      "description": "Response objects names can either be any valid HTTP status code or 'default'.",
      "minProperties": 1,
      "additionalProperties": false,
      "patternProperties": {
        "^([0-9]{3})$|^(default)$": {
          "$ref": "#/definitions/responseValue"
        },
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "not": {
        "type": "object",
        "additionalProperties": false,
        "patternProperties": {
          "^x-([^t]|(t[^b]))": {
            "$ref": "#/definitions/vendorExtension"
          }
        }
      }
    },
    "responseValue": {
      "oneOf": [{
        "$ref": "#/definitions/response"
      }, {
        "$ref": "#/definitions/jsonReference"
      }]
    },
    "response": {
      "type": "object",
      "required": ["description"],
      "properties": {
        "description": {
          "type": "string"
        },
        "schema": {
          "oneOf": [{
            "$ref": "#/definitions/schema"
          }, {
            "$ref": "#/definitions/fileSchema"
          }]
        },
        "headers": {
          "$ref": "#/definitions/headers"
        },
        "examples": {
          "$ref": "#/definitions/examples"
        }
      },
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "headers": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/header"
      }
    },
    "header": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["string", "number", "integer", "boolean", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "vendorExtension": {
      "description": "Any property starting with x- is valid.",
      "additionalProperties": true,
      "additionalItems": true
    },
    "bodyParameter": {
      "type": "object",
      "required": ["name", "in", "schema"],
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["body"]
        },
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "schema": {
          "$ref": "#/definitions/schema"
        },
        "x-tb-field_label": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-fieldLabel": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-field_placeholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-fieldPlaceholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-field_type": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldType": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldEnumLabel": {
          "$ref": "#/definitions/x-tb-fieldEnumLabel"
        }
      },
      "additionalProperties": false
    },
    "headerParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["header"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        },
        "x-tb-field_label": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-fieldLabel": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-field_placeholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-fieldPlaceholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-field_type": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldType": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldEnumLabel": {
          "$ref": "#/definitions/x-tb-fieldEnumLabel"
        }
      }
    },
    "queryParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["query"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false,
          "description": "allows sending a parameter by name only or with an empty value."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormatWithMulti"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        },
        "x-tb-field_label": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-fieldLabel": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-field_placeholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-fieldPlaceholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-field_type": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldType": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldEnumLabel": {
          "$ref": "#/definitions/x-tb-fieldEnumLabel"
        }
      }
    },
    "formDataParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["formData"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false,
          "description": "allows sending a parameter by name only or with an empty value."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array", "file"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormatWithMulti"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        },
        "x-tb-field_label": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-fieldLabel": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-field_placeholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-fieldPlaceholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-field_type": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldType": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldEnumLabel": {
          "$ref": "#/definitions/x-tb-fieldEnumLabel"
        }
      }
    },
    "pathParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "required": ["required"],
      "properties": {
        "required": {
          "type": "boolean",
          "enum": [true],
          "description": "Determines whether or not this parameter is required or optional."
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["path"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        },
        "x-tb-field_label": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-fieldLabel": {
          "$ref": "#/definitions/x-tb-fieldLabel"
        },
        "x-tb-field_placeholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-fieldPlaceholder": {
          "$ref": "#/definitions/x-tb-fieldPlaceholder"
        },
        "x-tb-field_type": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldType": {
          "$ref": "#/definitions/x-tb-fieldType"
        },
        "x-tb-fieldEnumLabel": {
          "$ref": "#/definitions/x-tb-fieldEnumLabel"
        }
      }
    },
    "nonBodyParameter": {
      "type": "object",
      "required": ["name", "in", "type"],
      "oneOf": [{
        "$ref": "#/definitions/headerParameterSubSchema"
      }, {
        "$ref": "#/definitions/formDataParameterSubSchema"
      }, {
        "$ref": "#/definitions/queryParameterSubSchema"
      }, {
        "$ref": "#/definitions/pathParameterSubSchema"
      }]
    },
    "parameter": {
      "oneOf": [{
        "$ref": "#/definitions/bodyParameter"
      }, {
        "$ref": "#/definitions/nonBodyParameter"
      }]
    },
    "schema": {
      "type": "object",
      "description": "A deterministic version of a JSON Schema object.",
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "$ref": {
          "type": "string"
        },
        "format": {
          "type": "string"
        },
        "title": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
        },
        "description": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
        },
        "default": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
        },
        "multipleOf": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
        },
        "maximum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minLength": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "pattern": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
        },
        "maxItems": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minItems": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "uniqueItems": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
        },
        "maxProperties": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minProperties": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "required": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
        },
        "enum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
        },
        "additionalProperties": {
          "anyOf": [{
            "$ref": "#/definitions/schema"
          }, {
            "type": "boolean"
          }],
          "default": {}
        },
        "type": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/type"
        },
        "items": {
          "anyOf": [{
            "$ref": "#/definitions/schema"
          }, {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#/definitions/schema"
            }
          }],
          "default": {}
        },
        "allOf": {
          "type": "array",
          "minItems": 1,
          "items": {
            "$ref": "#/definitions/schema"
          }
        },
        "properties": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/schema"
          },
          "default": {}
        },
        "discriminator": {
          "type": "string"
        },
        "readOnly": {
          "type": "boolean",
          "default": false
        },
        "xml": {
          "$ref": "#/definitions/xml"
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        },
        "example": {}
      },
      "additionalProperties": false
    },
    "fileSchema": {
      "type": "object",
      "description": "A deterministic version of a JSON Schema object.",
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "required": ["type"],
      "properties": {
        "format": {
          "type": "string"
        },
        "title": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
        },
        "description": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
        },
        "default": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
        },
        "required": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
        },
        "type": {
          "type": "string",
          "enum": ["file"]
        },
        "readOnly": {
          "type": "boolean",
          "default": false
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        },
        "example": {}
      },
      "additionalProperties": false
    },
    "primitivesItems": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "type": {
          "type": "string",
          "enum": ["string", "number", "integer", "boolean", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "security": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/securityRequirement"
      },
      "uniqueItems": true
    },
    "securityRequirement": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "uniqueItems": true
      }
    },
    "xml": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string"
        },
        "namespace": {
          "type": "string"
        },
        "prefix": {
          "type": "string"
        },
        "attribute": {
          "type": "boolean",
          "default": false
        },
        "wrapped": {
          "type": "boolean",
          "default": false
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "tag": {
      "type": "object",
      "additionalProperties": false,
      "required": ["name"],
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "securityDefinitions": {
      "type": "object",
      "additionalProperties": {
        "oneOf": [{
          "$ref": "#/definitions/basicAuthenticationSecurity"
        }, {
          "$ref": "#/definitions/apiKeySecurity"
        }, {
          "$ref": "#/definitions/oauth2ImplicitSecurity"
        }, {
          "$ref": "#/definitions/oauth2PasswordSecurity"
        }, {
          "$ref": "#/definitions/oauth2ApplicationSecurity"
        }, {
          "$ref": "#/definitions/oauth2AccessCodeSecurity"
        }]
      }
    },
    "basicAuthenticationSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["basic"]
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "apiKeySecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "name", "in"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["apiKey"]
        },
        "name": {
          "type": "string"
        },
        "in": {
          "type": "string",
          "enum": ["header", "query"]
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2ImplicitSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "authorizationUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["implicit"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "authorizationUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2PasswordSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "tokenUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["password"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2ApplicationSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "tokenUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["application"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2AccessCodeSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "authorizationUrl", "tokenUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["accessCode"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "authorizationUrl": {
          "type": "string",
          "format": "uri"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-([^t]|(t[^b]))": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2Scopes": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "mediaTypeList": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/mimeType"
      },
      "uniqueItems": true
    },
    "parametersList": {
      "type": "array",
      "description": "The parameters needed to send a valid API call.",
      "additionalItems": false,
      "items": {
        "oneOf": [{
          "$ref": "#/definitions/parameter"
        }, {
          "$ref": "#/definitions/jsonReference"
        }]
      },
      "uniqueItems": true
    },
    "schemesList": {
      "type": "array",
      "description": "The transfer protocol of the API.",
      "items": {
        "type": "string",
        "enum": ["http", "https", "ws", "wss"]
      },
      "uniqueItems": true
    },
    "collectionFormat": {
      "type": "string",
      "enum": ["csv", "ssv", "tsv", "pipes"],
      "default": "csv"
    },
    "collectionFormatWithMulti": {
      "type": "string",
      "enum": ["csv", "ssv", "tsv", "pipes", "multi"],
      "default": "csv"
    },
    "title": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
    },
    "description": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
    },
    "default": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
    },
    "multipleOf": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
    },
    "maximum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
    },
    "exclusiveMaximum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
    },
    "minimum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
    },
    "exclusiveMinimum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
    },
    "maxLength": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
    },
    "minLength": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
    },
    "pattern": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
    },
    "maxItems": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
    },
    "minItems": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
    },
    "uniqueItems": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
    },
    "enum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
    },
    "jsonReference": {
      "type": "object",
      "required": ["$ref"],
      "additionalProperties": false,
      "properties": {
        "$ref": {
          "type": "string"
        }
      }
    },
    "x-tb-fieldLabel": {
      "type": "string",
      "minLength": 1
    },
    "x-tb-fieldPlaceholder": {
      "type": "string",
      "minLength": 1
    },
    "x-tb-fieldType": {
      "type": "string",
      "enum": ["text", "number", "email", "select", "geolocation", "hidden"]
    },
    "x-tb-fieldEnumLabel": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      }
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3NwZWMtc2NoZW1hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUFlO0FBQ2IsV0FBUyxvQ0FESTtBQUViLFFBQU0sR0FGTztBQUdiLGFBQVcseUNBSEU7QUFJYixVQUFRLFFBSks7QUFLYixjQUFZLENBQ1YsU0FEVSxFQUVWLE1BRlUsRUFHVixPQUhVLENBTEM7QUFVYiwwQkFBd0IsS0FWWDtBQVdiLHVCQUFxQjtBQUNyQix5QkFBcUI7QUFDakIsY0FBUTtBQURTO0FBREEsR0FYUjtBQWdCYixnQkFBYztBQUNaLGVBQVc7QUFDVCxjQUFRLFFBREM7QUFFVCxjQUFRLENBQ04sS0FETSxDQUZDO0FBS1QscUJBQWU7QUFMTixLQURDO0FBUVosWUFBUTtBQUNOLGNBQVE7QUFERixLQVJJO0FBV1osWUFBUTtBQUNOLGNBQVEsUUFERjtBQUVOLGlCQUFXLDJCQUZMO0FBR04scUJBQWU7QUFIVCxLQVhJO0FBZ0JaLGdCQUFZO0FBQ1YsY0FBUSxRQURFO0FBRVYsaUJBQVcsSUFGRDtBQUdWLHFCQUFlO0FBSEwsS0FoQkE7QUFxQlosZUFBVztBQUNULGNBQVE7QUFEQyxLQXJCQztBQXdCWixnQkFBWTtBQUNWLHFCQUFlLDJDQURMO0FBRVYsZUFBUyxDQUNQO0FBQ0UsZ0JBQVE7QUFEVixPQURPO0FBRkMsS0F4QkE7QUFnQ1osZ0JBQVk7QUFDVixxQkFBZSwyQ0FETDtBQUVWLGVBQVMsQ0FDUDtBQUNFLGdCQUFRO0FBRFYsT0FETztBQUZDLEtBaENBO0FBd0NaLGFBQVM7QUFDUCxjQUFRO0FBREQsS0F4Q0c7QUEyQ1osbUJBQWU7QUFDYixjQUFRO0FBREssS0EzQ0g7QUE4Q1osa0JBQWM7QUFDWixjQUFRO0FBREksS0E5Q0Y7QUFpRFosaUJBQWE7QUFDWCxjQUFRO0FBREcsS0FqREQ7QUFvRFosZ0JBQVk7QUFDVixjQUFRO0FBREUsS0FwREE7QUF1RFosMkJBQXVCO0FBQ3JCLGNBQVE7QUFEYSxLQXZEWDtBQTBEWixZQUFR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QUVSLHFCQUFhO0FBRkw7QUFGYTtBQTlvRFI7QUFyRkYsQyIsImZpbGUiOiJzcGVjLXNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ0aXRsZVwiOiBcIkEgSlNPTiBTY2hlbWEgZm9yIFN3YWdnZXIgMi4wIEFQSS5cIixcbiAgXCJpZFwiOiBcIiNcIixcbiAgXCIkc2NoZW1hXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjXCIsXG4gIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICBcInJlcXVpcmVkXCI6IFtcdFxuICAgIFwic3dhZ2dlclwiLFxuICAgIFwiaW5mb1wiLFxuICAgIFwicGF0aHNcIlxuICBdLFxuICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICB9XG4gIH0sXG4gIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJzd2FnZ2VyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgXCIyLjBcIlxuICAgICAgXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgU3dhZ2dlciB2ZXJzaW9uIG9mIHRoaXMgZG9jdW1lbnQuXCJcbiAgICB9LFxuICAgIFwiaW5mb1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2luZm9cIlxuICAgIH0sXG4gICAgXCJob3N0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJwYXR0ZXJuXCI6IFwiXltee30vIDpcXFxcXFxcXF0rKD86OlxcXFxkKyk/JFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBob3N0IChuYW1lIG9yIGlwKSBvZiB0aGUgQVBJLiBFeGFtcGxlOiAnc3dhZ2dlci5pbydcIlxuICAgIH0sXG4gICAgXCJiYXNlUGF0aFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwicGF0dGVyblwiOiBcIl4vXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGJhc2UgcGF0aCB0byB0aGUgQVBJLiBFeGFtcGxlOiAnL2FwaScuXCJcbiAgICB9LFxuICAgIFwic2NoZW1lc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtZXNMaXN0XCJcbiAgICB9LFxuICAgIFwiY29uc3VtZXNcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgbGlzdCBvZiBNSU1FIHR5cGVzIGFjY2VwdGVkIGJ5IHRoZSBBUEkuXCIsXG4gICAgICBcImFsbE9mXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWVkaWFUeXBlTGlzdFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHJvZHVjZXNcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgbGlzdCBvZiBNSU1FIHR5cGVzIHRoZSBBUEkgY2FuIHByb2R1Y2UuXCIsXG4gICAgICBcImFsbE9mXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWVkaWFUeXBlTGlzdFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwicGF0aHNcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXRoc1wiXG4gICAgfSxcbiAgICBcImRlZmluaXRpb25zXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZGVmaW5pdGlvbnNcIlxuICAgIH0sXG4gICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcGFyYW1ldGVyRGVmaW5pdGlvbnNcIlxuICAgIH0sXG4gICAgXCJyZXNwb25zZXNcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9yZXNwb25zZURlZmluaXRpb25zXCJcbiAgICB9LFxuICAgIFwic2VjdXJpdHlcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zZWN1cml0eVwiXG4gICAgfSxcbiAgICBcInNlY3VyaXR5RGVmaW5pdGlvbnNcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zZWN1cml0eURlZmluaXRpb25zXCJcbiAgICB9LFxuICAgIFwidGFnc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdGFnXCJcbiAgICAgIH0sXG4gICAgICBcInVuaXF1ZUl0ZW1zXCI6IHRydWVcbiAgICB9LFxuICAgIFwiZXh0ZXJuYWxEb2NzXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXh0ZXJuYWxEb2NzXCJcbiAgICB9XG4gIH0sXG4gIFwiZGVmaW5pdGlvbnNcIjoge1xuICAgIFwiaW5mb1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBBUEkuXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ2ZXJzaW9uXCIsXG4gICAgICAgIFwidGl0bGVcIlxuICAgICAgXSxcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgdW5pcXVlIGFuZCBwcmVjaXNlIHRpdGxlIG9mIHRoZSBBUEkuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBzZW1hbnRpYyB2ZXJzaW9uIG51bWJlciBvZiB0aGUgQVBJLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxvbmdlciBkZXNjcmlwdGlvbiBvZiB0aGUgQVBJLiBTaG91bGQgYmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlLiAgR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duIGlzIGFsbG93ZWQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0ZXJtc09mU2VydmljZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB0ZXJtcyBvZiBzZXJ2aWNlIGZvciB0aGUgQVBJLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGFjdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9jb250YWN0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaWNlbnNlXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2xpY2Vuc2VcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvbnRhY3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udGFjdCBpbmZvcm1hdGlvbiBmb3IgdGhlIG93bmVycyBvZiB0aGUgQVBJLlwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBpZGVudGlmeWluZyBuYW1lIG9mIHRoZSBjb250YWN0IHBlcnNvbi9vcmdhbml6YXRpb24uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgVVJMIHBvaW50aW5nIHRvIHRoZSBjb250YWN0IGluZm9ybWF0aW9uLlwiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbWFpbFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBjb250YWN0IHBlcnNvbi9vcmdhbml6YXRpb24uXCIsXG4gICAgICAgICAgXCJmb3JtYXRcIjogXCJlbWFpbFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImxpY2Vuc2VcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJuYW1lXCJcbiAgICAgIF0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIGxpY2Vuc2UgdHlwZS4gSXQncyBlbmNvdXJhZ2VkIHRvIHVzZSBhbiBPU0kgY29tcGF0aWJsZSBsaWNlbnNlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIFVSTCBwb2ludGluZyB0byB0aGUgbGljZW5zZS5cIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcInVyaVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInBhdGhzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlbGF0aXZlIHBhdGhzIHRvIHRoZSBpbmRpdmlkdWFsIGVuZHBvaW50cy4gVGhleSBtdXN0IGJlIHJlbGF0aXZlIHRvIHRoZSAnYmFzZVBhdGgnLlwiLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJeL1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXRoSXRlbVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImRlZmluaXRpb25zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgIH0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT25lIG9yIG1vcmUgSlNPTiBvYmplY3RzIGRlc2NyaWJpbmcgdGhlIHNjaGVtYXMgYmVpbmcgY29uc3VtZWQgYW5kIHByb2R1Y2VkIGJ5IHRoZSBBUEkuXCJcbiAgICB9LFxuICAgIFwicGFyYW1ldGVyRGVmaW5pdGlvbnNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXJhbWV0ZXJcIlxuICAgICAgfSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPbmUgb3IgbW9yZSBKU09OIHJlcHJlc2VudGF0aW9ucyBmb3IgcGFyYW1ldGVyc1wiXG4gICAgfSxcbiAgICBcInJlc3BvbnNlRGVmaW5pdGlvbnNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9yZXNwb25zZVwiXG4gICAgICB9LFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9uZSBvciBtb3JlIEpTT04gcmVwcmVzZW50YXRpb25zIGZvciBwYXJhbWV0ZXJzXCJcbiAgICB9LFxuICAgIFwiZXh0ZXJuYWxEb2NzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJpbmZvcm1hdGlvbiBhYm91dCBleHRlcm5hbCBkb2N1bWVudGF0aW9uXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ1cmxcIlxuICAgICAgXSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcInVyaVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImV4YW1wbGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB0cnVlXG4gICAgfSxcbiAgICBcIm1pbWVUeXBlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBNSU1FIHR5cGUgb2YgdGhlIEhUVFAgbWVzc2FnZS5cIlxuICAgIH0sXG4gICAgXCJvcGVyYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJyZXNwb25zZXNcIlxuICAgICAgXSxcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInN1bW1hcnlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIHN1bW1hcnkgb2YgdGhlIG9wZXJhdGlvbi5cIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsb25nZXIgZGVzY3JpcHRpb24gb2YgdGhlIG9wZXJhdGlvbiwgR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duIGlzIGFsbG93ZWQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlcm5hbERvY3NcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXh0ZXJuYWxEb2NzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVyYXRpb25JZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG9wZXJhdGlvbi5cIlxuICAgICAgICB9LFxuICAgICAgICBcInByb2R1Y2VzXCI6IHtcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaXN0IG9mIE1JTUUgdHlwZXMgdGhlIEFQSSBjYW4gcHJvZHVjZS5cIixcbiAgICAgICAgICBcImFsbE9mXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tZWRpYVR5cGVMaXN0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29uc3VtZXNcIjoge1xuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpc3Qgb2YgTUlNRSB0eXBlcyB0aGUgQVBJIGNhbiBjb25zdW1lLlwiLFxuICAgICAgICAgIFwiYWxsT2ZcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21lZGlhVHlwZUxpc3RcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhcmFtZXRlcnNMaXN0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXNwb25zZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcmVzcG9uc2VzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzY2hlbWVzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtZXNMaXN0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXByZWNhdGVkXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VjdXJpdHlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2VjdXJpdHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIngtdGItbmFtZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJtaW5MZW5ndGhcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIngtdGItbmVlZHNfY29uZmlybVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcIngtdGItbmVlZHNDb25maXJtXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwieC10Yi1uZWVkc05vdGlmaWNhdGlvblBlcm1pc3Npb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJ4LXRiLWNvbG9yXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIFwicmVkXCIsXG4gICAgICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgICAgICBcInB1cnBsZVwiLFxuICAgICAgICAgICAgXCJibHVlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwieC10Yi1hY3Rpb25fbGFiZWxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWluTGVuZ3RoXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ4LXRiLWFjdGlvbkxhYmVsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1pbkxlbmd0aFwiOiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicGF0aEl0ZW1cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb3BlcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwdXRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb3BlcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwb3N0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29wZXJhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29wZXJhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vcGVyYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBcImhlYWRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb3BlcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXRjaFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vcGVyYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcGFyYW1ldGVyc0xpc3RcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlc3BvbnNlc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZXNwb25zZSBvYmplY3RzIG5hbWVzIGNhbiBlaXRoZXIgYmUgYW55IHZhbGlkIEhUVFAgc3RhdHVzIGNvZGUgb3IgJ2RlZmF1bHQnLlwiLFxuICAgICAgXCJtaW5Qcm9wZXJ0aWVzXCI6IDEsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiXihbMC05XXszfSkkfF4oZGVmYXVsdCkkXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3Jlc3BvbnNlVmFsdWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdFwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVzcG9uc2VWYWx1ZVwiOiB7XG4gICAgICBcIm9uZU9mXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcmVzcG9uc2VcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9qc29uUmVmZXJlbmNlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJyZXNwb25zZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgXCJvbmVPZlwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZmlsZVNjaGVtYVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaGVhZGVyc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhhbXBsZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhhbXBsZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2hlYWRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYWRlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgIFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgXCJib29sZWFuXCIsXG4gICAgICAgICAgICBcImFycmF5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9ybWF0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ByaW1pdGl2ZXNJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29sbGVjdGlvbkZvcm1hdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9jb2xsZWN0aW9uRm9ybWF0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4aW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heExlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbkxlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF0dGVyblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXR0ZXJuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcInVuaXF1ZUl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3VuaXF1ZUl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbnVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2VudW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbXVsdGlwbGVPZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZlbmRvckV4dGVuc2lvblwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQW55IHByb3BlcnR5IHN0YXJ0aW5nIHdpdGggeC0gaXMgdmFsaWQuXCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IHRydWUsXG4gICAgICBcImFkZGl0aW9uYWxJdGVtc1wiOiB0cnVlXG4gICAgfSxcbiAgICBcImJvZHlQYXJhbWV0ZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIFwiaW5cIixcbiAgICAgICAgXCJzY2hlbWFcIlxuICAgICAgXSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgcGFyYW1ldGVyLiBUaGlzIGNvdWxkIGNvbnRhaW4gZXhhbXBsZXMgb2YgdXNlLiAgR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duIGlzIGFsbG93ZWQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlci5cIlxuICAgICAgICB9LFxuICAgICAgICBcImluXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB0aGUgbG9jYXRpb24gb2YgdGhlIHBhcmFtZXRlci5cIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJib2R5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvciBvcHRpb25hbC5cIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgICAgfSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX2xhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZExhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9wbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRQbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfdHlwZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkVHlwZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZFR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRFbnVtTGFiZWxcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZEVudW1MYWJlbFwiXG5cdFx0XHRcdH1cbiAgICAgIH0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImhlYWRlclBhcmFtZXRlclN1YlNjaGVtYVwiOiB7XG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvciBvcHRpb25hbC5cIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJpblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRldGVybWluZXMgdGhlIGxvY2F0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIFRoaXMgY291bGQgY29udGFpbiBleGFtcGxlcyBvZiB1c2UuICBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gaXMgYWxsb3dlZC5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgXCJib29sZWFuXCIsXG4gICAgICAgICAgICBcImludGVnZXJcIixcbiAgICAgICAgICAgIFwiYXJyYXlcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcHJpbWl0aXZlc0l0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2NvbGxlY3Rpb25Gb3JtYXRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNaW5pbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4TGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5MZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluTGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXR0ZXJuXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heEl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9taW5JdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImVudW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGVPZlwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tdWx0aXBsZU9mXCJcbiAgICAgICAgfSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX2xhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZExhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9wbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRQbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfdHlwZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkVHlwZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZFR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRFbnVtTGFiZWxcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZEVudW1MYWJlbFwiXG5cdFx0XHRcdH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicXVlcnlQYXJhbWV0ZXJTdWJTY2hlbWFcIjoge1xuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInJlcXVpcmVkXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb3Igb3B0aW9uYWwuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXRlcm1pbmVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGFyYW1ldGVyLlwiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInF1ZXJ5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIFRoaXMgY291bGQgY29udGFpbiBleGFtcGxlcyBvZiB1c2UuICBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gaXMgYWxsb3dlZC5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYWxsb3dFbXB0eVZhbHVlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJhbGxvd3Mgc2VuZGluZyBhIHBhcmFtZXRlciBieSBuYW1lIG9ubHkgb3Igd2l0aCBhbiBlbXB0eSB2YWx1ZS5cIlxuICAgICAgICB9LFxuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgIFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICBcImFycmF5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9ybWF0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ByaW1pdGl2ZXNJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29sbGVjdGlvbkZvcm1hdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9jb2xsZWN0aW9uRm9ybWF0V2l0aE11bHRpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4aW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heExlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbkxlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF0dGVyblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXR0ZXJuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcInVuaXF1ZUl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3VuaXF1ZUl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbnVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2VudW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbXVsdGlwbGVPZlwiXG4gICAgICAgIH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9sYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRMYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfcGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkUGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX3R5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRUeXBlXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRUeXBlXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkRW51bUxhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRFbnVtTGFiZWxcIlxuXHRcdFx0XHR9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImZvcm1EYXRhUGFyYW1ldGVyU3ViU2NoZW1hXCI6IHtcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJyZXF1aXJlZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIG9yIG9wdGlvbmFsLlwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcImluXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB0aGUgbG9jYXRpb24gb2YgdGhlIHBhcmFtZXRlci5cIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJmb3JtRGF0YVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgcGFyYW1ldGVyLiBUaGlzIGNvdWxkIGNvbnRhaW4gZXhhbXBsZXMgb2YgdXNlLiAgR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duIGlzIGFsbG93ZWQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlci5cIlxuICAgICAgICB9LFxuICAgICAgICBcImFsbG93RW1wdHlWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZSxcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYWxsb3dzIHNlbmRpbmcgYSBwYXJhbWV0ZXIgYnkgbmFtZSBvbmx5IG9yIHdpdGggYW4gZW1wdHkgdmFsdWUuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgXCJhcnJheVwiLFxuICAgICAgICAgICAgXCJmaWxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9ybWF0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ByaW1pdGl2ZXNJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29sbGVjdGlvbkZvcm1hdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9jb2xsZWN0aW9uRm9ybWF0V2l0aE11bHRpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4aW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heExlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbkxlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF0dGVyblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXR0ZXJuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcInVuaXF1ZUl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3VuaXF1ZUl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbnVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2VudW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbXVsdGlwbGVPZlwiXG4gICAgICAgIH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9sYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRMYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfcGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkUGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX3R5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRUeXBlXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRUeXBlXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkRW51bUxhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRFbnVtTGFiZWxcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInBhdGhQYXJhbWV0ZXJTdWJTY2hlbWFcIjoge1xuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJyZXF1aXJlZFwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJyZXF1aXJlZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvciBvcHRpb25hbC5cIlxuICAgICAgICB9LFxuICAgICAgICBcImluXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB0aGUgbG9jYXRpb24gb2YgdGhlIHBhcmFtZXRlci5cIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJwYXRoXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIFRoaXMgY291bGQgY29udGFpbiBleGFtcGxlcyBvZiB1c2UuICBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gaXMgYWxsb3dlZC5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgXCJib29sZWFuXCIsXG4gICAgICAgICAgICBcImludGVnZXJcIixcbiAgICAgICAgICAgIFwiYXJyYXlcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcHJpbWl0aXZlc0l0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2NvbGxlY3Rpb25Gb3JtYXRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNaW5pbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4TGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5MZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluTGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXR0ZXJuXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heEl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9taW5JdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImVudW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGVPZlwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tdWx0aXBsZU9mXCJcbiAgICAgICAgfSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX2xhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZExhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9wbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRQbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfdHlwZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkVHlwZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZFR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRFbnVtTGFiZWxcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZEVudW1MYWJlbFwiXG5cdFx0XHRcdH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwibm9uQm9keVBhcmFtZXRlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgXCJpblwiLFxuICAgICAgICBcInR5cGVcIlxuICAgICAgXSxcbiAgICAgIFwib25lT2ZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9oZWFkZXJQYXJhbWV0ZXJTdWJTY2hlbWFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9mb3JtRGF0YVBhcmFtZXRlclN1YlNjaGVtYVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3F1ZXJ5UGFyYW1ldGVyU3ViU2NoZW1hXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcGF0aFBhcmFtZXRlclN1YlNjaGVtYVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwicGFyYW1ldGVyXCI6IHtcbiAgICAgIFwib25lT2ZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9ib2R5UGFyYW1ldGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbm9uQm9keVBhcmFtZXRlclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwic2NoZW1hXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgZGV0ZXJtaW5pc3RpYyB2ZXJzaW9uIG9mIGEgSlNPTiBTY2hlbWEgb2JqZWN0LlwiLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL3RpdGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZGVzY3JpcHRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL211bHRpcGxlT2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL21heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL2V4Y2x1c2l2ZU1pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL2RlZmluaXRpb25zL3Bvc2l0aXZlSW50ZWdlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyRGVmYXVsdDBcIlxuICAgICAgICB9LFxuICAgICAgICBcInBhdHRlcm5cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL2RlZmluaXRpb25zL3Bvc2l0aXZlSW50ZWdlckRlZmF1bHQwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmlxdWVJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heFByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pblByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJEZWZhdWx0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9zdHJpbmdBcnJheVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW51bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICB9LFxuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL3R5cGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zY2hlbWFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgXCJtaW5JdGVtc1wiOiAxLFxuICAgICAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtYVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICB9LFxuICAgICAgICBcImFsbE9mXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwibWluSXRlbXNcIjogMSxcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtYVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjcmltaW5hdG9yXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwieG1sXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3htbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZXJuYWxEb2NzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4dGVybmFsRG9jc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhhbXBsZVwiOiB7fVxuICAgICAgfSxcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiZmlsZVNjaGVtYVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGRldGVybWluaXN0aWMgdmVyc2lvbiBvZiBhIEpTT04gU2NoZW1hIG9iamVjdC5cIixcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImZvcm1hdFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvdGl0bGVcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvcHJvcGVydGllcy9kZXNjcmlwdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9zdHJpbmdBcnJheVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwiZmlsZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZXJuYWxEb2NzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4dGVybmFsRG9jc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhhbXBsZVwiOiB7fVxuICAgICAgfSxcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2VcbiAgICB9LFxuICAgIFwicHJpbWl0aXZlc0l0ZW1zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIFwiYXJyYXlcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcHJpbWl0aXZlc0l0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2NvbGxlY3Rpb25Gb3JtYXRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNaW5pbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4TGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5MZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluTGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXR0ZXJuXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heEl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9taW5JdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImVudW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGVPZlwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tdWx0aXBsZU9mXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2VjdXJpdHlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NlY3VyaXR5UmVxdWlyZW1lbnRcIlxuICAgICAgfSxcbiAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzZWN1cml0eVJlcXVpcmVtZW50XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ4bWxcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVzcGFjZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcmVmaXhcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXR0cmlidXRlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwid3JhcHBlZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ0YWdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJyZXF1aXJlZFwiOiBbXG4gICAgICAgIFwibmFtZVwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVybmFsRG9jc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leHRlcm5hbERvY3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzZWN1cml0eURlZmluaXRpb25zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwib25lT2ZcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvYmFzaWNBdXRoZW50aWNhdGlvblNlY3VyaXR5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvYXBpS2V5U2VjdXJpdHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vYXV0aDJJbXBsaWNpdFNlY3VyaXR5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb2F1dGgyUGFzc3dvcmRTZWN1cml0eVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29hdXRoMkFwcGxpY2F0aW9uU2VjdXJpdHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vYXV0aDJBY2Nlc3NDb2RlU2VjdXJpdHlcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJiYXNpY0F1dGhlbnRpY2F0aW9uU2VjdXJpdHlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJyZXF1aXJlZFwiOiBbXG4gICAgICAgIFwidHlwZVwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJiYXNpY1wiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhcGlLZXlTZWN1cml0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBcImluXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImFwaUtleVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImhlYWRlclwiLFxuICAgICAgICAgICAgXCJxdWVyeVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvYXV0aDJJbXBsaWNpdFNlY3VyaXR5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCJmbG93XCIsXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblVybFwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJvYXV0aDJcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmbG93XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJpbXBsaWNpdFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInNjb3Blc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vYXV0aDJTY29wZXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImF1dGhvcml6YXRpb25VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyUGFzc3dvcmRTZWN1cml0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwiZmxvd1wiLFxuICAgICAgICBcInRva2VuVXJsXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcIm9hdXRoMlwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImZsb3dcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInBhc3N3b3JkXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic2NvcGVzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29hdXRoMlNjb3Blc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidG9rZW5VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyQXBwbGljYXRpb25TZWN1cml0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwiZmxvd1wiLFxuICAgICAgICBcInRva2VuVXJsXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcIm9hdXRoMlwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImZsb3dcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImFwcGxpY2F0aW9uXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic2NvcGVzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29hdXRoMlNjb3Blc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidG9rZW5VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyQWNjZXNzQ29kZVNlY3VyaXR5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCJmbG93XCIsXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblVybFwiLFxuICAgICAgICBcInRva2VuVXJsXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcIm9hdXRoMlwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImZsb3dcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImFjY2Vzc0NvZGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzY29wZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb2F1dGgyU2NvcGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJhdXRob3JpemF0aW9uVXJsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcInVyaVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidG9rZW5VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyU2NvcGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1lZGlhVHlwZUxpc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbWVUeXBlXCJcbiAgICAgIH0sXG4gICAgICBcInVuaXF1ZUl0ZW1zXCI6IHRydWVcbiAgICB9LFxuICAgIFwicGFyYW1ldGVyc0xpc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgcGFyYW1ldGVycyBuZWVkZWQgdG8gc2VuZCBhIHZhbGlkIEFQSSBjYWxsLlwiLFxuICAgICAgXCJhZGRpdGlvbmFsSXRlbXNcIjogZmFsc2UsXG4gICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCJvbmVPZlwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXJhbWV0ZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9qc29uUmVmZXJlbmNlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInVuaXF1ZUl0ZW1zXCI6IHRydWVcbiAgICB9LFxuICAgIFwic2NoZW1lc0xpc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgdHJhbnNmZXIgcHJvdG9jb2wgb2YgdGhlIEFQSS5cIixcbiAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICBcImh0dHBcIixcbiAgICAgICAgICBcImh0dHBzXCIsXG4gICAgICAgICAgXCJ3c1wiLFxuICAgICAgICAgIFwid3NzXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgXCJjc3ZcIixcbiAgICAgICAgXCJzc3ZcIixcbiAgICAgICAgXCJ0c3ZcIixcbiAgICAgICAgXCJwaXBlc1wiXG4gICAgICBdLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiY3N2XCJcbiAgICB9LFxuICAgIFwiY29sbGVjdGlvbkZvcm1hdFdpdGhNdWx0aVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgIFwiY3N2XCIsXG4gICAgICAgIFwic3N2XCIsXG4gICAgICAgIFwidHN2XCIsXG4gICAgICAgIFwicGlwZXNcIixcbiAgICAgICAgXCJtdWx0aVwiXG4gICAgICBdLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiY3N2XCJcbiAgICB9LFxuICAgIFwidGl0bGVcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvdGl0bGVcIlxuICAgIH0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvcHJvcGVydGllcy9kZXNjcmlwdGlvblwiXG4gICAgfSxcbiAgICBcImRlZmF1bHRcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZGVmYXVsdFwiXG4gICAgfSxcbiAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvbXVsdGlwbGVPZlwiXG4gICAgfSxcbiAgICBcIm1heGltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvbWF4aW11bVwiXG4gICAgfSxcbiAgICBcImV4Y2x1c2l2ZU1heGltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZXhjbHVzaXZlTWF4aW11bVwiXG4gICAgfSxcbiAgICBcIm1pbmltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvbWluaW11bVwiXG4gICAgfSxcbiAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgfSxcbiAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyXCJcbiAgICB9LFxuICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJEZWZhdWx0MFwiXG4gICAgfSxcbiAgICBcInBhdHRlcm5cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvcGF0dGVyblwiXG4gICAgfSxcbiAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJcIlxuICAgIH0sXG4gICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyRGVmYXVsdDBcIlxuICAgIH0sXG4gICAgXCJ1bmlxdWVJdGVtc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvcHJvcGVydGllcy91bmlxdWVJdGVtc1wiXG4gICAgfSxcbiAgICBcImVudW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZW51bVwiXG4gICAgfSxcbiAgICBcImpzb25SZWZlcmVuY2VcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCIkcmVmXCJcbiAgICAgIF0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblx0XHRcIngtdGItZmllbGRMYWJlbFwiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwibWluTGVuZ3RoXCI6IDFcblx0XHR9LFxuXHRcdFwieC10Yi1maWVsZFBsYWNlaG9sZGVyXCI6IHtcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJtaW5MZW5ndGhcIjogMVxuXHRcdH0sXG5cdFx0XCJ4LXRiLWZpZWxkVHlwZVwiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwiZW51bVwiOiBbXG5cdFx0XHRcdFwidGV4dFwiLFxuXHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcImVtYWlsXCIsXG5cdFx0XHRcdFwic2VsZWN0XCIsXG5cdFx0XHRcdFwiZ2VvbG9jYXRpb25cIixcblx0XHRcdFx0XCJoaWRkZW5cIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0XCJ4LXRiLWZpZWxkRW51bUxhYmVsXCI6IHtcblx0XHRcdFwidHlwZVwiOiBcImFycmF5XCIsXG5cdFx0XHRcIml0ZW1zXCI6IHtcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwibWluTGVuZ3RoXCI6IDFcblx0XHRcdH1cblx0XHR9XG4gIH1cbn1cbiJdfQ==