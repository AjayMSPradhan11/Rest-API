import { v4 as uuidv4 } from 'uuid';


let users = [];

export const createUser =(req,res) => {
    const user=req.body; 

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUsers =(req, res) => {
    console.log(users);

    res.send(users);
}

export const getUser =(req, res) => {
    const { id } = req.params;

    const foundUser = users.find((users) => users.id === id );

    res.send(foundUser);
}

export const deleteUser =(req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id  !== id);

    res.send(`The data has been deleted`);
}

export const patchUser =(req, res) =>{
    const { id } = req.params;

    const {firstName, lastName, age } = req.body;
    
    const userToBeUpdated =  users.find((user)=> user.id===id);

    if(firstName) userToBeUpdated.firstName  = firstName;

    if(lastName) userToBeUpdated.lastName  = lastName;

    if(age) userToBeUpdated.age  = age;

    res.send(`User ${id} has been updated`);

}