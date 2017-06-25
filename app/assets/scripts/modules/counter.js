import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";import _babelPolyfill from "babel-polyfill";import get from "./selector";class Counter {    constructor(counterObject) {        this.counterObject = counterObject;        this.index = 0;        this.hasRun = false;        this.elements = [];        this.id = get("#portfolio");        this.setWaypoint();    }    test() {        let that = this;        let promiseObject = Promise.all(this.elements);        promiseObject            .then(x => x.forEach(function (e) {                that.countNext.call(this, e);            }));    }    *generator() {        let index = this.index;        yield this.counterObject[index];    }    countNext(promise) {        let [count, stop] = [1, promise.stop];        setTimeout(function () {            let startCounter = setInterval(function () {                get(promise.countNode).textContent = count;                if (count === stop) {                    clearInterval(startCounter);                }                count++;            }, 2000);        }, promise.delay);    }    setCounter() {        let that = this;        let count = this.counterObject.length;        for (let i = 0; i < count; i++) {            this.index = i;            this.elements.push(new Promise(function (resolve) {                resolve(that.generator().next().value);            }));        }    }        setWaypoint(){        let that = this;        return new Waypoint({           element: that.id,            handler: () => {               if(!that.hasRun){                   that.setCounter();                   that.test();                   that.hasRun = true;               }            },            offset: "40%"        });    }}export default Counter;