const createTuple = (a,b,c,...d) => {
  return [[a,c],[b,d]];
}

createTuple("It", "be", "could", "anyone", "no one"); 
//Output: [ [ 'It', 'could' ], [ 'be', [ 'anyone', 'no one' ] ] ]
