import { selectUserById } from "./main.js";

describe("DataBase Promises - selectUserById", () => {
  it("should get user with id = 2", () => {
    return selectUserById(2).then((usuario) => {
      expect(usuario.id).toBe(2);
    });
  });

  it("should get 'User not found' with id = 5", () => {
    return selectUserById(5).catch((error) => {
      expect(error).toBe("User not found");
    });
  });
});
