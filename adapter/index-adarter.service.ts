import { IPhone } from '../models/IPhone.interface';
import { Android } from '../models/Android.interface';
import { Iphone7 } from '../classes/IPhone7.class';
import { GooglePixel } from '../classes/GooglePixel.class';

class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB() {
       console.log('Want to use Micro USB, converting to Lightning...');
        this.iphoneDevice.useLightning();
    }
}

let iphone = new Iphone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);
let google = new GooglePixel();

chargeAdapter.useMicroUSB();
google.useMicroUSB();