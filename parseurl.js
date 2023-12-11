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
        resource.split('.'),
        A.last)

function isDotComOpt(url) {

    const parsedUrlOpt= tryParsingUrl(url)
    const resourceOpt= O.map(p=>p.resource)(parsedUrlOpt)
    const tldOpt= O.map(getTld)(resourceOpt)

    log(tldOpt)
    
    /*
    pipe(url,
        tryParsingUrl,
        tapLog)
        */
}

log(isDotComOpt('http://www.website.co.com/posts?hello=world'))

/*
log(isDotCom('http://www.website.co.com/posts?hello=world'))
log(isDotCom('http://website.com/posts?hello=world'))
log(isDotCom('http://www.website.net/posts?hello=world'))
log(isDotCom('dqsdqs')) */