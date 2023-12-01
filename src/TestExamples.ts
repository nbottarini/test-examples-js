export class TestExamples<T> {
    private current = -1
    constructor(private examples: T[]) {}

    one(): T {
        this.current++
        return this.examples[this.current % this.examples.length]
    }

    static build<R>(amount: number, builder: (number: number) => R): TestExamples<R> {
        return new TestExamples((new Array(amount)).fill(undefined).map((element, index) => builder(index)))
    }
}
