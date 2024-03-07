function solution(my_string, overwrite_string, s) {
    arr = [...my_string]
    n = overwrite_string.length
    
    arr.splice(s, n, overwrite_string)
    
    return arr.join('');
}