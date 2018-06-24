// Layer 1 (yellow) dependencies from domain
import { WidgetType, SaveWidgetEntityGatewayInt } from "../../../domain/src/index";
// Layer 2 (red) dependencies from usecase
import { CreateWidgetInputBoundaryInt, CreateWidgetInteractorImp } from "../../../usecase/src/index";
// Layer 3 (green) local dependencies from delivery
import { CreateWidgetViewModelInt, CreateWidgetRequestInt, CreateWidgetPresenterImp } from "../../../delivery/src/index";

// Lives in Layer 3 (green) in delivery
export class CreateWidgetControllerImp implements CreateWidgetRequestInt {

    saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt;
    createWidgetViewModelImp: CreateWidgetViewModelInt;

    constructor(saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt, createWidgetViewModelImp: CreateWidgetViewModelInt) {
        this.createWidgetViewModelImp = createWidgetViewModelImp;
        this.saveWidgetEntityGatewayImp = saveWidgetEntityGatewayImp;
    }

    execute(widget: WidgetType): void {
        const createWidgetInteractorImp: CreateWidgetInputBoundaryInt = new CreateWidgetInteractorImp(this.saveWidgetEntityGatewayImp, new CreateWidgetPresenterImp(this.createWidgetViewModelImp));
        createWidgetInteractorImp.execute(widget);
    }
}