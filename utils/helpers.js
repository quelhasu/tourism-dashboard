export function MostCentral(data, year){
  return Object.keys(data).reduce((max, obj) => data[max][year].value > data[obj][year].value ? max : obj);
}