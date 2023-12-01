import { TestExamples } from '../src'

it('one returns next example', () => {
    const names = new TestExamples(['alice', 'bob', 'charlie'])

    expect(names.one()).toEqual('alice')
    expect(names.one()).toEqual('bob')
    expect(names.one()).toEqual('charlie')
    expect(names.one()).toEqual('alice')
})

it('build', () => {
    const names = TestExamples.build(3, (number) => `Name ${number}`)

    expect(names.one()).toEqual('Name 0')
    expect(names.one()).toEqual('Name 1')
    expect(names.one()).toEqual('Name 2')
    expect(names.one()).toEqual('Name 0')
})
