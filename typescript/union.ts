class sample {

    static dosomething(i: number | string | boolean | { id: number }): void {
        console.log(i);
    }
    static main(): void {
        sample.dosomething(123);
        sample.dosomething("bradf");
        sample.dosomething({ id: 23 });
    };
}

sample.main();