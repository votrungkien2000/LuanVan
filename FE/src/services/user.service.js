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

}

export default User;