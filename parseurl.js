import parseUrl  from 'parse-url'
import * as O from 'fp-ts/lib/Option.js'
import * as A from 'fp-ts/lib/Array.js'
import { pipe } from 'fp-ts/lib/function.js'


const log= console.log

function isDotCom(url) {

try{
    const parsed= parseUrl(url)
    const resource= parsed.resource
    //log(resource)
    const parts= resource.split('.')
    const n = parts.length

    if(n>1){
        const tld= parts[n-1]
        if(tld==='com')
         return true
        return false
    } else 
    return false
}
catch{
    return false
}

}

const tap= f=>opt=>{
    f(opt)
    return opt
}

const tapLog= tap(log)

const tryParsingUrl= url=>O.tryCatch(()=>parseUrl(url))

const getTld= resource=> pipe(resource, 
    r=>r.split('.'), 
    A.last)

function isDotComOpt(url) {

    const parsedUrlOpt= tryParsingUrl(url)
    const resourceOpt= O.map(p=>p.resource)(parsedUrlOpt)
    const tldOpt= O.chain(getTld)(resourceOpt)
    const isComOpt= O.map(tld=> tld==='com')(tldOpt)
    const idDotCom= O.getOrElse(()=>false)(isComOpt)
    return idDotCom


}


const isDotComOptPipe= url=>pipe(url,
        tryParsingUrl,
        O.map(p=>p.resource),
        O.chain(getTld),
        O.map(tld=> tld==='com'),
        O.getOrElse(()=>false))


const isDotComOptPipeExists= url=>pipe(url,
    tryParsingUrl,
    O.map(p=>p.resource),
    O.chain(getTld),
    O.exists(tld=> tld==='com'))


const test= f=>{

    log(f('http://www.website.co.com/posts?hello=world'))
    log(f('http://website.com/posts?hello=world'))
    log(f('http://www.website.net/posts?hello=world'))
    log(f('dqsdqs')) 
}


const fns= [isDotCom, isDotComOpt, isDotComOptPipe, isDotComOptPipeExists]
fns.forEach(f=>{
    log('\n------------------\n')
    test(f)
})



