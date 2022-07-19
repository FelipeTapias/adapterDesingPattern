import { IPhone } from "../models/IPhone.interface";

export class Iphone7 implements IPhone {
    useLightning() {
        console.log('Using lightning port..');
    }
}