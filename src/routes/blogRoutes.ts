import { Router, Request, Response, NextFunction } from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} from "../controllers/blogController";

const router = Router();

router.post("/", createBlog);
// GET /api/blogs?category=categoryName
router.get("/", getBlogs);
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(getBlogById(req, res)).catch(next);
});
router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(updateBlog(req, res)).catch(next);
});
router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(deleteBlog(req, res)).catch(next);
});

// router.post("/", createBlog);
// router.get("/", getBlogs);
// router.get("/:id", getBlogById);
// router.put("/:id", updateBlog);
// router.delete("/:id", deleteBlog);

export default router;
