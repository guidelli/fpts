import { parseUrl} from 'parse-url'


function isDotCom(url) {

try{
    const parsed= parseUrl('http://www.website.com/posts?hello=world')
}
catch{
    return false
}

}
