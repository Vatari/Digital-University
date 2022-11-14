"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotificationService = void 0;
var core_1 = require("@angular/core");
var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
    }
    NotificationService.prototype.success = function (message, title) {
        this.toastr.success(message, title, { positionClass: 'toast-top-right' });
    };
    NotificationService.prototype.info = function (message, title) {
        this.toastr.info(message, title);
    };
    NotificationService.prototype.warning = function (message, title) {
        this.toastr.warning(message, title);
    };
    NotificationService.prototype.error = function (message, title) {
        this.toastr.error(message, title);
    };
    NotificationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
