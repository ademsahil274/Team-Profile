const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  //code goes here
  const testValue = "test@github.com";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});


test("getRole() should return \"Engineer\"", () => {
    //code goes here
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", githubUser);
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get GitHub username via getGithub()", () => {
    //code goes here
    const testValue = "githubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  