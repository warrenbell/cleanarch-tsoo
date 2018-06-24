// Layer 1 (yellow) dependencies from domain
import { WidgetType, SaveWidgetEntityGatewayInt } from "../../../domain/src/index";
// Layer 2 (red) local dependencies from usecase
import { CreateWidgetInputBoundaryInt, CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index";

// Lives in Layer 2 (red) in usecase
export class CreateWidgetInteractorImp implements CreateWidgetInputBoundaryInt {

    saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt;
    createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt;

    // WidgetEntityGatewayImpl and CreateWidgetPresenter
    constructor(saveWidgetEntityGatewayImp: SaveWidgetEntityGatewayInt, createWidgetOutputBoundaryImp: CreateWidgetOutputBoundaryInt) {
        this.saveWidgetEntityGatewayImp = saveWidgetEntityGatewayImp;
        this.createWidgetOutputBoundaryImp = createWidgetOutputBoundaryImp;
    }

    execute(widget: WidgetType): void {
        this.saveWidgetEntityGatewayImp.saveWidget(widget)
        .then((widget: WidgetType) => {
            this.createWidgetOutputBoundaryImp.execute(widget);
        });
    }
}

