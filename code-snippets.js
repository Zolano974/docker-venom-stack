//TODO: cette conf permet de réaliser un snippet VSCode
var hapiroute = {
	"HAPI Route" : {
		"scope": "javascript,typescript",
		"prefix": "hapiroute",
		"body" : [
			"{",
			"  method: '$1',",
			"  path: '$2',",
			"  handler: service.$3,",
			"  config: {",
			"  //auth: {",
			"    //strategy: 'token'",
			"  //},",
			"    validate: {",
			"      params: {",
			"        id: Joi.number().integer(),",
			"        title: Joi.string().alphanum().min().max.required(),",
			"      }",
			"    },",
			"    cors: true",
			" }",
			"},"
		],
		"description": "empty HAPI route"
	}
}