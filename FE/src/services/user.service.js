const { default: BaseService } = require("./base.service")

class User extends BaseService {

    getUserById = async (id) => {
        const result = await this.api.post('/api/user/getUser', {id: id});
        return result;
    }
    login = async (account, password) => {
        const result = await this.api.post('/api/user/login', {email: account, password: password});
        return result;
    }
    register = async (user) => {
        const result = await this.api.post('/api/user/register', user);
        return result;
    }
    updateUser = async (user, id) => {
        const result = await this.api.post('/api/user/updateUser', {user, id});
        return result;
    }
}

export default User;