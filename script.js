function combinations (n) { 
    return n
        .filter( item => item !== 0 ) /* Filtramos para que sean valores diferentes a 0 */
        .reduce( (a, b) => {
            return a * b;
            /*
                Se realizan las combinaciones y se va sumando
                el resultado.
            */
        }); 
}

let items = [1,2,3,4,5];

let response = combinations(items);
console.log("=== response ====");
console.log(response);