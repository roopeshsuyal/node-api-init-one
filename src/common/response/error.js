const error = function (res,msg = "error occurred",code ="DEFAULT",issue="") {

    let return_obj =  {
          "error": {
            "message": msg,
            "code": code,
            "issue": issue,
        },
        "status": "failed"
       }
       
      return res.send(return_obj)
};
  
export default error;