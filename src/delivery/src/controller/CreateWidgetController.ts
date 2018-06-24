// Level 1 dependencies from domain
import { WidgetType, WidgetEntityGateway } from "../../../domain/src/index";
// Level 2 dependencies from usecase
import { CreateWidgetInputBoundary, CreateWidgetInteractor,  } from "../../../usecase/src/index";
// Level 3 local dependencies from delivery
import { CreateWidgetViewModel, CreateWidgetRequest, CreateWidgetPresenter } from "../../../delivery/src/index";

// Level 3 in delivery
export class CreateWidgetController implements CreateWidgetRequest {

    widgetEntityGateway: WidgetEntityGateway;
    createWidgetViewModel: CreateWidgetViewModel;

    constructor(widgetEntityGateway: WidgetEntityGateway, createWidgetViewModel: CreateWidgetViewModel) {
        this.createWidgetViewModel = createWidgetViewModel;
        this.widgetEntityGateway = widgetEntityGateway;
    }

    execute(widget: WidgetType): void {
        const createWidgetInteractor: CreateWidgetInputBoundary = new CreateWidgetInteractor(this.widgetEntityGateway, new CreateWidgetPresenter(this.createWidgetViewModel));
        createWidgetInteractor.execute(widget);
    }
}