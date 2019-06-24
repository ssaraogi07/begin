const handlebars = require('handlebars');
const test_data = `<products>
{{#each objects}}
   <product>
       <baseId>{{baseId}}</baseId>
       {{#if feature}}
       <features>
            {{#each feature}}
           <feature>{{this}}</feature>
           {{/each}}
       </features>
       {{/if}}
       <isActive>{{isActive}}</isActive>
       {{#if contentType}}
       <contentType>
            {{#each contentType}}
            <contentTypeValue>{{this.value}}</contentTypeValue>
            {{/each}}
       </contentType>
       {{/if}}
       {{#if searchTerms}}
       <searchTerms>
            {{#each searchTerms}}
           <searchTermValue>{{this}}</searchTermValue>
           {{/each}}
       </searchTerms>
       {{/if}}
       <childProducts>
            {{#each childProducts}}
           <childProduct>
               <baseId>{{baseId}}</baseId>
               <isActive>{{isActive}}</isActive>
               {{#if feature}}
               <features>
                    {{#each feature}}
                   <feature>{{this}}</feature>
                   {{/each}}
               </features>
               {{/if}}
               {{#if searchTerms}}
               <searchTerms>
                    {{#each searchTerms}}
                   <searchTermValue>{{this}}</searchTermValue>
                   {{/each}}
               </searchTerms>
               {{/if}}
           </childProduct>
            {{/each}}
       </childProducts>
   </product>
{{/each}}
</products>`;
const feeder_data = [
    {
        "baseId": "1",
        "feature": {
            "1": "parent",
            "2": "first entry"
        },
        "contentType": {
            "1": {
                "value": "pure"
            },
            "2": {
                "value": "mix"
            }
        },
        "isActive": true,
        "childProducts": [
            {
                "baseId": "1-1",
                "isActive": true
            },
            {
                "baseId": "1-2",
                "isActive": false
            },
            {
                "baseId": "1-3",
                "isActive": true
            },
            {
                "baseId": "1-4",
                "isActive": true,
                "feature": {
                    "1": "parent",
                    "2": "first entry"
                },
                "searchTerms": {
                    "0": "glue",
                    "1": "adhesive",
                    "2": "stick"
                }
            }
        ]
    },
    {
        "baseId": "10",
        "isActive": true,
        "searchTerms": {
            "0": "glue",
            "1": "adhesive",
            "2": "stick"
        },
        "childProducts": [
            {
                "baseId": "10-1",
                "isActive": true,
                "searchTerms": {
                    "0": "glue"
                }
            },
            {
                "baseId": "10-2",
                "isActive": false
            },
            {
                "baseId": "10-3",
                "isActive": true
            },
            {
                "baseId": "10-4",
                "isActive": true
            }
        ]
    }
]


var template = handlebars.compile(test_data);

var wrapper  = {objects: feeder_data};
var result = template(wrapper);
console.log(result);
