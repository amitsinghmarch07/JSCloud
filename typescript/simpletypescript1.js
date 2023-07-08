let useless: void;
useless = 1;

function sayHello(): void {
    console.log("Hello");
    return "Hi";
}

sayHello();

let avoid: number = 1;
avoid = 5;
avoid = "abc";
avoid = "true";
avoid = {};

let some: unknown = "abc";
let another: unknown;
another = some;
let counter: any;
counter = some;
let naam: string;
naam = <string>some;
    naam = some as string;

    function forever(): never {
        let counter = 0;
    while (true){
        counter++;
    }
    }

    const out = forever();


