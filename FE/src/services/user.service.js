const { default: BaseService } = require("./base.service")

class User extends BaseService {

    getUserById = async (id) => {
        const result = await this.api.post('/api/user/getUser', {id: id});
        return result;
    }

}

export default User;