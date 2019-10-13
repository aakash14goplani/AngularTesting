import { compute } from './compute';

describe('compute', () => {
    it('return 0 if negative input provided', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('increment number if positive input provided', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});
