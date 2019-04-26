export function MostCentral(data, year){
  return Object.keys(data).reduce((max, obj) => data[max][year].value > data[obj][year].value ? max : obj);
};

export function PascalCase(str){
  return str.replace(/\w+/g,
    function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
}