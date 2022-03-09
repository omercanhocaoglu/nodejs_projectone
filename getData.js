import axios from "axios";

const getUser =  (user_id) => { return new Promise (async (resolve, reject) => 

    {const {data} = await axios ("https://jsonplaceholder.typicode.com/users/"+user_id); 
    
     resolve(data);   });  };

const getPost =  (post_id) => { return new Promise (async (resolve, reject) => 

        {const {data} = await axios ("https://jsonplaceholder.typicode.com/posts/" + post_id); 
        
        resolve(data);   });  };

        Promise.all ( [getUser(1), getPost(1)] ) .then (console.log) ;

 export {getUser,getPost};
            

