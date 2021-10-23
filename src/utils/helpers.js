// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = 24 * HOUR;
const YEAR = 365 * DAY;
const MONTH = YEAR / 12;

export const TIME_ENUM = {
    MILLISECOND: MILLISECOND,
    SECOND: SECOND,
    MINUTE: MINUTE,
    HOUR: HOUR,
    DAY: DAY,
    YEAR: YEAR,
    MONTH: MONTH
}


export class Duration {
    constructor({
        years = 0,
        months = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0,
        milliseconds = 0,
        tickSize = MILLISECOND,
        countdown = true,
    } = {}) {
        // Convert args to milliseconds
        this._milliseconds = 0
            + milliseconds
            + seconds * SECOND
            + minutes * MINUTE
            + hours * HOUR
            + days * DAY
            + months * MONTH
            + years * YEAR;

        this._startTime = this._milliseconds;
        this.tickSize = tickSize;
    }

    tick() {
        this._milliseconds -= this.tickSize;
        if (this._milliseconds < 0) this._milliseconds = 0;
    }

    get precentDone(){
        return Math.floor(100 * (this._milliseconds / this._startTime));
    }

    get years() {
        return Math.floor(this._milliseconds / YEAR);
    }

    get months() {
        return Math.floor((this._milliseconds % YEAR) / MONTH);
    }

    get days() {
        return Math.floor((this._milliseconds % MONTH) / DAY);
    }

    get hours() {
        return Math.floor((this._milliseconds % DAY) / HOUR);
    }

    get minutes() {
        return Math.floor((this._milliseconds % HOUR) / MINUTE);
    }

    get seconds() {
        return Math.floor((this._milliseconds % MINUTE) / SECOND);
    }

    get milliseconds() {
        return Math.floor((this._milliseconds % SECOND) / MILLISECOND);
    }

    get done(){
        return this._milliseconds === 0;
    }

    static get TIME_ENUM() {
        return TIME_ENUM;
    }
}