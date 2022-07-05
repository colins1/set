import Team from '../js/Team';
import Character from '../js/Character';

test('add character', () => {
  const character = new Character('John');
  const team = new Team();
  team.add(character);

  const expected = new Set();
  expected.add(character);

  expect(team.members).toEqual(expected);
});

test('Repit add character', () => {
  const character = new Character('John');
  const team = new Team();
  team.add(character);

  expect(() => team.add(character)).toThrowError(new Error('Персонаж уже добавлен в команду'));
});

test('arbitrary addition', () => {
  const characterOne = new Character('John');
  const characterTwo = new Character('Max');
  const characterThree = new Character('Jenya');

  const team = new Team();
  team.addAll(characterOne, characterTwo, characterThree);

  const expected = new Set();
  expected.add(characterOne);
  expected.add(characterTwo);
  expected.add(characterThree);

  expect(team.members).toEqual(expected);
});

test('array return', () => {
  const characterOne = new Character('John');
  const characterTwo = new Character('Max');
  const characterThree = new Character('Jenya');

  const team = new Team();
  team.addAll(characterOne, characterTwo, characterThree);

  const expected = [
    { health: 100, level: 1, name: 'John' },
    { health: 100, level: 1, name: 'Max' },
    { health: 100, level: 1, name: 'Jenya' },
  ];

  expect(team.toArray()).toEqual(expected);
});