import { Injectable } from '@angular/core';
declare var stepcounter: any;


@Injectable({
    providedIn: 'root'
})
export class StepCounterService {
    constructor() {}

    start(startingOffset) {
        console.log("iniciado con exito");
        return new Promise((resolve, reject) => {
            stepcounter.start(
                startingOffset,
                message => {
                    resolve(message);
                    console.log(message);
                },
                () => {
                    reject();
                }
            );
        });
    }

    stop() {
        return new Promise((resolve, reject) => {
            stepcounter.stop(
                message => {
                    resolve(message);
                },
                () => {
                    reject();
                }
            );
        });
    }

    getTodayStepCount() {
        console.log("gettodaystepcpunt con exito");
        return new Promise((resolve, reject) => {
            stepcounter.getTodayStepCount(
                message => {
                    resolve(message);
                    alert(message);
                },
                () => {
                    reject();
                }
            );
        });
    }

    getStepCount() {
        console.log("getstepcount con exito");
        return new Promise((resolve, reject) => {
            stepcounter.getStepCount(
                message => {
                    resolve(message);
                    alert(message);
                },
                () => {
                    reject();
                }
            );
        });
    }

    deviceCanCountSteps() {
        console.log("device con exito");
        return new Promise((resolve, reject) => {
            stepcounter.deviceCanCountSteps(
                message => {
                    resolve(message);
                    alert(message);
                },
                () => {
                    reject();
                }
            );
        });
    }

    getHistory() {
        return new Promise((resolve, reject) => {
            stepcounter.getHistory(
                message => {
                    resolve(message);
                },
                () => {
                    reject();
                }
            );
        });
    }
}