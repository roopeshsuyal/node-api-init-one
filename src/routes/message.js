import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    //return res.send(Object.values(messages));
    return res.send(Object.values(req.context.models.messages));
  });
  router.get('/:messageId', (req, res) => {
    // return res.send(messages[req.params.messageId]);
    return res.send(req.context.models.messages[req.params.messageId]);
  });

  router.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
      //userId: req.me.id,
      userId: req.context.me.id,
    };

    //messages[id] = message;
    req.context.models.messages[id] = message;
    return res.send(message);
  });

  router.delete('/:messageId', (req, res) => {
    const {
      [req.params.messageId]: message,
      ...otherMessages
    } = req.context.models.messages; //= messages;
    //messages = otherMessages;
    req.context.models.messages = otherMessages;
    return res.send(message);
  });

export default router;