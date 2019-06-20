import { defaultColors } from '../utils/colors'
var seedrandom = require('seedrandom');

/**
 * Find the most central object 
 * @param {Object[]} data - Array of object to compare
 * @param {year} year - The year of compared values
 * 
 * @return {Object} Most Central object
 */
export function MostCentral(data, year) {
  let yearKeys = Object.keys(data).filter(key => data[key][year] == undefined);
  yearKeys.forEach(key => data = Omit(data, key));
  let key = Object.keys(data).reduce((max, obj) => data[max][year].value > data[obj][year].value ? max : obj);
  return {
    label: key,
    value: data[key]
  }
};

/**
 * Find the object with the highest evolution over a year
 * @param {Object[]} data - Array of object to compare
 * 
 * @return {Object} Object with the highest 'diff' value 
 */
export function MaxEvolution(data) {
  let key = Object.keys(data).reduce((max, obj) => data[max]['diff'].value > data[obj]['diff'].value ? max : obj);
  return {
    label: key,
    value: data[key]
  }
};

/**
 * Transform a string to PascalCase convention
 * @param {String} str - String to transform
 * 
 * @return {String} Transformed string
 */
export function PascalCase(str) {
  return str.replace(/\w+/g,
    function (w) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); });
};

/**
 * Assigns a color to a name
 * @param {String[]} names - Array of names
 * @param {String[]} selectedColors - Array of corresponding colors
 * 
 * @return {String[]} Array of strings with corresponding colors 
 */
export function OrderColors(names, selectedColors) {
  let array = [];
  var color = ''
  for (var i = 0; i < names.length; i++) {
    color = selectedColors[names[i]] ? selectedColors[names[i]] : defaultColors[RandomIndex(names[i], defaultColors.length)]
    array.push(color);
  }
  return array;
};

/**
 * Assigns RGB & RGBA colors to a name with 2 variables (e.g. ingoing/outgoing)
 * @param {String[]} names - Array of names
 * @param {String[]} selectedColors - Array of corresponding colors
 * @param {String} name1 - Name of the first variable to return
 * @param {String} name2 - Name of the second variable to return
 * @param {String} alpha - Alpha value for the transparency of the RGBA color.
 * 
 * 
 * @return {String[]} Array of strings with corresponding colors 
 */
export function OrderColorsRGBA(names, selectedColors, name1, name2, alpha = "0.3") {
  var arr1 = [],
    arr2 = [];
  var color = ''
  for (var i = 0; i < names.length; i++) {
    color = selectedColors[names[i]] ? selectedColors[names[i]] : defaultColors[RandomIndex(names[i], defaultColors.length)]
    arr1.push(color);
    arr2.push(color.replace('rgb', 'rgba').replace(')', ',' + alpha + ')'));
  };
  return {
    [name1]: arr1,
    [name2]: arr2
  };
}

/**
 * Generate random value not present in array according a given key
 * @param {String} key - key to randomize
 * @param {Number} max - max value random generator
 * @param {Number[]} selectedValues - index already use
 * 
 * @return {Object} Object with the key removed
 */
export function RandomIndex(key, max){
  var myrng = {}
  let index = 0
  myrng = seedrandom(key);
  index = Math.round(myrng() * (max))
  return index;
}

/**
 * Remove key in Object
 * @param {Object} obj - Object to modify
 * @param {Any} omitKey - key to remove from object
 * 
 * 
 * @return {Object} Object with the key removed
 */
export function Omit(obj, omitKey) {
  return Object.keys(obj).reduce((result, key) => {
    if (!(omitKey.includes(key))) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}


/**
 * Create an object to save uri link into file
 * @param {String} uri - Uri link to download
 * @param {String} filename - Name of the file
 * 
 */
export function SaveAs(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);

  } else {
    window.open(uri);
  }
}