const arr = Array.from({ length: 10000 }, (_, i) => false);

arr.map((_,i) =>{
    const num = i + 1
    const str = num.toString()
    const sum = [...str].reduce((a, c) => parseInt(a) + parseInt(c), num)
   
	arr[sum] = true;
});

arr.map((bool, i) => {
    i != 0 && !bool && console.log(i)
})