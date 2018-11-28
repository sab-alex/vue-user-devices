import { AbstractHttpService } from '@/services/http/abstract.http.service';
import { UserModel } from '@/models/UserModel';
import { DeviceModel } from '@/models/DeviceModel';


class DevicesHttpService extends AbstractHttpService {

    public constructor() {
        super();
    }
    public prefix = '/devices';
    
    public fetch(params: any): Promise<DeviceModel[]> {
       return this.http.get(this.prefix, {params}).then( (res: any) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
            
       }).catch(this.handleError);

    }

    public fetchByUsers(params: any): Promise<DeviceModel[]> {
        return this.http.get(this.prefix + '/users', {params}).then( (res: any) => {
             if (res.data) {
                 return res.data;
             } else {
                 return null;
             }
             
        }).catch(this.handleError);
 
     }

    public update(id: number, object: any) {
        return this.http.post(this.prefix + "/" + id + "/update", {object}).then( (res: any) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
       }).catch(this.handleError);
    }

    public attach(data: any) {
        return this.http.post(this.prefix + '/attach', data).then( (res: any) => {
            if (res.data) {
                return res.data;
            } else {
                return null;
            }
       }).catch(this.handleError);
    }
}
export const devicesHttpService = new DevicesHttpService();
