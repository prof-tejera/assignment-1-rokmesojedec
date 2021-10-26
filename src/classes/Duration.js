
const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = 24 * HOUR;
const YEAR = 365 * DAY;
const MONTH = YEAR / 12;


// Time Enums in milliseconds
export const TIME_ENUM = {
    MILLISECOND: MILLISECOND,
    SECOND: SECOND,
    MINUTE: MINUTE,
    HOUR: HOUR,
    DAY: DAY,
    YEAR: YEAR,
    MONTH: MONTH
}

// Creates Duration Object
export class Duration {
    constructor({
        years = 0,
        months = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0,
        milliseconds = 0,
        rounds = 1,
        tickSize = MILLISECOND, // sets the amount increased/decreased on each tick
        countdownMode = true, // when set to true, we count down to passed time values
        // and when countdownMode is true, we count up to the passed value
        intervalFunctions = [], // functions which are executed during each tick of the timer
    } = {}) {
        // Convert args to milliseconds

        this._years = years;
        this._months = months;
        this._days = days;
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
        this._milliseconds = milliseconds;
        this.rounds = this._currentRound = rounds;
        this._roundsCompleted = 0;
        this.tickSize = tickSize;
        this.countdownInterval = null;
        this.intervalFunctions = [...intervalFunctions];
        this.countdownMode = countdownMode;

        // defines getters and setters for time components
        ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"].forEach(
            prop => {
                Object.defineProperty(this, prop, {
                    get: function () {
                        return this[`_${prop}`];
                    },
                    set: function (value) {
                        if (isNaN(value) || (!isNaN(value) && value < 0))
                            throw new Error(`${prop} paramter is not a number greater or equal to 0`);
                        this[`_${prop}`] = value;
                    }
                });
            }
        )
        this.initializeTime();
    }

    initializeTime() {
        // Converts all time components to milliseconds;
        let millisecondsTotal = 0
            + this._milliseconds
            + this._seconds * SECOND
            + this._minutes * MINUTE
            + this._hours * HOUR
            + this._days * DAY
            + this._months * MONTH
            + this._years * YEAR;

        if (this.countdownMode) {
            // Counting down from Start Time to 0
            this._currentTime = millisecondsTotal;
        } else {
            // Counting up form 0 to End Time
            this._currentTime = 0;
        }
        this._currentRound = this.rounds;
        this._roundsCompleted = 0;
        this._totalTime = millisecondsTotal * this.rounds;
        this._roundTime = millisecondsTotal;
    }

    tick() {
        // increases or decreases time on each tick
        if (this.countdownMode) {
            // COUNTING DOWN
            this._currentTime -= this.tickSize;
            if (this._currentTime <= 0) {
                if (this._currentRound > 0) this._currentRound--;
                if (this._currentRound > 0) {
                    this._currentTime = this._roundTime - this._currentTime;
                } else {
                    this._currentTime = 0;
                }
            }
        }
        else {
            // CONTING UP
            this._currentTime += this.tickSize;
            if (this._currentTime >= this._roundTime) {
                if (this._currentRound > 0) this._currentRound--;
                if (this._currentRound > 0) {
                    this._roundsCompleted++;
                    this._currentTime = this._currentTime - this._roundTime;
                } else {
                    this._currentTime = this._roundTime;
                }
            }
        }
    }

    start() {
        if (this.countdownInterval === null) {
            this.initializeTime();
            this.countdownInterval = setInterval(() => {
                this.tick();
                this.intervalFunctions.forEach(func => { func(this); });
                if (this.done) this.clear();
            }, this.tickSize);
        }
    }

    clear() {
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
    }

    pushIntervalFunction(intervalFunction) {
        this.intervalFunctions.push(intervalFunction);
    }

    get roundDone() {
        return Math.floor((10000 * (this._currentTime / this._roundTime)));
    }

    get precentDone() {
        return Math.floor((10000 *
            (((this.countdownMode ? this._currentRound - 1 : this._roundsCompleted) *
                this._roundTime + this._currentTime) / this._totalTime)));
    }

    get currentYears() {
        return Math.floor(this._currentTime / YEAR);
    }

    get currentMonths() {
        return Math.floor((this._currentTime % YEAR) / MONTH);
    }

    get currentDays() {
        return Math.floor((this._currentTime % MONTH) / DAY);
    }

    get currentHours() {
        return Math.floor((this._currentTime % DAY) / HOUR);
    }

    get currentMinutes() {
        return Math.floor((this._currentTime % HOUR) / MINUTE);
    }

    get currentSeconds() {
        return Math.floor((this._currentTime % MINUTE) / SECOND);
    }

    get currentMilliseconds() {
        return Math.floor((this._currentTime % SECOND) / MILLISECOND);
    }

    get done() {
        // tells weather times is finished
        if (this.countdownMode)
            return this._currentRound === 0 && this._currentTime === 0;
        return this._currentRound === 0 && this._currentTime === this._roundTime;
    }

    static get TIME_ENUM() {
        return TIME_ENUM;
    }
}