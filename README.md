# privacy-triage
A simple webapp to help sort things out in privacy triaging

## Creating queries

The easiest way to create a query is to use Bugzilla.

1. Navigate to https://bugzilla.mozilla.org/ > Advanced Search.
2. Create your desired query.
3. In the URL, look at the parameters (key=value pairs after `?`) and turn them into a JSON list.
4. Paste the list into the `"query:"` section of the table.

Some parameters can be ignored like `list_id`

### Example:

For the bugzilla query: https://bugzilla.mozilla.org/buglist.cgi?query_format=advanced&resolution=---&list_id=17192745&component=Data%20Sanitization&classification=Components&product=Toolkit

The query looks like:
```js
"query:" {
  "query_format" : "advanced",
  "resolution" : "---",
  "component" "Data Sanitization",
  "classification" : "Components",
  "product" : "Toolkit",
},
```


