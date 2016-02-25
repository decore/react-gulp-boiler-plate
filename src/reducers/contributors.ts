export default (state = [], action) => {
  switch (action.type) {
    case 'CONTRIBUTORS_LOAD':
      return [
        {
          name: 'John',
          lastname: 'Doe'
        },
        {
          name: 'Peter',
          lastname: 'Karmack'
        }
      ]

    default:
      return state;
  }
};
