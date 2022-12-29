const checkUndefined = (input) => {
  if (!input?.length) return true;
  for (let el in input) {
    if (input[el] === undefined) {
      return true;
    }
    return false;
  }
};

const checkZero = (arr) => {
  return arr.find((el) => Number(el) === 0); // comprueba si es 0
};

const checkLimit = (arr, limit) => {
  return arr.filter((el) => el > limit).length; // comprueba si es mayor que el limite
};

const checkNaN = (arr) => {
  return arr.filter((el) => isNaN(Number(el))).length; // comprueba si es NaN
};

const checkMinMax = (min, max) => {
  const nMax = Number(max);
  const nMin = Number(min);
  if (nMin > nMax) return false; // comprueba si es mayor al menor
  return true;
};

const checkNegatives = (arr) => {
  return arr.filter((el) => Number(el) < 0).length; // comprueba si es negatives
};

const validate = (input) => {
  const regexUrl =
    /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
  const regexName = /^[a-zA-Z ]+$/;
  const {
    name,
    MaxWeight,
    MinWeight,
    MaxHeight,
    MinHeight,
    MinLifeSpan,
    MaxLifeSpan,
    image,
  } = input;
  const numbers = [
    MaxWeight,
    MinWeight,
    MaxHeight,
    MinHeight,
    MinLifeSpan,
    MaxLifeSpan,
  ];
  const errors = {};

  //check undefined
  if (checkUndefined(input.temperaments)) {
    errors.temp = "All fields are required";
  }
  //check name
  if (!regexName.test(name)) {
    errors.name = "Invalid name format";
  } else if (name?.length < 4) {
    errors.name = "Name must be at least 4 characters";
  }
  //check negatives
  if (checkNegatives(numbers)) {
    errors.negatives = "Negative numbers are not valid";
  }
  //check min-max
  if (!checkMinMax(MinWeight, MaxWeight)) {
    errors.weight = "The max must be greater than the min";
  }
  if (!checkMinMax(MinHeight, MaxHeight)) {
    errors.height = "The max must be greater than the min";
  }
  if (!checkMinMax(MinLifeSpan, MaxLifeSpan)) {
    errors.life = "The max must be greater than the min";
  }
  //check number type
  else if (checkNaN(numbers)) {
    errors.nan = "The weight, height and life span inputs must be a number";
  }
  //check min
  if (checkZero(numbers)) {
    errors.zero = "The value must be greater than zero";
  }
  //check max
  if (checkLimit([MinWeight, MaxWeight], 200)) {
    errors.weight = "The weight can't be more than 300Kg";
  }
  if (checkLimit([MinHeight, MaxHeight], 200)) {
    errors.height = "The height can't be more than 2m";
  }
  if (checkLimit([MinLifeSpan, MaxLifeSpan], 30)) {
    errors.life = "The life span can't be more than 30 years";
  }
  if (image && !regexUrl.test(image)) {
    // test
    errors.url = "Only jpg, jpeg, and png urls are allowed";
  }

  return errors;
};

export default validate;
