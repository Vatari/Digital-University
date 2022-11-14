"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var route_activator_service_1 = require("./event-details/route-activator.service");
describe('RouteActivatorService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(route_activator_service_1.RouteActivatorService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
