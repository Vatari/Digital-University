"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EventListResolverService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var EventListResolverService = /** @class */ (function () {
    function EventListResolverService(eventService) {
        this.eventService = eventService;
    }
    EventListResolverService.prototype.resolve = function () {
        return this.eventService.getEvents().pipe(rxjs_1.map(function (events) { return events; }));
    };
    EventListResolverService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EventListResolverService);
    return EventListResolverService;
}());
exports.EventListResolverService = EventListResolverService;
