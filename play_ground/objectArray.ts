type Human = {
    readonly name: string
    age?: number
}

// data as array
const data: Human[] = [
    {
        name: 'Bob',
        age: 13,
    },
    {
        name: 'Bob',
    },
]

// data[0].name = 'Fuga'  /* readonlyエラー */

// numArray
const numArray: number[] = []

function getAgeArry(human: Human[]): number[] {
    let age: number
    human.forEach((v) => {
        if (!v.age) {
            age = 0
        } else {
            age = v.age
        }
        numArray.push(age)
    })
    return numArray
}

const ageArray = getAgeArry(data)
console.log(ageArray)
