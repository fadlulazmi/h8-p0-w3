function dataHandling (n) {
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    
    

    for (var i=0; i<input.length; i++){
        // for (var j=0; j<input[i].length; j++){
        
           
            console.log('Nomor ID: '+input[i][0])
            console.log('Nama Lengkap: '+input[i][1])
            console.log('TTL: '+input[i][2]+', '+input[i][3])
            console.log('Hobby: '+input[i][4]+'\n')
        
    }
    

//  return input
}
console.log(dataHandling(1))
// var input = [
//             ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//             ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//             ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//             ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//         ]

// console.log (input[1][0])

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun