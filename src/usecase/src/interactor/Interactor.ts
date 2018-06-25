// Layer 1 (yellow) dependencies from domain
import { WidgetType, IEntityGateway } from "../../../domain/src/index";
// Layer 2 (red) local dependencies from usecase
import { IInputBoundary, IOutputBoundary } from "../../../usecase/src/index";

// Lives in Layer 2 (red) in usecase
export class Interactor implements IInputBoundary {

    entityGateway: IEntityGateway;
    outputBoundary: IOutputBoundary;

    constructor(entityGateway: IEntityGateway, outputBoundary: IOutputBoundary) {
        this.entityGateway = entityGateway;
        this.outputBoundary = outputBoundary;
    }

    createWidget(widget: WidgetType): void {
        this.entityGateway.saveWidget(widget)
        .then((widget: WidgetType) => {
            this.outputBoundary.presentWidget(widget);
        });
    }
}

