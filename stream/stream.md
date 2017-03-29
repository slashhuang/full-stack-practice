## stream数据结构分解




|- Writable Streams
|- |- EVENTS
|- |- |- close
|- |- |- drain
|- |- |- error
|- |- |- finish
|- |- |- pipe
|- |- |- unpipe
|- |- |
|- |- Methods
|- |- |- end([chunk][, encoding][, callback])
|- |- |- cork
|- |- |- setDefaultEncoding(encoding)
|- |- |- uncork()
|- |- |- write(chunk[, encoding][, callback])


|- Readable Streams
|- |- MODES
|- |- |- flow mode
|- |- |- pause mode
|- |- |
|- |- state
|- |- |- _readableState.flowing = null
|- |- |- _readableState.flowing = false
|- |- |- _readableState.flowing = true
|- |- |
|- |- EVENTS
|- |- |- close
|- |- |- data
|- |- |- end
|- |- |- error
|- |- |- readable
|- |- |
|- |- Methods
|- |- |- isPaused()
|- |- |- pause()
|- |- |- pipe(destination[, options])
|- |- |- read([size])
|- |- |- resume()
|- |- |- setEncoding(encoding)
|- |- |- pipe(destination[, options])
|- |- |- unpipe([destination])
|- |- |- unshift(chunk)








