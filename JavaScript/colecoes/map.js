function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('luis', 'Admin');
usuarios.set('joao','Admin');
usuarios.set('lyon', 'User');
usuarios.set('Naty', 'Admin');

console.log(getAdmins(usuarios))