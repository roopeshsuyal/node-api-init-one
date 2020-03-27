import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    //return res.send(Object.values(users));
    return res.send(Object.values(req.context.models.users));
  });

  router.get('/:userId', (req, res) => {
    //return res.send(users[req.params.userId]);
    return res.send(req.context.models.users[req.params.userId]);
  });

  router.post('/', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  router.put('/:userId', (req, res) => {
    //print all headers
    //console.log(req.headers)
    //print selected header User-Agent and mykey
    console.log(req.header('User-Agent'))
    //console.log(req.header('mykey'))
    return res.send(
      `PUT HTTP method on user/${req.params.userId} resource`,
    );
  });
  router.delete('/:userId', (req, res) => {
    return res.send(
      `DELETE HTTP method on user/${req.params.userId} resource`,
    );
  });
  export default router;