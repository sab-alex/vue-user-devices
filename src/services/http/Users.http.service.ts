import { AbstractHttpService } from '@/services/http/abstract.http.service';
import { UserModel } from '@/models/UserModel';


class UsersHttpService extends AbstractHttpService {

    public constructor() {
        super();
    }
    public prefix = '/users';
    
    public fetch(params: any): Promise<UserModel[]> {
       return this.http.get(this.prefix, {params}).then( (res: any) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
            
       }).catch(this.handleError);

    }
}
export const usersHttpService = new UsersHttpService();
