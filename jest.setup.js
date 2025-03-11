beforeAll(() => {
   global.crypto.randomUUID = jest.fn(() => `mocked-uuid-${Math.floor(Math.random() * 10000)}`);
});