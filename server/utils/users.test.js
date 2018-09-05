const expect = require('expect');

const {Users} = require('./users');

const userOne = {
    id: '123',
    name: 'Logan',
    room: 'cozy boys'
};

const userTwo = {
    id: '123567',
    name: 'pablo',
    room: 'cozy boys'
}

const userThree = {
    id: '458493',
    name: 'dfffffs',
    room: 'node course'
}

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.addUser(userOne.id, userOne.name, userOne.room);
        users.addUser(userTwo.id, userTwo.name, userTwo.room);
        users.addUser(userThree.id, userThree.name, userThree.room);
    })

    it('should add new user', () => {
        var addUser = {
            id: 'hdosfh',
            name: 'smash',
            room: 'temp'
        }
        users.addUser(addUser.id, addUser.name, addUser.room);

        expect(users.users.length).toEqual(4);
        expect(users.users[3]).toEqual(addUser);
    })

    it('should remove a user', () => {
        users.removeUser(userOne.id);
        
        expect(users.users.length).toEqual(2);
        expect(users.users[0]).toEqual(userTwo);
    })

    it('not remove a user', () => {
        users.removeUser('1');

        expect(users.users.length).toEqual(3);
    })

    it('should return a user', () => {
        var user = users.getUser(userOne.id);
        expect(user).toEqual(userOne);
    })

    it('should not return a user', () => {
        var user = users.getUser('1');
        expect(user).toBeFalsy();
    })

    it('should return a list of users', () => {
        var userList = users.getUserList('cozy boys');
        expect(userList.length).toBe(2);
        expect(userList).toEqual([userOne.name, userTwo.name]);
    })
})