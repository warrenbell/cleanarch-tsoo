// Level 1 dependencies from domain
import { WidgetType, WidgetEntityGateway } from "../../../domain/src/index";
// Level 2 local dependencies from usecase
import { CreateWidgetInputBoundary, CreateWidgetOutputBoundary } from "../../../usecase/src/index";

// Level 2 in usecase
export class CreateWidgetInteractor implements CreateWidgetInputBoundary {

    widgetEntityGateway: WidgetEntityGateway;
    createWidgetOutputBoundary: CreateWidgetOutputBoundary;

    // WidgetEntityGatewayImpl and CreateWidgetPresenter
    constructor(widgetEntityGateway: WidgetEntityGateway, createWidgetOutputBoundary: CreateWidgetOutputBoundary) {
        this.widgetEntityGateway = widgetEntityGateway;
        this.createWidgetOutputBoundary = createWidgetOutputBoundary;
    }

    execute(widget: WidgetType): void {
        this.widgetEntityGateway.saveWidget(widget)
        .then((widget: WidgetType) => {
            this.createWidgetOutputBoundary.execute(widget);
        });
    }
}

