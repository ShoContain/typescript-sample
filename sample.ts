let a: boolean = false

function func(a: string): number {
    return Number(a)
}

const number: number = func('4')
console.log(number)

//Object
interface Hoge {
    a: Number
    b: Number
}

let hoge: Hoge = { a: 10, b: 3 }

let first: Number = hoge.a

let c: { b: number } = {
    b: 12,
}

let x: {
    y: number
    z?: string
    [key: number]: boolean
}

// x = { b: 1 } //OK
// x = { b: 1, c: '1' } // OK
// x = { b: 1, c: '1', delete_flag: true } // OK
