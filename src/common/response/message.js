const message = function (res,data_obj = {}) {
        
    let return_obj =   {
          "data": data_obj,
          "error": null,
          "status": "success"

    }
    return res.send(return_obj)
};
  
export default message;