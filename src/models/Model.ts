import { Deserializable } from './deserializable.model';
export abstract class Model implements Deserializable {
    public deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
