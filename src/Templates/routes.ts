import * as express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ msg: "hello" });
});
router.get("/:id", async (req, res) => {
  res.json({ msg: "hello" });
});
router.post("/", async (req, res) => {
  res.json({ msg: "hello" });
});
router.put("/:id", async (req, res) => {
  res.json({ msg: "hello" });
});
router.delete("/:id", async (req, res) => {
  res.json({ msg: "hello" });
});

export default router;
