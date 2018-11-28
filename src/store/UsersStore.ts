import { usersHttpService } from '@/services/http/Users.http.service';

const UsersStore = {
    state: { 
        users: [],
        selectedUsers : []
    },
    mutations: {
        fetchUsers(state: any) {
            return usersHttpService.fetch({}).then( (data) => {
                state.users = data;
            })
        }
    },
    actions: {
        getUsers(state: any) {
            return new Promise((resolve, reject) => {

            });
        }
    },
    getters: {

    }
}
export default UsersStore;
