function hello(param1:any):string{
    if(typeof param1 === 'string'){
        return 'hello, my name is ' + param1
    }
    else if (typeof param1 === 'number'){
        return 'my age is ' + param1
    }
    else{
        return 'what 7 u say ??'
    }
}

const res2 = hello('wbb')
const res3 = hello(13)
const res4 = hello(true)
console.log(res2)
console.log(res3)
console.log(res4)


//interface inherit
interface parent{
    name:string 
}

interface child extends parent{
    age:string | number
}



const myObj:child = {
    name: 'wbb',
    age: 123,
}
console.log(myObj.name)

//Class decorator

class mySchool {
    public school:string
    private age:string | number
    protected para0?:number
    static para1 = true
    constructor (school:string, age:string|number){
        this.school = school
        this.age = age
    }
    // 不支持构造器的重载
/*     constructor (para0){
        this.para0 = para0
    } */
}
//这个para1是静态变量，不需要实例化就可以读取，像java :>
//这里也可以加上一个readonly，不允许修改，不过一般好像没人会修改
mySchool.para1 = false

console.log('修改过后的静态变量para1: ' + mySchool.para1)
let myschool = new mySchool("Giao级中学",12)

const school = myschool.school
//const age = myschool.age 将会报错，因为是私有属性

class mySchoolChild extends mySchool implements parent{
    //这里如果是继承?的话，要加上一个undefined
    para2 : number | undefined
    name = 'wbb' //这个是从接口：parent中实现的
    
    constructor (name:string){
        //这里父类必须构造一下
        super("Giao哥中学",12)
        this.para2 = this.para0
        this.name = name
    }
}


class User{
    private _password:string = '*****'
    get password():string {
        return this._password
    }

    set password(psw:string) {
        console.log("正在设置密码...")
        this._password = psw
        console.log("设置成功！！！")
    }
}

const wbb = new User()
//设置
wbb.password = "asdfgg"
//读取
console.log(wbb.password)


//
class Phone<T>{
    public cpu:T
    constructor(cpu:T){
        this.cpu = cpu
    }

    turnOff(input:T): T{
        console.log(this.cpu, "is turning off")
        return this.cpu
    }
}

const iphone = new Phone("A16")
// iphone.turnOff(123) 这里就会报错，因为都要用同样的<T>