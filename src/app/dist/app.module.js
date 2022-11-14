"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.checkState = exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var nav_component_1 = require("./nav/nav.component");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_toastr_1 = require("ngx-toastr");
var event_details_component_1 = require("./events/event-details/event-details.component");
var routes_1 = require("./routes");
var router_1 = require("@angular/router");
var create_event_component_1 = require("./events/create-event/create-event.component");
var not_found_component_1 = require("./errors/not-found/not-found.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                events_list_component_1.EventsListComponent,
                event_thumbnail_component_1.EventThumbnailComponent,
                nav_component_1.NavComponent,
                event_details_component_1.EventDetailsComponent,
                create_event_component_1.CreateEventComponent,
                not_found_component_1.NotFoundComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes),
            ],
            providers: [{ provide: 'canDeactivateCreateEvent', useValue: checkState }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkState(component) {
    if (component.isNotSaved) {
        return window.confirm('You have not saved this event, do you really want to leave this page?');
    }
    return true;
}
exports.checkState = checkState;
