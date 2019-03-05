# Abstract Schema

```
https://example.com/schemas/abstract
```

This is an abstract schema. It has `definitions`, but does not declare any properties

| [Abstract](../abstract.md) | Extensible | [Status](../status.md) | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------------------------|------------|------------------------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [abstract.schema.json](abstract.schema.json) |

# Abstract Definitions

| Property | Type | Group |
|----------|------|-------|
| [bar](#bar) | `string` | `https://example.com/schemas/abstract#/definitions/second` |
| [foo](#foo) | `string` | `https://example.com/schemas/abstract#/definitions/first` |
| [nonfoo](#nonfoo) | `const` | `https://example.com/schemas/abstract#/definitions/first` |

## bar

A unique identifier given to every addressable thing.

`bar`
* is optional
* type: `string`
* defined in this schema

### bar Type


`string`






## foo

A unique identifier given to every addressable thing.

`foo`
* is optional
* type: `string`
* defined in this schema

### foo Type


`string`






## nonfoo

This is not foo.

`nonfoo`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
false
```



<Chart>{"id":"barGraph","type":"bar","data":{"labels":["2015-01","2015-02","2015-03","2015-04","2015-05","2015-06","2015-07","2015-08","2015-09","2015-10","2015-11","2015-12"],"datasets":[{"label":"# of Tomatoes","data":[12,19,3,5,2,3,20,3,5,6,2,1],"backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],"borderColor":["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],"borderWidth":1}]},"options":{"responsive":false,"scales":{"xAxes":[{"ticks":{"maxRotation":90,"minRotation":80}}],"yAxes":[{"ticks":{"beginAtZero":true}}]}}}</Chart>