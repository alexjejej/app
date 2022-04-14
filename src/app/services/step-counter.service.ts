import { Injectable } from '@angular/core';

declare var stepcounter: any;

@Injectable({
    providedIn: 'root'
})
export class StepCounterService {
    constructor() {}

    start(startingOffset) {
        return new Promise((resolve, reject) => {
            stepcounter.start(
                startingOffset,
                message => {
                    resolve(message);
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
        return new Promise((resolve, reject) => {
            stepcounter.getTodayStepCount(
                message => {
                    resolve(message);
                },
                () => {
                    reject();
                }
            );
        });
    }

    getStepCount() {
        return new Promise((resolve, reject) => {
            stepcounter.getStepCount(
                message => {
                    resolve(message);
                },
                () => {
                    reject();
                }
            );
        });
    }

    deviceCanCountSteps() {
        return new Promise((resolve, reject) => {
            stepcounter.deviceCanCountSteps(
                message => {
                    resolve(message);
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