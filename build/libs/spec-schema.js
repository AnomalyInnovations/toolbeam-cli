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
        },
        "x-tb-uuid": {
          "type": "string"
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
      "type": "string"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3NwZWMtc2NoZW1hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUFlO0FBQ2IsV0FBUyxvQ0FESTtBQUViLFFBQU0sR0FGTztBQUdiLGFBQVcseUNBSEU7QUFJYixVQUFRLFFBSks7QUFLYixjQUFZLENBQ1YsU0FEVSxFQUVWLE1BRlUsRUFHVixPQUhVLENBTEM7QUFVYiwwQkFBd0IsS0FWWDtBQVdiLHVCQUFxQjtBQUNyQix5QkFBcUI7QUFDakIsY0FBUTtBQURTO0FBREEsR0FYUjtBQWdCYixnQkFBYztBQUNaLGVBQVc7QUFDVCxjQUFRLFFBREM7QUFFVCxjQUFRLENBQ04sS0FETSxDQUZDO0FBS1QscUJBQWU7QUFMTixLQURDO0FBUVosWUFBUTtBQUNOLGNBQVE7QUFERixLQVJJO0FBV1osWUFBUTtBQUNOLGNBQVEsUUFERjtBQUVOLGlCQUFXLDJCQUZMO0FBR04scUJBQWU7QUFIVCxLQVhJO0FBZ0JaLGdCQUFZO0FBQ1YsY0FBUSxRQURFO0FBRVYsaUJBQVcsSUFGRDtBQUdWLHFCQUFlO0FBSEwsS0FoQkE7QUFxQlosZUFBVztBQUNULGNBQVE7QUFEQyxLQXJCQztBQXdCWixnQkFBWTtBQUNWLHFCQUFlLDJDQURMO0FBRVYsZUFBUyxDQUNQO0FBQ0UsZ0JBQVE7QUFEVixPQURPO0FBRkMsS0F4QkE7QUFnQ1osZ0JBQVk7QUFDVixxQkFBZSwyQ0FETDtBQUVWLGVBQVMsQ0FDUDtBQUNFLGdCQUFRO0FBRFYsT0FETztBQUZDLEtBaENBO0FBd0NaLGFBQVM7QUFDUCxjQUFRO0FBREQsS0F4Q0c7QUEyQ1osbUJBQWU7QUFDYixjQUFRO0FBREssS0EzQ0g7QUE4Q1osa0JBQWM7QUFDWixjQUFRO0FBREksS0E5Q0Y7QUFpRFosaUJBQWE7QUFDWCxjQUFRO0FBREcsS0FqREQ7QUFvRFosZ0JBQVk7QUFDVixjQUFRO0FBREUsS0FwREE7QUF1RFosMkJBQXVCO0FBQ3JCLGNBQVE7QUFEYSxLQXZEWDtBQTBEWixZQUFR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QUFDUixnQkFBUSxRQURBO0FBRVIscUJBQWE7QUFGTDtBQUZhO0FBaHBEUjtBQXJGRixDIiwiZmlsZSI6InNwZWMtc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBcInRpdGxlXCI6IFwiQSBKU09OIFNjaGVtYSBmb3IgU3dhZ2dlciAyLjAgQVBJLlwiLFxuICBcImlkXCI6IFwiI1wiLFxuICBcIiRzY2hlbWFcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSNcIixcbiAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gIFwicmVxdWlyZWRcIjogW1x0XG4gICAgXCJzd2FnZ2VyXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJwYXRoc1wiXG4gIF0sXG4gIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgIH1cbiAgfSxcbiAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICBcInN3YWdnZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImVudW1cIjogW1xuICAgICAgICBcIjIuMFwiXG4gICAgICBdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBTd2FnZ2VyIHZlcnNpb24gb2YgdGhpcyBkb2N1bWVudC5cIlxuICAgIH0sXG4gICAgXCJpbmZvXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW5mb1wiXG4gICAgfSxcbiAgICBcImhvc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcInBhdHRlcm5cIjogXCJeW157fS8gOlxcXFxcXFxcXSsoPzo6XFxcXGQrKT8kXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGhvc3QgKG5hbWUgb3IgaXApIG9mIHRoZSBBUEkuIEV4YW1wbGU6ICdzd2FnZ2VyLmlvJ1wiXG4gICAgfSxcbiAgICBcImJhc2VQYXRoXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJwYXR0ZXJuXCI6IFwiXi9cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgYmFzZSBwYXRoIHRvIHRoZSBBUEkuIEV4YW1wbGU6ICcvYXBpJy5cIlxuICAgIH0sXG4gICAgXCJzY2hlbWVzXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1lc0xpc3RcIlxuICAgIH0sXG4gICAgXCJjb25zdW1lc1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaXN0IG9mIE1JTUUgdHlwZXMgYWNjZXB0ZWQgYnkgdGhlIEFQSS5cIixcbiAgICAgIFwiYWxsT2ZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tZWRpYVR5cGVMaXN0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwcm9kdWNlc1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaXN0IG9mIE1JTUUgdHlwZXMgdGhlIEFQSSBjYW4gcHJvZHVjZS5cIixcbiAgICAgIFwiYWxsT2ZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tZWRpYVR5cGVMaXN0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwYXRoc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhdGhzXCJcbiAgICB9LFxuICAgIFwiZGVmaW5pdGlvbnNcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9kZWZpbml0aW9uc1wiXG4gICAgfSxcbiAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXJhbWV0ZXJEZWZpbml0aW9uc1wiXG4gICAgfSxcbiAgICBcInJlc3BvbnNlc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3Jlc3BvbnNlRGVmaW5pdGlvbnNcIlxuICAgIH0sXG4gICAgXCJzZWN1cml0eVwiOiB7XG4gICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NlY3VyaXR5XCJcbiAgICB9LFxuICAgIFwic2VjdXJpdHlEZWZpbml0aW9uc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NlY3VyaXR5RGVmaW5pdGlvbnNcIlxuICAgIH0sXG4gICAgXCJ0YWdzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy90YWdcIlxuICAgICAgfSxcbiAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJleHRlcm5hbERvY3NcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leHRlcm5hbERvY3NcIlxuICAgIH1cbiAgfSxcbiAgXCJkZWZpbml0aW9uc1wiOiB7XG4gICAgXCJpbmZvXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIEFQSS5cIixcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcInZlcnNpb25cIixcbiAgICAgICAgXCJ0aXRsZVwiXG4gICAgICBdLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSB1bmlxdWUgYW5kIHByZWNpc2UgdGl0bGUgb2YgdGhlIEFQSS5cIlxuICAgICAgICB9LFxuICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIHNlbWFudGljIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBBUEkuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgbG9uZ2VyIGRlc2NyaXB0aW9uIG9mIHRoZSBBUEkuIFNob3VsZCBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgdGl0bGUuICBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gaXMgYWxsb3dlZC5cIlxuICAgICAgICB9LFxuICAgICAgICBcInRlcm1zT2ZTZXJ2aWNlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHRlcm1zIG9mIHNlcnZpY2UgZm9yIHRoZSBBUEkuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250YWN0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2NvbnRhY3RcIlxuICAgICAgICB9LFxuICAgICAgICBcImxpY2Vuc2VcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbGljZW5zZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwieC10Yi11dWlkXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNvbnRhY3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udGFjdCBpbmZvcm1hdGlvbiBmb3IgdGhlIG93bmVycyBvZiB0aGUgQVBJLlwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBpZGVudGlmeWluZyBuYW1lIG9mIHRoZSBjb250YWN0IHBlcnNvbi9vcmdhbml6YXRpb24uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgVVJMIHBvaW50aW5nIHRvIHRoZSBjb250YWN0IGluZm9ybWF0aW9uLlwiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbWFpbFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBjb250YWN0IHBlcnNvbi9vcmdhbml6YXRpb24uXCIsXG4gICAgICAgICAgXCJmb3JtYXRcIjogXCJlbWFpbFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImxpY2Vuc2VcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJuYW1lXCJcbiAgICAgIF0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIGxpY2Vuc2UgdHlwZS4gSXQncyBlbmNvdXJhZ2VkIHRvIHVzZSBhbiBPU0kgY29tcGF0aWJsZSBsaWNlbnNlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIFVSTCBwb2ludGluZyB0byB0aGUgbGljZW5zZS5cIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcInVyaVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInBhdGhzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlbGF0aXZlIHBhdGhzIHRvIHRoZSBpbmRpdmlkdWFsIGVuZHBvaW50cy4gVGhleSBtdXN0IGJlIHJlbGF0aXZlIHRvIHRoZSAnYmFzZVBhdGgnLlwiLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJeL1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXRoSXRlbVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImRlZmluaXRpb25zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgIH0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT25lIG9yIG1vcmUgSlNPTiBvYmplY3RzIGRlc2NyaWJpbmcgdGhlIHNjaGVtYXMgYmVpbmcgY29uc3VtZWQgYW5kIHByb2R1Y2VkIGJ5IHRoZSBBUEkuXCJcbiAgICB9LFxuICAgIFwicGFyYW1ldGVyRGVmaW5pdGlvbnNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXJhbWV0ZXJcIlxuICAgICAgfSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPbmUgb3IgbW9yZSBKU09OIHJlcHJlc2VudGF0aW9ucyBmb3IgcGFyYW1ldGVyc1wiXG4gICAgfSxcbiAgICBcInJlc3BvbnNlRGVmaW5pdGlvbnNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9yZXNwb25zZVwiXG4gICAgICB9LFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9uZSBvciBtb3JlIEpTT04gcmVwcmVzZW50YXRpb25zIGZvciBwYXJhbWV0ZXJzXCJcbiAgICB9LFxuICAgIFwiZXh0ZXJuYWxEb2NzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJpbmZvcm1hdGlvbiBhYm91dCBleHRlcm5hbCBkb2N1bWVudGF0aW9uXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ1cmxcIlxuICAgICAgXSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcInVyaVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImV4YW1wbGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB0cnVlXG4gICAgfSxcbiAgICBcIm1pbWVUeXBlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBNSU1FIHR5cGUgb2YgdGhlIEhUVFAgbWVzc2FnZS5cIlxuICAgIH0sXG4gICAgXCJvcGVyYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJyZXNwb25zZXNcIlxuICAgICAgXSxcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInN1bW1hcnlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIHN1bW1hcnkgb2YgdGhlIG9wZXJhdGlvbi5cIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsb25nZXIgZGVzY3JpcHRpb24gb2YgdGhlIG9wZXJhdGlvbiwgR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duIGlzIGFsbG93ZWQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlcm5hbERvY3NcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXh0ZXJuYWxEb2NzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVyYXRpb25JZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIG9wZXJhdGlvbi5cIlxuICAgICAgICB9LFxuICAgICAgICBcInByb2R1Y2VzXCI6IHtcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBsaXN0IG9mIE1JTUUgdHlwZXMgdGhlIEFQSSBjYW4gcHJvZHVjZS5cIixcbiAgICAgICAgICBcImFsbE9mXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tZWRpYVR5cGVMaXN0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29uc3VtZXNcIjoge1xuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpc3Qgb2YgTUlNRSB0eXBlcyB0aGUgQVBJIGNhbiBjb25zdW1lLlwiLFxuICAgICAgICAgIFwiYWxsT2ZcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21lZGlhVHlwZUxpc3RcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhcmFtZXRlcnNMaXN0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXNwb25zZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcmVzcG9uc2VzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzY2hlbWVzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtZXNMaXN0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXByZWNhdGVkXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VjdXJpdHlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2VjdXJpdHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIngtdGItbmFtZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJtaW5MZW5ndGhcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIngtdGItbmVlZHNfY29uZmlybVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcIngtdGItbmVlZHNDb25maXJtXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwieC10Yi1uZWVkc05vdGlmaWNhdGlvblBlcm1pc3Npb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJ4LXRiLWNvbG9yXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIFwicmVkXCIsXG4gICAgICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgICAgICBcInB1cnBsZVwiLFxuICAgICAgICAgICAgXCJibHVlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwieC10Yi1hY3Rpb25fbGFiZWxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibWluTGVuZ3RoXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ4LXRiLWFjdGlvbkxhYmVsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm1pbkxlbmd0aFwiOiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicGF0aEl0ZW1cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb3BlcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwdXRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb3BlcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwb3N0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29wZXJhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29wZXJhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vcGVyYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBcImhlYWRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb3BlcmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXRjaFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vcGVyYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcGFyYW1ldGVyc0xpc3RcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlc3BvbnNlc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSZXNwb25zZSBvYmplY3RzIG5hbWVzIGNhbiBlaXRoZXIgYmUgYW55IHZhbGlkIEhUVFAgc3RhdHVzIGNvZGUgb3IgJ2RlZmF1bHQnLlwiLFxuICAgICAgXCJtaW5Qcm9wZXJ0aWVzXCI6IDEsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiXihbMC05XXszfSkkfF4oZGVmYXVsdCkkXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3Jlc3BvbnNlVmFsdWVcIlxuICAgICAgICB9LFxuICAgICAgICBcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdFwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVzcG9uc2VWYWx1ZVwiOiB7XG4gICAgICBcIm9uZU9mXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcmVzcG9uc2VcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9qc29uUmVmZXJlbmNlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJyZXNwb25zZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgXCJvbmVPZlwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZmlsZVNjaGVtYVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaGVhZGVyc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhhbXBsZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhhbXBsZXNcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2hlYWRlclwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcImhlYWRlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgIFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgXCJib29sZWFuXCIsXG4gICAgICAgICAgICBcImFycmF5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9ybWF0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ByaW1pdGl2ZXNJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29sbGVjdGlvbkZvcm1hdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9jb2xsZWN0aW9uRm9ybWF0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4aW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heExlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbkxlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF0dGVyblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXR0ZXJuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcInVuaXF1ZUl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3VuaXF1ZUl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbnVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2VudW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbXVsdGlwbGVPZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInZlbmRvckV4dGVuc2lvblwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQW55IHByb3BlcnR5IHN0YXJ0aW5nIHdpdGggeC0gaXMgdmFsaWQuXCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IHRydWUsXG4gICAgICBcImFkZGl0aW9uYWxJdGVtc1wiOiB0cnVlXG4gICAgfSxcbiAgICBcImJvZHlQYXJhbWV0ZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIFwiaW5cIixcbiAgICAgICAgXCJzY2hlbWFcIlxuICAgICAgXSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgcGFyYW1ldGVyLiBUaGlzIGNvdWxkIGNvbnRhaW4gZXhhbXBsZXMgb2YgdXNlLiAgR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duIGlzIGFsbG93ZWQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlci5cIlxuICAgICAgICB9LFxuICAgICAgICBcImluXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB0aGUgbG9jYXRpb24gb2YgdGhlIHBhcmFtZXRlci5cIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJib2R5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvciBvcHRpb25hbC5cIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgICAgfSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX2xhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZExhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9wbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRQbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfdHlwZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkVHlwZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZFR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRFbnVtTGFiZWxcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZEVudW1MYWJlbFwiXG5cdFx0XHRcdH1cbiAgICAgIH0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImhlYWRlclBhcmFtZXRlclN1YlNjaGVtYVwiOiB7XG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvciBvcHRpb25hbC5cIixcbiAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJpblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRldGVybWluZXMgdGhlIGxvY2F0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIFRoaXMgY291bGQgY29udGFpbiBleGFtcGxlcyBvZiB1c2UuICBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gaXMgYWxsb3dlZC5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgXCJib29sZWFuXCIsXG4gICAgICAgICAgICBcImludGVnZXJcIixcbiAgICAgICAgICAgIFwiYXJyYXlcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcHJpbWl0aXZlc0l0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2NvbGxlY3Rpb25Gb3JtYXRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNaW5pbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4TGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5MZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluTGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXR0ZXJuXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heEl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9taW5JdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImVudW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGVPZlwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tdWx0aXBsZU9mXCJcbiAgICAgICAgfSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX2xhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZExhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9wbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRQbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfdHlwZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkVHlwZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZFR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRFbnVtTGFiZWxcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZEVudW1MYWJlbFwiXG5cdFx0XHRcdH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicXVlcnlQYXJhbWV0ZXJTdWJTY2hlbWFcIjoge1xuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInJlcXVpcmVkXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb3Igb3B0aW9uYWwuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXRlcm1pbmVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgcGFyYW1ldGVyLlwiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInF1ZXJ5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIFRoaXMgY291bGQgY29udGFpbiBleGFtcGxlcyBvZiB1c2UuICBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gaXMgYWxsb3dlZC5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYWxsb3dFbXB0eVZhbHVlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJhbGxvd3Mgc2VuZGluZyBhIHBhcmFtZXRlciBieSBuYW1lIG9ubHkgb3Igd2l0aCBhbiBlbXB0eSB2YWx1ZS5cIlxuICAgICAgICB9LFxuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgICAgIFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICBcImFycmF5XCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9ybWF0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ByaW1pdGl2ZXNJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29sbGVjdGlvbkZvcm1hdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9jb2xsZWN0aW9uRm9ybWF0V2l0aE11bHRpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4aW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heExlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbkxlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF0dGVyblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXR0ZXJuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcInVuaXF1ZUl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3VuaXF1ZUl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbnVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2VudW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbXVsdGlwbGVPZlwiXG4gICAgICAgIH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9sYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRMYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfcGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkUGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX3R5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRUeXBlXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRUeXBlXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkRW51bUxhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRFbnVtTGFiZWxcIlxuXHRcdFx0XHR9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImZvcm1EYXRhUGFyYW1ldGVyU3ViU2NoZW1hXCI6IHtcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcblx0XHRcdFx0XCJeeC0oW150XXwodFteYl0pKVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy92ZW5kb3JFeHRlbnNpb25cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJyZXF1aXJlZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIG9yIG9wdGlvbmFsLlwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcImluXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB0aGUgbG9jYXRpb24gb2YgdGhlIHBhcmFtZXRlci5cIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJmb3JtRGF0YVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgcGFyYW1ldGVyLiBUaGlzIGNvdWxkIGNvbnRhaW4gZXhhbXBsZXMgb2YgdXNlLiAgR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duIGlzIGFsbG93ZWQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlci5cIlxuICAgICAgICB9LFxuICAgICAgICBcImFsbG93RW1wdHlWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZSxcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiYWxsb3dzIHNlbmRpbmcgYSBwYXJhbWV0ZXIgYnkgbmFtZSBvbmx5IG9yIHdpdGggYW4gZW1wdHkgdmFsdWUuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgXCJhcnJheVwiLFxuICAgICAgICAgICAgXCJmaWxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9ybWF0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ByaW1pdGl2ZXNJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29sbGVjdGlvbkZvcm1hdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9jb2xsZWN0aW9uRm9ybWF0V2l0aE11bHRpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4aW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4TGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heExlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbkxlbmd0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGF0dGVyblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXR0ZXJuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhJdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcInVuaXF1ZUl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3VuaXF1ZUl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbnVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2VudW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbXVsdGlwbGVPZlwiXG4gICAgICAgIH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9sYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRMYWJlbFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkTGFiZWxcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfcGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkUGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFBsYWNlaG9sZGVyXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX3R5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRUeXBlXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRUeXBlXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkRW51bUxhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRFbnVtTGFiZWxcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInBhdGhQYXJhbWV0ZXJTdWJTY2hlbWFcIjoge1xuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJyZXF1aXJlZFwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJyZXF1aXJlZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvciBvcHRpb25hbC5cIlxuICAgICAgICB9LFxuICAgICAgICBcImluXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGV0ZXJtaW5lcyB0aGUgbG9jYXRpb24gb2YgdGhlIHBhcmFtZXRlci5cIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJwYXRoXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBwYXJhbWV0ZXIuIFRoaXMgY291bGQgY29udGFpbiBleGFtcGxlcyBvZiB1c2UuICBHaXRIdWIgRmxhdm9yZWQgTWFya2Rvd24gaXMgYWxsb3dlZC5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyLlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgXCJib29sZWFuXCIsXG4gICAgICAgICAgICBcImludGVnZXJcIixcbiAgICAgICAgICAgIFwiYXJyYXlcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcHJpbWl0aXZlc0l0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2NvbGxlY3Rpb25Gb3JtYXRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNaW5pbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4TGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5MZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluTGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXR0ZXJuXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heEl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9taW5JdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImVudW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGVPZlwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tdWx0aXBsZU9mXCJcbiAgICAgICAgfSxcblx0XHRcdFx0XCJ4LXRiLWZpZWxkX2xhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZExhYmVsXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3gtdGItZmllbGRMYWJlbFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZF9wbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRQbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkUGxhY2Vob2xkZXJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRfdHlwZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy94LXRiLWZpZWxkVHlwZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwieC10Yi1maWVsZFR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZFR5cGVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcIngtdGItZmllbGRFbnVtTGFiZWxcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMveC10Yi1maWVsZEVudW1MYWJlbFwiXG5cdFx0XHRcdH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwibm9uQm9keVBhcmFtZXRlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgXCJpblwiLFxuICAgICAgICBcInR5cGVcIlxuICAgICAgXSxcbiAgICAgIFwib25lT2ZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9oZWFkZXJQYXJhbWV0ZXJTdWJTY2hlbWFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9mb3JtRGF0YVBhcmFtZXRlclN1YlNjaGVtYVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3F1ZXJ5UGFyYW1ldGVyU3ViU2NoZW1hXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcGF0aFBhcmFtZXRlclN1YlNjaGVtYVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwicGFyYW1ldGVyXCI6IHtcbiAgICAgIFwib25lT2ZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9ib2R5UGFyYW1ldGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbm9uQm9keVBhcmFtZXRlclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwic2NoZW1hXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgZGV0ZXJtaW5pc3RpYyB2ZXJzaW9uIG9mIGEgSlNPTiBTY2hlbWEgb2JqZWN0LlwiLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL3RpdGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZGVzY3JpcHRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL2RlZmF1bHRcIlxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL211bHRpcGxlT2ZcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL21heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1heGltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL21pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL2V4Y2x1c2l2ZU1pbmltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL2RlZmluaXRpb25zL3Bvc2l0aXZlSW50ZWdlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyRGVmYXVsdDBcIlxuICAgICAgICB9LFxuICAgICAgICBcInBhdHRlcm5cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL2RlZmluaXRpb25zL3Bvc2l0aXZlSW50ZWdlckRlZmF1bHQwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmlxdWVJdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heFByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pblByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJEZWZhdWx0MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9zdHJpbmdBcnJheVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW51bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjoge1xuICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICB9LFxuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9wcm9wZXJ0aWVzL3R5cGVcIlxuICAgICAgICB9LFxuICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zY2hlbWFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgXCJtaW5JdGVtc1wiOiAxLFxuICAgICAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtYVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICB9LFxuICAgICAgICBcImFsbE9mXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwibWluSXRlbXNcIjogMSxcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc2NoZW1hXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NjaGVtYVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjcmltaW5hdG9yXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwieG1sXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3htbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZXJuYWxEb2NzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4dGVybmFsRG9jc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhhbXBsZVwiOiB7fVxuICAgICAgfSxcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiZmlsZVNjaGVtYVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGRldGVybWluaXN0aWMgdmVyc2lvbiBvZiBhIEpTT04gU2NoZW1hIG9iamVjdC5cIixcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImZvcm1hdFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvdGl0bGVcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvcHJvcGVydGllcy9kZXNjcmlwdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWlyZWRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9zdHJpbmdBcnJheVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwiZmlsZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZXJuYWxEb2NzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4dGVybmFsRG9jc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhhbXBsZVwiOiB7fVxuICAgICAgfSxcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2VcbiAgICB9LFxuICAgIFwicHJpbWl0aXZlc0l0ZW1zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgIFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICAgICAgXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIFwiYXJyYXlcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmb3JtYXRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvcHJpbWl0aXZlc0l0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2NvbGxlY3Rpb25Gb3JtYXRcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZGVmYXVsdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF4aW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tYXhpbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4Y2x1c2l2ZU1heGltdW1cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltdW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluaW11bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leGNsdXNpdmVNaW5pbXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXhMZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWF4TGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5MZW5ndGhcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvbWluTGVuZ3RoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXR0ZXJuXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3BhdHRlcm5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21heEl0ZW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9taW5JdGVtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdW5pcXVlSXRlbXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImVudW1cIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZW51bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibXVsdGlwbGVPZlwiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9tdWx0aXBsZU9mXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2VjdXJpdHlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3NlY3VyaXR5UmVxdWlyZW1lbnRcIlxuICAgICAgfSxcbiAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzZWN1cml0eVJlcXVpcmVtZW50XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ4bWxcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVzcGFjZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcmVmaXhcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXR0cmlidXRlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwid3JhcHBlZFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ0YWdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJyZXF1aXJlZFwiOiBbXG4gICAgICAgIFwibmFtZVwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVybmFsRG9jc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leHRlcm5hbERvY3NcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzZWN1cml0eURlZmluaXRpb25zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwib25lT2ZcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvYmFzaWNBdXRoZW50aWNhdGlvblNlY3VyaXR5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvYXBpS2V5U2VjdXJpdHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vYXV0aDJJbXBsaWNpdFNlY3VyaXR5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb2F1dGgyUGFzc3dvcmRTZWN1cml0eVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29hdXRoMkFwcGxpY2F0aW9uU2VjdXJpdHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vYXV0aDJBY2Nlc3NDb2RlU2VjdXJpdHlcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJiYXNpY0F1dGhlbnRpY2F0aW9uU2VjdXJpdHlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJyZXF1aXJlZFwiOiBbXG4gICAgICAgIFwidHlwZVwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJiYXNpY1wiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhcGlLZXlTZWN1cml0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBcImluXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImFwaUtleVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5cIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImhlYWRlclwiLFxuICAgICAgICAgICAgXCJxdWVyeVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG5cdFx0XHRcdFwiXngtKFtedF18KHRbXmJdKSlcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvdmVuZG9yRXh0ZW5zaW9uXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJvYXV0aDJJbXBsaWNpdFNlY3VyaXR5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCJmbG93XCIsXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblVybFwiXG4gICAgICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJvYXV0aDJcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmbG93XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgXCJpbXBsaWNpdFwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInNjb3Blc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9vYXV0aDJTY29wZXNcIlxuICAgICAgICB9LFxuICAgICAgICBcImF1dGhvcml6YXRpb25VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyUGFzc3dvcmRTZWN1cml0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwiZmxvd1wiLFxuICAgICAgICBcInRva2VuVXJsXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcIm9hdXRoMlwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImZsb3dcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcInBhc3N3b3JkXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic2NvcGVzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29hdXRoMlNjb3Blc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidG9rZW5VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyQXBwbGljYXRpb25TZWN1cml0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwiZmxvd1wiLFxuICAgICAgICBcInRva2VuVXJsXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcIm9hdXRoMlwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImZsb3dcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImFwcGxpY2F0aW9uXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic2NvcGVzXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL29hdXRoMlNjb3Blc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidG9rZW5VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyQWNjZXNzQ29kZVNlY3VyaXR5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCJmbG93XCIsXG4gICAgICAgIFwiYXV0aG9yaXphdGlvblVybFwiLFxuICAgICAgICBcInRva2VuVXJsXCJcbiAgICAgIF0sXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcIm9hdXRoMlwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImZsb3dcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICBcImFjY2Vzc0NvZGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzY29wZXNcIjoge1xuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvb2F1dGgyU2NvcGVzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJhdXRob3JpemF0aW9uVXJsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcInVyaVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwidG9rZW5VcmxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwidXJpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuXHRcdFx0XHRcIl54LShbXnRdfCh0W15iXSkpXCI6IHtcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3ZlbmRvckV4dGVuc2lvblwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwib2F1dGgyU2NvcGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1lZGlhVHlwZUxpc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL21pbWVUeXBlXCJcbiAgICAgIH0sXG4gICAgICBcInVuaXF1ZUl0ZW1zXCI6IHRydWVcbiAgICB9LFxuICAgIFwicGFyYW1ldGVyc0xpc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgcGFyYW1ldGVycyBuZWVkZWQgdG8gc2VuZCBhIHZhbGlkIEFQSSBjYWxsLlwiLFxuICAgICAgXCJhZGRpdGlvbmFsSXRlbXNcIjogZmFsc2UsXG4gICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCJvbmVPZlwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9wYXJhbWV0ZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9qc29uUmVmZXJlbmNlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInVuaXF1ZUl0ZW1zXCI6IHRydWVcbiAgICB9LFxuICAgIFwic2NoZW1lc0xpc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgdHJhbnNmZXIgcHJvdG9jb2wgb2YgdGhlIEFQSS5cIixcbiAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICBcImh0dHBcIixcbiAgICAgICAgICBcImh0dHBzXCIsXG4gICAgICAgICAgXCJ3c1wiLFxuICAgICAgICAgIFwid3NzXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwidW5pcXVlSXRlbXNcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJjb2xsZWN0aW9uRm9ybWF0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgXCJjc3ZcIixcbiAgICAgICAgXCJzc3ZcIixcbiAgICAgICAgXCJ0c3ZcIixcbiAgICAgICAgXCJwaXBlc1wiXG4gICAgICBdLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiY3N2XCJcbiAgICB9LFxuICAgIFwiY29sbGVjdGlvbkZvcm1hdFdpdGhNdWx0aVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgIFwiY3N2XCIsXG4gICAgICAgIFwic3N2XCIsXG4gICAgICAgIFwidHN2XCIsXG4gICAgICAgIFwicGlwZXNcIixcbiAgICAgICAgXCJtdWx0aVwiXG4gICAgICBdLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiY3N2XCJcbiAgICB9LFxuICAgIFwidGl0bGVcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvdGl0bGVcIlxuICAgIH0sXG4gICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvcHJvcGVydGllcy9kZXNjcmlwdGlvblwiXG4gICAgfSxcbiAgICBcImRlZmF1bHRcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZGVmYXVsdFwiXG4gICAgfSxcbiAgICBcIm11bHRpcGxlT2ZcIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvbXVsdGlwbGVPZlwiXG4gICAgfSxcbiAgICBcIm1heGltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvbWF4aW11bVwiXG4gICAgfSxcbiAgICBcImV4Y2x1c2l2ZU1heGltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZXhjbHVzaXZlTWF4aW11bVwiXG4gICAgfSxcbiAgICBcIm1pbmltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvbWluaW11bVwiXG4gICAgfSxcbiAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZXhjbHVzaXZlTWluaW11bVwiXG4gICAgfSxcbiAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyXCJcbiAgICB9LFxuICAgIFwibWluTGVuZ3RoXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJEZWZhdWx0MFwiXG4gICAgfSxcbiAgICBcInBhdHRlcm5cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvcGF0dGVyblwiXG4gICAgfSxcbiAgICBcIm1heEl0ZW1zXCI6IHtcbiAgICAgIFwiJHJlZlwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIy9kZWZpbml0aW9ucy9wb3NpdGl2ZUludGVnZXJcIlxuICAgIH0sXG4gICAgXCJtaW5JdGVtc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvZGVmaW5pdGlvbnMvcG9zaXRpdmVJbnRlZ2VyRGVmYXVsdDBcIlxuICAgIH0sXG4gICAgXCJ1bmlxdWVJdGVtc1wiOiB7XG4gICAgICBcIiRyZWZcIjogXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMvcHJvcGVydGllcy91bmlxdWVJdGVtc1wiXG4gICAgfSxcbiAgICBcImVudW1cIjoge1xuICAgICAgXCIkcmVmXCI6IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjL3Byb3BlcnRpZXMvZW51bVwiXG4gICAgfSxcbiAgICBcImpzb25SZWZlcmVuY2VcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgXCIkcmVmXCJcbiAgICAgIF0sXG4gICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblx0XHRcIngtdGItZmllbGRMYWJlbFwiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwibWluTGVuZ3RoXCI6IDFcblx0XHR9LFxuXHRcdFwieC10Yi1maWVsZFBsYWNlaG9sZGVyXCI6IHtcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiXG5cdFx0fSxcblx0XHRcIngtdGItZmllbGRUeXBlXCI6IHtcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJlbnVtXCI6IFtcblx0XHRcdFx0XCJ0ZXh0XCIsXG5cdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFwiZW1haWxcIixcblx0XHRcdFx0XCJzZWxlY3RcIixcblx0XHRcdFx0XCJnZW9sb2NhdGlvblwiLFxuXHRcdFx0XHRcImhpZGRlblwiXG5cdFx0XHRdXG5cdFx0fSxcblx0XHRcIngtdGItZmllbGRFbnVtTGFiZWxcIjoge1xuXHRcdFx0XCJ0eXBlXCI6IFwiYXJyYXlcIixcblx0XHRcdFwiaXRlbXNcIjoge1xuXHRcdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJtaW5MZW5ndGhcIjogMVxuXHRcdFx0fVxuXHRcdH1cbiAgfVxufVxuIl19