# piper

A function that pipes streams

## Example

``` js
var net = require("net")
    , piper = require("../index")
    , through = require("through")

net.createServer(piper(through)).listen(12632, function () {
    var conn = net.connect(12632)

    conn.on("data", function (data) {
        console.log("[CLIENT]", data.toString())
    })

    conn.write("self")
})
```

## Installation

`npm install piper`

## Contributors

 - Raynos

## MIT Licenced