"use strict";
exports.__esModule = true;
exports.appRoutes = void 0;
var not_found_component_1 = require("./errors/not-found/not-found.component");
var create_event_component_1 = require("./events/create-event/create-event.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var route_activator_service_1 = require("./events/event-details/route-activator.service");
var events_list_component_1 = require("./events/events-list.component");
var event_list_resolver_service_1 = require("./events/shared/event-list-resolver.service");
exports.appRoutes = [
    {
        path: 'events/new',
        component: create_event_component_1.CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events',
        component: events_list_component_1.EventsListComponent,
        resolve: { events: event_list_resolver_service_1.EventListResolverService }
    },
    {
        path: 'events/:id',
        component: event_details_component_1.EventDetailsComponent,
        canActivate: [route_activator_service_1.RouteActivatorService]
    },
    { path: '404', component: not_found_component_1.NotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
