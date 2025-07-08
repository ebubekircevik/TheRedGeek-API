import { Router, Request, Response, NextFunction } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(getUserById(req, res)).catch(next);
});
router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(updateUser(req, res)).catch(next);
});
router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(deleteUser(req, res)).catch(next);
});

// router.post("/", createUser);
// router.get("/", getUsers);
// router.get("/:id", getUserById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default router;
