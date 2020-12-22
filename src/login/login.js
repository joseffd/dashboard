import {users} from './users';

export function login(username, password){
    let userIndex = users.findIndex(function(user, index){
        if(user.username === username){
            return true;
        }
    });
    if(userIndex !== -1 && users[userIndex].password === password){
        return userIndex
    }
    return false
}