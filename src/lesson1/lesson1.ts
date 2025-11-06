// 介绍一些基本的数据类型
// 赋值时记得指定数据类型
let a : number = 1
// a = "abc"  这样是不合法的，不能改变已有变量的类型
let b : string = "abc"
let c : number | null = null

//这两种方法都可以
let arr : string[] = ["1", "b", "cc"]
let arr1 : Array<number> = [1, 2, 3] 

//元组，类似python
let t1 : [number, string, number] = [1, "a", 2]
let t2 : [number, string, null?] = [1, "a"]


//
/* enum Myenum {
    spring,
    summer,
    fall,
    winter
} */

/* console.log(Myenum[0])
console.log(Myenum.summer) */

//FUNCTION
function foo(a : number, b : string, c?:boolean, ...rest:number[]) : void{
    console.log("a:", a)
    console.log("b:", b)
    console.log("c:", c)
}
const f = foo(a, "hello", true, 1,2,3,4)

//interface
type idType = string | number

interface Obj {
    name : string 
    id : idType
/*     function foo1(params:number) {
        
    } */
}

//Generic

function foo1<T>(a:T, b:T):T[] {
    return [b,a]
}
function foo2<T, E>(a:T, b:E) {
    return [b,a]
}

const res = foo1<number>(123, 456)
const res1 = foo2(true, 456)
console.log(res)
console.log(res1)


