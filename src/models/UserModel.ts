import { Model } from '@/models/Model';
import { DeviceModel } from './DeviceModel';

export class UserModel extends Model {
    public id: number | undefined;
    public name: string | undefined;
    public surname: string | undefined;
    public email: string | undefined;
    public devices: DeviceModel[] | undefined;

}
