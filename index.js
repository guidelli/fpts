import parseUrl  from 'parse-url'


function isDotCom(url) {

try{
    const parsed= parseUrl(url)
    const resource= parsed.resource
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

const log= console.log

log(isDotCom('http://www.website.com/posts?hello=world'))

log(isDotCom('http://www.website.net/posts?hello=world'))


log(isDotCom('dqsdqs'))