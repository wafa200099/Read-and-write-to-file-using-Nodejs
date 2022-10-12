//read as json 
//we want to convert json to javascript obj to save 
//The "Unexpected token o in JSON at position 1" error occurs when we try to JSON.parse a value that is not a valid JSON string, e.g. a native JavaScript object. To solve the error, use the JSON.stringify() method if you need to convert a value to JSON.


const csv = require('csv-parser');
const fs = require('fs');
const data=[]
function read(){
fs.createReadStream('usersData.csv')
  .pipe(csv())
  .on('data', (row) => {
   
    data.push(row)
    // console.log(data);

//    JSON.parse(JSON.stringify(data))


  })
  .on('end', () => {
    console.log('CSV file successfully processed');


}


)

 return data//[] ما بتخرج الاريه من الداخل
}


function save(udata){
    // let data=JSON.parse(userData)
    // console.log(data);
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
      path: 'out.csv',
      header: [
        {id: 'UserName', title: 'UserName'},
        {id: 'BirthDate', title: 'BirthDate (MM/DD/YYYY)'},
        {id: 'Address', title: 'Address'},
        {id: 'MobileNumber', title: 'MobileNumber'},
        {id: 'Gender', title: 'Gender (M/F)'}
      ]
    });
    csvWriter
    .writeRecords(udata)
    .then(()=> console.log('The CSV file was written successfully'));
  }


 
  
  const udata = [
    {
        UserName: 'Tamer',
        BirthDate : ' 05/25/1994',
         Address: ' Nablus',
         MobileNumbe: ' 0599999999',
        Gender : ' M'
      },
      {
        UserName: 'Shaymaa',
        BirthDate : ' 01/01/1990',
         Address: ' Ramallah',
        MobileNumber: ' 0560000000',
         Gender : ' F'
      },
      {
        UserName: 'Karam',
        BirthDate : ' 01/01/1999',
        Address: ' Tubas',
        MobileNumber: ' 0511111111',
        Gender: ' M'
      }
  ];


  let res = read()
  console.log(res);
  save(udata)
