import { confirmUrl } from '../client/js/confirmUrl';

describe('Test, "confirmUrl()" exists', () => {
    it('True with valid url', () => {
        expect(confirmUrl('https://www.udacity.com/')).toBe(true);
    })

    it('False with invalid url', () => {
        expect(confirmUrl('nope')).toBe(false);
    })
})