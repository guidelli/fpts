import * as O from 'fp-ts/lib/Option.js'
import { pipe } from 'fp-ts/lib/function.js'
import { log, tapLog } from '../util.js'


const foo= {
    bar: 'baz'
}

const foobuzz= {
    bar: {
        buzz: 'fizz'
    }
}


const mapbar= o=>pipe(o, 
    O.fromNullable, 
    O.map(({bar})=>bar))



const mapbargetorelse= o=>pipe(o, 
    O.fromNullable, 
    O.map(({bar})=>bar), 
    O.getOrElse(()=>null))


const mapbarbuzz= o=>pipe(o, 
    O.fromNullable, 
    O.map(({bar: {buzz}})=>buzz))




log('\n--- mapbar')
log(mapbar(foo))
log(mapbar(null))
log(mapbar(55))


log('\n--- mapbargetorelse')
log(mapbargetorelse(foo))
log(mapbargetorelse(null))
log(mapbargetorelse(55))


log('\n--- foobuzz')
log(mapbarbuzz(foobuzz))
log(mapbarbuzz(null))
log(mapbarbuzz(foo))
log((()=>{
    try {
        mapbarbuzz({s: 55})
    } catch (error) {
        return error.message
    }
})())