// 介绍一些基本的数据类型
// 赋值时记得指定数据类型
let a : number = 1
// a = "abc"  这样是不合法的，不能改变已有变量的类型
let b : string = "abc"
let c : number | null = null

//这两种方法都可以
let arr : string[] = ["1", "b", "cc"]
let arr1 : Array<number> = [1, 2, 3] 

//
let t1 : [number, string, number] = [1, "a", 2]
let t2 : [number, string, null?] = [1, "a"]

console.log(t2)
