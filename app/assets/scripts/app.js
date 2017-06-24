import Navigation from "./modules/nav";import Waypoint from "./modules/waypoints";import Counter from "./modules/counter";import Register from "./modules/register";import DownloadCv from "./modules/download";window.onload = () => {    const DomStrings = {        aboutCard: ".card--about",        aboutText: ".card--textContent",        removeclass: "removetranslate",        aboutOffset: "30%",        textOffset: "35%",        target: ".skill",        toposition: "toposition",        svgOffset: "30%",        svg: ".skill--svg",        countObj: [            {countNode: ".count", stop:41, delay: 200, speed: 50},            {countNode: ".count--2", stop:38, delay: 1050, speed:50},            {countNode: ".count--3", stop: 1 , delay: 1900, speed: 50}            ]    };    new Navigation();    new Waypoint(DomStrings.aboutCard, DomStrings.removeclass, DomStrings.aboutOffset);    new Waypoint(DomStrings.aboutText, DomStrings.removeclass, DomStrings.textOffset);    new Waypoint(DomStrings.target, DomStrings.toposition, DomStrings.svgOffset, DomStrings.svg);    new Counter(DomStrings.countObj, 2000);    new Register();    new DownloadCv();};