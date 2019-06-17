// undefined, null, number, string, symbol, boolean 原始值
// object： array， object， function
/*
  1、如果类型不同，就[不相等]
2、如果两个都是数值，并且是同一个值，那么[相等]；如果其中至少一个是NaN，那么[不相等]。（判断一个值是否是NaN，只能用isNaN()来判断）
3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。
4、如果两个值都是true，或者都是false，那么[相等]。
5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。
6、如果两个值都是null，或者都是undefined，那么[相等]。
*/
/*
1、如果两个值类型相同，进行 === 比较。
2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：
（1）如果一个是null、一个是undefined，那么[相等]。
（2）如果任一值是字符串，另一个值是数值，在比较相等性之前先将字符串转换为数值；即是调用Number()函数。
（3）如果任一值时布尔值，则在比较相等性之前先将其转换为数值，即是调用Number()函数。
（4）如果一个是对象，另一个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的toString或者valueOf方法。 js核心内置类，会尝试valueOf先于toString；例外的是Date，Date利用的是toString转换。
*/
// 类型转换
console.log(
  Number(true), // 1
  Number(false), // 0
  Number(''), // 0
  Number('abc'), // NaN
  Number(true), // 1
  Number([]), // 0
  Number([1]), // 1
  Number({}), // NaN
  Number({ name: 'gc' }), // NaN
  String([]),
  String([1, 2, 3]),
  String({}),
  String({ name: 'gc' }),
  String(true),
  String(false),
  NaN == NaN,
  NaN === NaN,
  Boolean(null),
  Boolean(undefined),
  null == false,
  undefined == false,
  null == undefined,
  Boolean([]),
  Boolean({}),
  String([]),
  String({}),
  Number(null),
  Number(undefined)
)