import React from 'react';
import useResource5 from './useResource';



/*const userList=(props)=>{
    const users = useResource('users');
    //console.log("users===========>",users);
    return(
      <div>
          <ul>
              {users.map((user)=>{
                return <li>Naresh</li>;
              })}
              Hii
          </ul>
      </div>
    );
}
export default userList;*/


const userList  = (props)=>{

 alert(props.name);
  //const resources = useResource5(props.name);

  return(
    <div>

        <ul>
        new userlist
        </ul>
    </div>
  );
}

export default userList;
