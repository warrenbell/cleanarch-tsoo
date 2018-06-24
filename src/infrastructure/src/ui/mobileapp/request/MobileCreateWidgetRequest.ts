// Level 1 dependencies from domain
import { WidgetType } from "../../../../../domain/src/index";
// Level 3 dependencies from delivery
import { CreateWidgetController, CreateWidgetRequest, CreateWidgetViewModel } from "../../../../../delivery/src/index";
// Level 4 local dependencies from infrastructure 
import { AnyDBWidgetEntityGateway } from "../../../../../infrastructure/src/index";

// Level 4 in infrastructure
export class MobileCreateWidgetRequest implements CreateWidgetRequest {

    // Example implementation of this interface is MobileCreateWidgetViewModel
    createWidgetViewModel: CreateWidgetViewModel;
    
    constructor(createWidgetViewModel: CreateWidgetViewModel) {
        this.createWidgetViewModel = createWidgetViewModel;
    }
    
    execute(widget: WidgetType): void {
        // Main Entry point here
        const createWidgetRequest: CreateWidgetRequest = new CreateWidgetController(new AnyDBWidgetEntityGateway(), this.createWidgetViewModel);
        createWidgetRequest.execute(widget);
    }

}