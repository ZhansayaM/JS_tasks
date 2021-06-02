//task1
let arr = ['258369', '45678913', '123456789', '147588', '2356', '457896532', '114477'];
for (let i = 0; i < arr.length; i++){
    if (arr[i].substr(0, 1) === '2' || arr[i].substr(0, 1) === '4'){
        console.log(arr[i]);
    }
}

//task2
for (let i = 1; i <= 100; i++){
    let flag = 0;
    for (let j = 2; j < i; j++){
        if (i % j === 0){
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag === 0){
        console.log(i + '\tДелители этого числа: ' + 1 + '\t' + i);
    }
}