import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    return res.send("welcome");
  });

router.post('/', (req, res) => {
  return res.send("welcome");
});
  
export default router;