// Layer 1 (yellow) dependencies from domain
import { WidgetType } from "../../domain/src/index";
// Layer 3 (green) dependencies from delivery
import { IViewModel, IRequest, Controller } from "../../delivery/src/index";
// Layer 4 (blue) local dependencies from infrastructure
import { EntityGateway } from "../../infrastructure/src/index";

// Testing frameworks
import * as chai from "chai";
import 'mocha';

describe('Testing entry point into the delivery layer', () => {

    describe('Controller createWidget(widget: WidgetType)', () => {
        it('should return an object via ViewModel with certain properties', () => {
            class ViewModel implements IViewModel {
                presentWidget(widget: WidgetType): void {
                    // Data moving from delivery up to infrastructure
                    // Data mapping or conversion here  
                    // Update UI here. Main output point into ViewModel
                    chai.expect(widget).deep.equal({id: "5etr3546ug78", rev: "763574903849", name: "Widget Name"});
                }
            }
            const controller: IRequest = new Controller(new EntityGateway(), new ViewModel());
            // Data moving from infrastructure down to delivery
            // Data mapping or conversion here  
            // Called by UI. Main entry point into Controller
            controller.createWidget({name: "Widget Name"});
        });
    });

});