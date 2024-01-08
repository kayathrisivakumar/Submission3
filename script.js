//iife function -print odd numbers in an array        
        (

            function (arr){

                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 !== 0) {
                        console.log(arr[i]);
                    }
                }
            }

        )([1, 2, 3, 4, 5, 6])

      
//annonymous funtion - Print odd numbers in an array
                    var odd = function (arr) {

                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i] % 2 !== 0) {
                                console.log(arr[i]);
                            }
                        }
                    }
                    odd([1, 2, 3, 4, 5])
      
//iife function -Convert all the strings to title caps in a string array

        (
            function(a){

            for (let i = 0; i < a.length; i++){
                //alert(a[i]);
                a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1)
            }
            console.log(a);

        }

        )(["cat", "lion", "tiger", "dog"])

        //annonymous function -Convert all the strings to title caps in a string array

        var title=function(a){

            for (let i = 0; i < a.length; i++) {
                //alert(a[i]);

                a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1)
            }
            console.log(a);

        }
        title(["cat", "lion", "tiger", "dog"])


        //iife function - Sum of all numbers in an array
        (
            function (arr) {
                        let total = 0;
                        for (let i = 0; i < arr.length; i++) {

                            total = total + arr[i];
                        }

                        console.log(total)
                    })([1,1,1,1,1])

        

        //anonymous function - Sum of all numbers in an array

                    var sum = function (arr) {
                        let total = 0;
                        for (let i = 0; i < arr.length; i++) {

                            total = total + arr[i];
                        }

                        console.log(total)
                    }
                    sum([2, 1, 1, 1, 1])

        //iife function - Return all the prime numbers in an array 
        (

        function(numarray){
            for (j = 0; j < numarray.length; j++) {
                var chk = 0;
                for (i = 2; i < numarray[j]; i++) {
                    if (numarray[j] % i == 0) {
                        chk++;
                        break;
                    }
                }
                if (chk == 0) {
                    console.log(numarray[j])
                }
            }
        }
        )([2, 3, 4, 5, 6, 7, 8, 9])*/

        //anonymous function - Return all the prime numbers in an array   


        var prime = function(numarray){
            for (j = 0; j < numarray.length; j++) {
                var chk = 0;
                for (i = 2; i < numarray[j]; i++) {
                    if (numarray[j] % i == 0) {
                        chk++;
                        break;
                    }
                }
                if (chk == 0){
                    console.log(numarray[j])
                }
            }
        }
        prime([2, 3, 4, 5, 6, 7, 8, 9])

        //iife function- Return all the palindromes in an array

        (
            function (a) {

                for (let i = 0; i < a.length; i++) {
                    let str = [];
                    str[i] = a[i].split("").reverse().join("");
                    if (str[i] === a[i]) {
                        console.log(a[i]);
                    }
                }
            }
        )(["can", "aba", "focus", "teet"])


        //anonymous function- Return all the palindromes in an array

            var pallin=function(a){

                for (let i = 0; i < a.length; i++) {
                    let str = [];
                    str[i] = a[i].split("").reverse().join("");
                    if (str[i] === a[i]) {
                        console.log(a[i]);
                    }
                }
            }

            pallin(["can", "aba", "focus", "teet"])


// arrow function: Print odd numbers in an array

var odd =(arr)=>{

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}
}
odd([1, 2, 3, 4, 5])


//arrow function->Convert all the strings to title caps in a string array

var title = (a) => {

        for (let i = 0; i < a.length; i++) {
            //alert(a[i]);

            a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1)
        }
        console.log(a);

    }
    title(["cat", "lion", "tiger", "dog"])

//arrow function -> Sum of all numbers in an array

var sum = (arr) => {
                        let total = 0;
                        for (let i = 0; i < arr.length; i++) {

                            total = total + arr[i];
                        }

                        console.log(total)
                    }
                    sum([2, 1, 1, 1, 1])

// arrow function-> Return all the prime numbers in an array


var prime = (numarray)=>{
            for (j = 0; j < numarray.length; j++) {
                var chk = 0;
                for (i = 2; i < numarray[j]; i++) {
                    if (numarray[j] % i == 0) {
                        chk++;
                        break;
                    }
                }
                if (chk == 0){
                    console.log(numarray[j])
                }
            }
        }
        prime([2, 3, 4, 5, 6, 7, 8, 9])

//arrow function=> Return all the palindromes in an array

var pallin=(a)=>{

for (let i = 0; i < a.length; i++) {
    let str = [];
    str[i] = a[i].split("").reverse().join("");
    if (str[i] === a[i]) {
        console.log(a[i]);
    }
}
}

pallin(["can", "aba", "focus", "teet"])



