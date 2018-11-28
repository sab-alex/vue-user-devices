import { Model } from '@/models/Model';

export class DeviceModel extends Model {
    public id: number | undefined;
    public name: string | undefined;
    public serial: string | undefined;
}
