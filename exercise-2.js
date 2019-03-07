function balikString(str){
    line =''
    for (var i = str.length-1; i>=0; i--){
        line += str[i]
    }
    return line
}

console.log (balikString('hello world!'))