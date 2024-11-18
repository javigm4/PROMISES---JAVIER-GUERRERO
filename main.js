const database = {
  users: [
    {
      id: 1,
      name: "Usuario 1",
    },
    {
      id: 2,
      name: "Usuario 2",
    },
    {
      id: 3,
      name: "Usuario 3",
    },
  ],
};

export const selectUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = database.users.find((user) => user.id === id);
      if (usuario) {
        resolve(usuario);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};
