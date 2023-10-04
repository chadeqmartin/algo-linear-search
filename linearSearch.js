function linearSearch(searchTerm, arr) {
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === searchTerm){
      return i;
    }
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {

  let indexOfSearchMatches = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === searchTerm){
      indexOfSearchMatches.push(i);
    }
  }
  return indexOfSearchMatches;
}

module.exports = { linearSearch, globalLinearSearch };
