import { greet } from './greet';

describe('greet', () => {
    it('should return Welcome with string appended', () => {
        const variableName = 'Aakash';
        expect(greet(variableName)).toContain(variableName);
    });
});
