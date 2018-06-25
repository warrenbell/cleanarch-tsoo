// Layer 1 (yellow) dependencies from domain
import { WidgetType, IEntityGateway } from "../../../domain/src/index";
// Layer 2 (red) dependencies from usecase
import { IInputBoundary, Interactor } from "../../../usecase/src/index";
// Layer 3 (green) local dependencies from delivery
import { IViewModel, IRequest, Presenter } from "../../../delivery/src/index";

// Lives in Layer 3 (green) in delivery
export class Controller implements IRequest {

    entityGateway: IEntityGateway;
    viewModel: IViewModel;

    constructor(entityGateway: IEntityGateway, viewModel: IViewModel) {
        this.viewModel = viewModel;
        this.entityGateway = entityGateway;
    }

    createWidget(widget: WidgetType): void {
        const interactor: IInputBoundary = new Interactor(this.entityGateway, new Presenter(this.viewModel));
        interactor.createWidget(widget);
    }
}