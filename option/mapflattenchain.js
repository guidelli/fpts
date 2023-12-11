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


const map1= o=>pipe(o, 
    O.fromNullable, 
    O.map(({bar})=>bar))



const map2= o=>pipe(o, 
    O.fromNullable, 
    O.map(({bar})=>bar), 
    O.getOrElse(()=>null))


const map3= o=>pipe(o, 
    O.fromNullable, 
    O.map(({bar: {buzz}})=>buzz))


log('\n--- map')
log(map1(foo))
log(map1(null))

log('\n--- getOrElse')
log(map2(foo))
log(map2(null))

log('\n--- flatten')
log(map3(foobuzz))
log(map3(null))
log(map3(foo))
log(map3({s: 55}))