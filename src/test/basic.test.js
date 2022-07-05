import Validator from '../js/date';

const validator = new Validator('Maxim');
test('name check 1', () => {
  expect(
    validator.validateUsername()
).toBe('Maxim');
});

test('name check 2', () => {
  expect(() => {
    const validator = new Validator('-Maxim');
    validator.validateUsername();
}).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 3', () => {
  expect(() => {
    const validator = new Validator('_Maxim');
    validator.validateUsername(); 
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 4', () => {
  expect(() => {
    const validator = new Validator('02Maxim'); 
    validator.validateUsername();
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 5', () => {
  expect(() => {
    const validator = new Validator('Maxim00'); 
    validator.validateUsername();
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 6', () => {
  expect(() => {
    const validator = new Validator('Maxim-'); 
    validator.validateUsername();
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 7', () => {
  expect(() => {
    const validator = new Validator('Maxim_'); 
    validator.validateUsername();
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 8', () => {
  expect(() => {
    const validator = new Validator('@Maxim_'); 
    validator.validateUsername();
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});

test('name check 9', () => {
  expect(() => {
    const validator = new Validator('Max2222im'); 
    validator.validateUsername();
  }).toThrow('You created the name incorrectly, read the rules for creating a name');
});


