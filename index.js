module.exports = piper

function piper(Stream) {
    return pipe

    function pipe(stream) {
        var s = Stream()
        stream.pipe(s).pipe(stream)
    }
}