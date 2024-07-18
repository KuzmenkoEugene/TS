interface IIndex {
    [index: string]: number | string
}

interface IFunction {
    [index: string]: (...args: any[]) => any
}

interface IObject {
    [index: number]: string[]
}

let testObject: IObject = {
    1: [`test1`, `test2`, `test3`],
    2: ['test1']
}

interface ExampleInterface {
    ['nickname']: string
    ['work']: string
}

interface Home {
    ['windows']: number
}

interface Room extends Home {
    ['door']: number
}

interface ICheckKey {
    [name: string]: number
}

function checkKey(obj: ICheckKey): string {

    for (var key  in obj) {
        if (typeof obj[key] !== 'number') {
            return 'Not number!'
        } 
    }

    return 'All are numbers!'
}
