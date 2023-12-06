
// let checkName = new Promise(function (resolve, reject) {
//     let name = "preet";
//     if (name === 'preet') {
//         resolve("name matched")
//     } else {
//         reject("name not matched")
//     }
// }
// )
// checkName.then(
//     function (value){
//         console.log(value)
//     },function(error){
//         console.log(error);
//     }
// )

function checkName(n){
    return new Promise(function(resolve,reject){
        let str = "harry"
        if(str === n ){
            resolve("name matched")
        }else{
            reject("name not matched")
        }
    })
    // .then((value)=>{
    //     console.log(value)
    // }).catch((error)=>{
    //     console.log(error)
    // })

}

checkName("harry").then((data)=>{
    console.log(data);
})