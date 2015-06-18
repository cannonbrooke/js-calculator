/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule (){

  var _memory = 0;
  var _total = 0;

  var calculator = {
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recall: _recall,
    save: _save,
    clear: _clear,
  };

  return calculator;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
`
   function _load (x){
    if (check(x) === true) {
    _total = x;
    return _total;
   } else{
    return "error";
   }
 };
  /**
   * Return the value of `total`
   * @return { Number }
   */
   function _getTotal (){
    return _total;

   };


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function _add (x){
    if (check(x) === true){
    return _total += x;
  } else {
    return "error";
   }
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function _subtract (x){
    if (check(x) === true){
    return _total -= x;
   } else {
    return "error";
   }
 };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function _multiply (x){
    if (check(x) === true){
    return _total = _total * x;
} else {
  return "error";
}
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function _divide (x){
    if (check(x) === true){
    return _total = _total / x;
} else {
  return "error";
  }
};


/**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function _recall(){
    return _memory;
   }


  /**
   * Stores the value of `total` to `memory`
   */

   function _save(){
    _memory = _total;
    return _memory;

   }

  /**
   * Clear the value stored at `memory`
   */
   function _clear(){
    _memory = 0;

   }

   function check(x){
    if (typeof x !== "number"){
      return "error"
   } else {
      return true
    }
  }
};

