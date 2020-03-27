import { Router } from 'express';
import response from '../common/response';
const router = Router();

//middleware Will work only in this route
router.use((req, res, next) => {
  res.type('json')
  next()
})

router.get('/', (req, res) => {
    //return res.send(users[req.me.id]);
    return res.send(req.context.models.users[req.context.me.id]);
  });

  router.get('/okay', (req, res) => {
    return response.message(res,{allusers:req.context.models.users})
  });

  router.get('/geterror', (req, res) => {
    var my_header_key = req.header('MY_HEADER_KEY')

    if(typeof my_header_key == 'undefined'){
        return response.error(res,"session geterror error","SESSION001","my_header_key key not found in headers")
    }
    var myhash = req.body.MYHASH 
    if(typeof myhash == 'undefined'){
        return response.error(res,"session geterror error","SESSION002","MYHASH key not supplied")
    }
    //delete MYHASH from body
    delete req.body.MYHASH
    return response.message(res,{myhash:myhash,my_header_key:my_header_key})
  });

  
export default router;