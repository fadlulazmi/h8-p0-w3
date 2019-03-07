var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    var remove = input.splice (1,1,"Roman Alamsyah Elsharawy")
    var remove = input.splice (2,1,"Provinsi Bandar Lampung")
    var remove = input.splice (4,1,"Pria", "SMA Internasional Metro")
    console.log(input)
    console.log('\n')    
    var tanggal = input[3].split("/")
    switch (tanggal[1]) {
        case '01': console.log('Januari\n')
            break;
        case '02': console.log('februari\n')
            break;
        case '03': console.log('maret\n')
            break;
        case '04': console.log('april\n')
            break;
        case '05': console.log('mei\n')
            break;
        case '06': console.log('juni\n')
            break;
        case '07': console.log('juli\n')
            break;
        case '08': console.log('agustus\n')
            break;
        case '09': console.log('september\n')
            break;
        case '10': console.log('oktober\n')
            break;
        case '11': console.log('november\n')
            break;
        case '12': console.log('desember\n')
            break;
    }
    console.log(tanggal)
    console.log('\n')
    tanggal.sort(function(a, b){return b-a})
    console.log(tanggal)
    console.log('\n')
    console.log(tanggal.join('-'))
    console.log('\n')
    var name = input[1].slice(0,15)
    console.log(name)
    console.log('\n')
    
    


}

dataHandling2(input)
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]