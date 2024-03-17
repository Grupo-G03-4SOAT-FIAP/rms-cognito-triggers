import { expect, describe, it } from '@jest/globals';
import { validate } from '../../validateCPF';

describe('Unit test for validate CPF', function () {
    it('verifies successful response', async () => {
        const result = validate('00000000191');
        expect(result).toEqual(true);
    });

    it('verifies error response, isValidLength', async () => {
        const result = validate('0000000019');
        expect(result).toEqual(false);
    });

    it('verifies error response, allDigitsTheSame', async () => {
        const result = validate('11111111111');
        expect(result).toEqual(false);
    });

    it('verifies error response, calculateDigit', async () => {
        const result = validate('00000000192');
        expect(result).toEqual(false);
    });
});
