let arr = [];
let set = new Set();
const n = 5000000;

for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}

//скорость добавления
console.time('Array_push');
arr.push( n + 1 );
console.timeEnd('Array_push');

console.time('Set_push');
set.add( n + 1 );
console.timeEnd('Set_push');

console.info( arr.length );
console.info( set.size );  


//скорость поиска
let checkArr = ( arr, item ) => arr.indexOf( item ) !== -1;
let checkSet = ( set, item ) => set.has( item );

let result;

console.time('Array_find');
result = checkArr(arr, n);
console.timeEnd('Array_find');

console.time('Set_find');
result = checkSet(set, n);
console.timeEnd('Set_find');

console.info( arr.length );
console.info( set.size ); 


//скорость удаления
const deleteFromArr = (arr, item) => {
  let index = arr.indexOf(item);
  return index !== -1 && arr.splice(index, 1);
};

console.time( 'Array_delete' );
deleteFromArr( arr, 123123 );
console.timeEnd( 'Array_delete' )

console.time( 'Set_delete' );
set.delete( 123123 );
console.timeEnd( 'Set_delete' );

console.info( arr.length );
console.info( set.size );

//конец
console.log("stop checking")