import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import User from "../models/users";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI!);
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  await User.deleteMany({});
});

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should login a user", async () => {
    await request(app).post("/api/auth/register").send({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
