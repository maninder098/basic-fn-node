// *
// **
// ***
// ****

function p1() {                                           // *
    for (let i = 1; i <= 5; i++) {                        // **
        let row = '';                                     // ***

        for (let j = 1; j <= i; j++) {
            row += '*';
        }

        console.log(row);
    }

}

// *
// **
// ***
// ****
function p2() {

    for (let i = 1; i <= 5; i++) {
        let row = '';
        for (let j = 5; j >= i; j--) {
            row += '*';
        }
        console.log(row);
    }



}

p2()

function p3() {

    for (let i = 1; i <= 5; i++) {
        let row = ''
        for (let j = 5; j >= 1; j--) {
            if (i >= j) {
                row += '*'
            } else {
                // console.log(" ");
                row += '1 '
            }
        }
        console.log(row);
    }
}

p3()

function p4() {
    for (let i = 5; i >= 1; i--) {
        let row = ''
        for (let j = 5; j >= 1; j--) {
            if (i >= j) {
                row += '*'
            } else {
                // console.log(" ");
                row += ' '
            }
        }
        console.log(row);
    }

}


function p5() {

    for (let i = 1; i <= 5; i++) {
        let row = ''
        for (let j = 5; j >= 1; j--) {
            if (i >= j) {
                row += ' *'
            } else {
                // console.log(" ");
                row += ' '
            }
        }
        console.log(row);
    }
}


function p6() {

    for (let i = 1; i <= 5; i++) {
        let row = ''
        for (let j = 1; j <= 5; j++) {
            if (i == 3 || j == 3) {
                row += "*"
            } else {
                row += ' '
            }
        }
        console.log(row);
    }
}

// p6()


function p7(){
    let x =1,y=10
    for(let i=1;i<=6;i++){
        let row = ''
        for(let j=1;j<=10;j++){
            if(j>=x && j<=y){
                row +=' '
            }else{
                row +='*'
            }
        }
        console.log(row);
        x++
        y--
    }

}
//  p7()

// for(let i=1;i<=25;i++){
//     let row = ''
//     if(i*5){
//         console.log('\n');
//     }else{
//         row +='*'
//     }
//     console.log(row);
// }






