const { expect, test, jest } = require("@jest/globals");
const request = require("supertest");
const app = require("./index");
const app = require("./src/dao");
jest.mock("./src/dao");

describe("Test the root path", () => {
  test("Test de la requête - STATUS", done => {
    request(app)
      .get("/messages")
      .then(response => {
        // Vérifie si le code est bon
        expect(response.statusCode).toBe(200);
        // Vérifie la longueur = le nombre de messages
        //expect(response.body.lenght).toBe(10);
        // Vérifie dans le 1er message si il a bien les clés suivantes
        //expect(response.body[0].keys).toBe(["id", "from", "to"])
        done();
      });
  });
  test("Test de la réponse - BODY", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.body).toBe("Hello");
        done();
      });
  });
});


describe("Test des messages", () => {
  test("Get All", done => {
    let messages = [
      {
        id:1, body:"toto"
      }
    ]
    dao.getMessages.mockRetunrValueOnce(messages)
    return request(app)
      .get("/messages")
      .expect(200);
  });
});