import ls from 'local-storage';

export function login(username, password){
    const users = ls.get('users');
    let userIndex = users.findIndex(function(user, index){
        if(user.username === username){
            return true;
        }
        return false;
    });
    if(userIndex !== -1 && users[userIndex].password === password){
        return userIndex
    }
    return false
}