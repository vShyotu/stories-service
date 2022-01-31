const supertest = require("supertest");
const app = require("../app");
const request = supertest(app.callback());

describe("stories", () => {
  it("should return a list of stories", async () => {
    const response = await request.get("/stories");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});
