export function MostCentral(data, year){
  return Object.keys(data).reduce((max, obj) => data[max][year].value > data[obj][year].value ? max : obj);
};

export function MaxEvolution(data){
  return Object.keys(data).reduce((max, obj) => data[max]['diff'].value > data[obj]['diff'].value ? max : obj);
};

export function PascalCase(str){
  return str.replace(/\w+/g,
    function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
};

export function OrderColors(names, selectedColors){
  let array = [];
  for (var i = 0; i < names.length; i++) array.push(selectedColors[names[i]]);
  return array;
};

export function OrderColorsRGBA(names, selectedColors, alpha="0.3") {
  var ingoing = [],
    outgoing = [];
  for (var i = 0; i < names.length; i++) {
    ingoing.push(selectedColors[names[i]]);
    outgoing.push(selectedColors[names[i]].replace('rgb', 'rgba').replace(')', ',' + alpha + ')'));
  };
  return {
    ingoing: ingoing,
    outgoing: outgoing
  };
}


