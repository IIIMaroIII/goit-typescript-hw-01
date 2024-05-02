type User123 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User123>>(initialValues: T): T {
  return { ...initialValues };
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
