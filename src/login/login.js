import ls from 'local-storage';

export function login(username, password){
    const users = ls.get('users');
    let userIndex = getIndex(username, users);
    if(userIndex !== -1 && users[userIndex].password === password){
        return userIndex
    }
    return false
}

export function getIndex(username, users){

    let userIndex = users.findIndex(function(user, index){
        if(user.username === username){
            return true;
        }
        return false;
    });
    return userIndex;
}