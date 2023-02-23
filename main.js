1
//выведите в консоли каждый элемент из  массива с помощью for с тремя инструкциями
let arr = ['q','w','r','t'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

2
//выведите в консоли каждый индекс элемента из массива с помощью for с тремя инструкциями
let arr1 = ['q','w','r','t'];

for(let i = 0; i < arr1.length; i++){
    console.log(i);
}

3
//выведите в консоли каждый элемент с помощью for...of
let arr2 = ['q','w','r','t'];

for(let item of arr2){
    console.log(item);
}

4
//выведите в консоли каждый индекс элемента с помощью for...in
let arr3 = ['q','w','r','t'];

for(let index in arr3){
    console.log(arr3[index]);
}

5
//выведите в консоли каждый элемент с помощью forEach
let arr4 = ['q','w','r','t'];
arr4.forEach((element) => {
    console.log(element);
});

6
//выведите в консоли каждый индекс элемента с помощью forEach
let arr5 = ['q','w','r','t'];
arr5.forEach((element, index) => {
    console.log(index);
});

7
//выведите в консоли каждый элемент и индекс элемента с помощью forEach
let arr6 = ['q','w','r','t'];


8
//выведите в консоли слово 'hello' с помощью while
let text = 'Hello';


9
//создайте любой цикл с помощью do...while


10
//создайте цикл который остановится если один из элементов будет строкой 'r'
let arr7 = ['q','w','r','t'];

for(let i = 0; i < arr7.length; i++){
    if(arr7[i] == 'r'){
        console.log(arr7[i]);
        break
    }
    
}

11
//создайте цикл который не выведет в консоли строку 't' из массива, а все остальные выведет
let arr8 = ['q','w','r','t'];

for(let i = 0; i < arr8.length; i++){
    if(arr8[i] == 't'){
        continue
    }
    console.log(arr8[i]);
}

12
function comp(a, b){
    if(a.length === b.length){
        return true
    }
    else{
        return false
    }
}
console.log(comp(ab, cd));

13
function empty(a){
    if(a){
        return true
    }
    else{
        return false
    }
}
console.log(empty(" "));

14
function divisibleByFive(a){
    if(a % 5 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(divisibleByFive(55));

15
function divisible(a){
    if(a % 100 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(divisible(1000));

16
function length(a){

}