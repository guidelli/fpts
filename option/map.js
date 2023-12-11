import * as O from 'fp-ts/lib/Option.js'
import { pipe } from 'fp-ts/lib/function.js'
import { log, tapLog } from '../util.js'

const foo= {
    bar: 'baz'
}




const map1= o=>pipe(o, O.fromNullable, O.map(({bar})=>bar), O.getOrElse())

log(map1(foo))