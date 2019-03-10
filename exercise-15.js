function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    var bucket = []
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (var i=0;i<alphabet.length;i++){
        for (var j=0;j<animals.length; j++){
            if (alphabet[i]===animals[j][0]){
                bucket.push(animals[j])
            }
        }
    }
    // console.log (bucket)



for (var i=0; i<bucket.length; i++){
    var arr=[]
    var flag = false
    
    for (var j=0; j<result.length; j++){
        
    
        if (bucket[i][0]===result[j][0][0]){
            flag = true
            var hasil = bucket [i]
           
            
            // console.log(value)
            result[j][1]= bucket[i]
            // console.log(result[j])
        }
               
    }
    // console.log()
    if (flag === false){
        arr.push(bucket[i])
        result.push(arr)
    }

}

// console.log(flag)
return result

}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]