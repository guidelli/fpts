export const log= console.log.bind(console)
export const tap= f=> v=>{
    f(v)
    return v
}

export const tapLog= tap(log)