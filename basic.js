// 1. for EDCBA

function toUpper() {

    let str = "abcde"
    let str1 = str.toUpperCase()
    let op = ''
    for (let i = str1.length; i >= 0; i--) {
        op += str1.charAt(i)

    }
    console.log(op);
}

// toUpper()


// for aaabbcccdd  a3b2c3d2


// let str = 'aaabbcccddaassfffbbb'
// let op = ''
// for (let i = 0; i < str.length; i++) {
//     let x = str.charAt(i)
//     if(x === str.charAt(i-1)){
//         continue
//     }
//     let cnt = 1
//     // console.log(x);
//     for (let j = i + 1; j < str.length; j++) {
//         let y =str.charAt(j)

//         if (x === y) {
//             cnt++
//         }else{
//             break
//         }
//     }
//     op += x+cnt
// }    
// console.log(op);




// 3. for str = "he9ll3th9ism7ynam8ema8i6der" 

// let str = "he9ll3th9ism7ynadhshsgbsfhrtrhsfnm8ema8i6der"
// let alp = "qwertyuiopasdfghjklzxcvbnm"
// let num = "0123456789"
// let cnt = 0
// let numSum = 0
// for (let i = 0; i < str.length; i++) {
//     let x = str.charAt(i)
//     if (alp.includes(x)) {
//         cnt++
//     }else if(num.includes(x)){
//         let int = parseInt(x)
//         numSum +=int
//     }
// }

// let result = numSum/cnt
// result = Math.floor((result*1000))/1000

// console.log(result);





// let arr = ['hi','dunia','kaisi','ho','hi','ho']

//  let arr1 = arr.map((x)=>{
//     return x.toUpperCase()
// })
// let arr2 = arr.filter((x)=>{
//     if(x === 'hi')
//     return x
// })
// console.log(arr);
// console.log(arr1)
// console.log(arr2)




// let str = 'arrb6???8x?xbl5??e?ee5'
// let digit = "0123456789"
// let num, num2, cnt
// for (let i = 0; i < str.length; i++) {
//     let a = str.charAt(i)
//     if (digit.includes(a)) {
//         num = parseInt(a)
//         cnt = 0
//         for (let j = i + 1; j < str.length; j++) {
//             let ques = str.charAt(j)
//             if (ques === '?') {
//                 cnt++
//             } else if (digit.includes(ques)) {
//                 num2 = parseInt(ques)
//                 break
//             }
//         }
//         if (num + num2 == 10) {
//             if (cnt == 3) {
//                 console.log("true");
//                 break
//             }
//         } else {
//             console.log("false");

//         }
//     }
// }


function callPerRate(calls) {

    let call = calls;
    let rate = 0, cost = 0

    if (call > 0 && call < 100) {
        console.log("it is free of cost");
    } else if (call >= 100 && call < 200) {
        rate = 50  // 50 paise per call
        cost = (call * rate) / 100
        console.log("The total cost is :", cost);
    } else if (call >= 200 && call < 300) {
        rate = 70
        cost = (call * rate) / 100
        console.log("The total cost is :", cost);
    } else {
        rate = 90
        cost = (call * rate) / 100
        console.log("The total cost is :", cost);
    }
}

// callPerRate()

// EN  JEZWGG93118
// CN MD2A17CZ9GWG19172


function nameModify(name){

    let str = name
    let arr = str.split(" ")
    let str2 = '';
    
    for (let i = 0; i < arr.length; i++) {
        if (i == 2) {
            break
        }
        str2 += arr[i].charAt(0) + '.'
    }
    str2 += arr[2]
    
    console.log(str2.toUpperCase());
    
}

// nameModify("shubam kumar jha")    