function Message() {
    // the code below will be complied to Js
    // tsx = ts + jsx(html format code) => for React dev
    let name:string = 'Wbb'
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello TypeScript</h1>
}

export default Message