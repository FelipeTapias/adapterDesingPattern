import { Android } from "../models/Android.interface";

export class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB');
    }
}