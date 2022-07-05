import Team from '../js/Team';
import Character from '../js/Character';

test('should return add character', () => {
  const character = new Character('John');
  const team = new Team();
  team.add(character);

  const expected = new Set();
  expected.add(character);

  expect(team.members).toEqual(expected);
});

test('should return an error when re-adding a character', () => {
  const character = new Character('John');
  const team = new Team();
  team.add(character);

  expect(() => team.add(character)).toThrowError(new Error('Персонаж уже добавлен в команду'));
});

test('should add an arbitrary number of characters', () => {
  const characterOne = new Character('John');
  const characterTwo = new Character('Ivan');
  const characterThree = new Character('Kate');

  const team = new Team();
  team.addAll(characterOne, characterTwo, characterThree);

  const expected = new Set();
  expected.add(characterOne);
  expected.add(characterTwo);
  expected.add(characterThree);

  expect(team.members).toEqual(expected);
});

test('should return array', () => {
  const characterOne = new Character('John');
  const characterTwo = new Character('Ivan');
  const characterThree = new Character('Kate');

  const team = new Team();
  team.addAll(characterOne, characterTwo, characterThree);

  const expected = [
    { health: 100, level: 1, name: 'John' },
    { health: 100, level: 1, name: 'Ivan' },
    { health: 100, level: 1, name: 'Kate' },
  ];

  expect(team.toArray()).toEqual(expected);
});