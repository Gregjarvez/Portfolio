import get from "./selector";import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";import firebase from "./firebase";class Register {    constructor (){        this.registerContent = get(".showcase--button");        this.nofication = get(".showcase--notify")        this.span = get(".showcase--number");        this.count = 0;        this.ref = 10;        this.notifIndex = 0;        this.notifStatements = ["Bravo!!!!", "keep Going", "Getting there", "Marvelous!!!", "okay that's enough :)"];        this.classname= "animate";        this.events();    }        events() {        this.registerContent.addEventListener("click", this.async.bind(this));    }        *generator(){        let index = this.notifIndex;        yield this.notifStatements[index];    }        changeText() {        let text =  this.generator().next().value;        if (text){            this.nofication.textContent = text;            this.notifIndex++        }else {            this.nofication.textContent = "okay stop now:(";            this.notifIndex = 0;        }    }            mutateRef (){        return this.ref = this.count + 30;    }        async() {        this.count++;       const promise = new Promise((resolve) => {resolve(this.count)});       this.callstack(promise);    }        updateNumber(currentNumber){        this.span.textContent = currentNumber;     }    addanimation(span){        let addclass = span.classList.add(this.classname);        (span.classList.contains(this.classname)) ? void 0 : addclass ;    }        endAnimation(span){        setTimeout(() => span.classList.remove(this.classname), 1000)    }        notify(){        let ref = this.ref;        if (this.count === ref){            this.nofication.classList.add("movein");            setTimeout(() => this.nofication.classList.remove("movein"), 3000)            this.mutateRef();            this.changeText();        }    }        callstack(promise){        promise            .then((currentNumber) => this.updateNumber.call(this, currentNumber))            .then(() => this.addanimation.call(this, this.span))              .then((currentNumber) => this.endAnimation.call(this, this.span))            .then((currentNumber) => this.notify(currentNumber))            .then(()=> this.notify())    }        syncCounter(){            }}export default Register;