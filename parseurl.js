import parseUrl  from 'parse-url'
import * as O from 'fp-ts/Option'

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



function tryParsingUrl(url){
return O.tryCatch(()=>parseUrl(url))
}

function isDotComOpt(url) {
    
}


log(isDotCom('http://www.website.co.com/posts?hello=world'))
log(isDotCom('http://website.com/posts?hello=world'))
/* log(isDotCom('http://www.website.net/posts?hello=world'))
log(isDotCom('dqsdqs')) */