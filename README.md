# pipe-stream

A function that pipes streams

## Example

``` js
var net = require("net")
    , piper = require("pipe-stream")
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

`npm install pipe-stream`

## Contributors

 - Raynos

## MIT Licenced