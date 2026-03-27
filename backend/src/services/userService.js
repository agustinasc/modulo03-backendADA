import * as generic from "./genericService.js";
import { readJSON } from "../utils/fileHandler.js";

const path = "./src/data/users.json";

export const createUser = (data) => generic.create(path, data);

// específica (no genérica)
export const getUserByEmail = async (email) => {
  const users = await readJSON(path);

  return users.find(
    u => u.email.toLowerCase() === email.toLowerCase()
  );
};