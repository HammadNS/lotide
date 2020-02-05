const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion passed:  ${actual} ===  ${expected} `);
    return;
  }if (actual !== expected) {
    let returnOne = console.log(`🔴🔴🔴🔴🔴 Assertion failed:  ${actual} !==  ${expected}`);
    return returnOne;
  }
}

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count



const countOnly = function(allItems, itemsToCount) {

  const results = {}

  for(const names of allItems){

    if (itemsToCount[names]){
      if(results[names]){
        results[names] = +1;
      }else{
        results[names] = 1;
      }

    }
  }

return results;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);

assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
