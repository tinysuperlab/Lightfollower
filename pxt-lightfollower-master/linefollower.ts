/**
 * Benutzerdefinierte Blöcke
 */
//% weight=100 color=#0fbc11 icon=""
namespace lightfollower {
    /**
     * TODO: Beschreibe deine Funktion hier
     * @param PIN Gebe den pin an an dem der Lichtfolger angeschlossen ist, eg: DigitalPin.C18 , DigitalPin.C17
     */
    //% block
    export function readLightfollower(PIN: DigitalPin): void {
        if ((PIN == DigitalPin.C18) || (PIN == DigitalPin.C17)) {
            if (pins.digitalReadPin(PIN) == 1) {
                basic.showNumber(1)
            } else {
                basic.showNumber(0)
            }
        }
    }
}