describe('taxes test', function () {
it ('should calculate the high tax bracket', function (){
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);
})

it ('should calculate the low tax bracket', function (){
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
})

it ('should calculate the low tax bracket', function (){
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
})

it('should reject invalid incomes', function (){
    expect(() => calculateTaxes("hello")).toThrowError('INVALID INPUT');
    expect(() => calculateTaxes([])).toThrowError('INVALID INPUT');
    expect(() => calculateTaxes(true)).toThrowError('INVALID INPUT');
})
})

describe("removeDupe tests", function (){
it('should remove duplicates from a string', function (){
        expect(removeDupes("hello")).toEqual("helo");
        expect(removeDupes("hello")).toBeInstanceOf(String);
})
})

describe("remove tests", function (){
it('should remove a value from an array', function (){
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
})
})

describe("submitForm tests", ()=> {
    it('saves input to usernames array', ()=> {
        submitForm();
        expect(userNames.length).toBe(1);
    })
})