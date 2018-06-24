import { CreateWidgetViewModel, CreateWidgetRequest, CreateWidgetController } from "../../../../delivery/src/index";
import { WidgetType } from "../../../../domain/src/index";
import { AnyDBWidgetEntityGateway } from "../../../../infrastructure/src/index";

// Testing
import * as chai from "chai";
import 'mocha';


describe('Testing infrastructure module code in /infrastructure/src/ui/mobileapp', () => {

    describe('MobileCreateWidgetRequest execute(widget: WidgetType)', () => {
        it('should return an object with certain properties', () => {
            class TestCreateWidgetViewModel implements CreateWidgetViewModel {
                execute(widget: WidgetType): void {
                    // This is where you update your ui with output
                    chai.expect(widget).deep.equal({id: "5etr3546ug78", rev: "763574903849", name: "Widget Name"});
                }
            }
            const createWidgetRequest: CreateWidgetRequest = new CreateWidgetController(new AnyDBWidgetEntityGateway(), new TestCreateWidgetViewModel());
            createWidgetRequest.execute({id: "some_id", rev: "some_revision_number", name: "Widget Name"});
        });
    });

});