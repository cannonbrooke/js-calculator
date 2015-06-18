
function calculatorModule(){

  var _memory = 0;
  var _total = 0; //private variables hence the _ before the name

  var calculator = {

  };
  return calculator;

  function _load(x){
    if (check(x) === true){
      _total = x;
      return _total;
    } else {
      return "error";
    }
  };

  function _gettotal(){
    return _total;
  };

  function _add(x){
    if (check(x) === true){
      return _total +=x;
    }else {
      return "error";
    }
  };

function _subtract(x){
  if (check(x) ===true){
    return _total -= x;
  } else {
    return "error";
  }
};

function _multiply(x){
  if (check(x) === true){
    return _total *= xx
  }else {
    return "error";
  }
};

function _divide(x){
  if (check(x) === true){
    return _total /= x;
  }else{
    return "error";
  }
};



