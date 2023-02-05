import { sample } from './sample';
describe('Given a sample array', () => {
    test('When the index is 0 the element is "Hola Don José"', () => {
        const r = sample[0];
        expect(r).toBe('Hola Don José');
        const result = sample[1];
        expect(result).toBe('2');
    });
});
