import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('return length', () => {
        const currency = getCurrencies();
        // console.log(currency);
        const searchElemet = 'INR';
        expect(currency).toContain(searchElemet);
    });
});
