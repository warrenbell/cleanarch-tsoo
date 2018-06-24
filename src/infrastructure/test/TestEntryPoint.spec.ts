// Layer 1 (yellow) dependencies from domain
import { WidgetType } from "../../domain/src/index";
// Layer 3 (green) dependencies from delivery
import { CreateWidgetViewModelInt, CreateWidgetRequestInt, CreateWidgetControllerImp } from "../../delivery/src/index";
// Layer 4 (blue) local dependencies from infrastructure
import { SaveWidgetEntityGatewayImp } from "../../infrastructure/src/index";

// Testing frameworks
import * as chai from "chai";
import 'mocha';

describe('Testing entry point into the delivery layer', () => {

    describe('CreateWidgetControllerImp execute(widget: WidgetType)', () => {
        it('should return an object via CreateWidgetViewModelImp with certain properties', () => {
            class CreateWidgetViewModelImp implements CreateWidgetViewModelInt {
                execute(widget: WidgetType): void {
                    // Data moving from delivery up to infrastructure
                    // Data mapping or conversion here  
                    // Update UI here. Main output point into ViewModel
                    chai.expect(widget).deep.equal({id: "5etr3546ug78", rev: "763574903849", name: "Widget Name"});
                }
            }
            const createWidgetRequestImp: CreateWidgetRequestInt = new CreateWidgetControllerImp(new SaveWidgetEntityGatewayImp(), new CreateWidgetViewModelImp());
            // Data moving from infrastructure down to delivery
            // Data mapping or conversion here  
            // Called by UI. Main entry point into Controller
            createWidgetRequestImp.execute({name: "Widget Name"});
        });
    });

});