// Layer 1 (yellow) dependencies from domain
import { WidgetType } from "../../../domain/src/index";
// Layer 2 (red) dependencies from usecase
import { CreateWidgetOutputBoundaryInt } from "../../../usecase/src/index";
// Layer 3 (green) local dependencies from delivery
import { CreateWidgetViewModelInt } from "../../../delivery/src/index";

// Lives in Layer 3 (green) in delivery
export class CreateWidgetPresenterImp implements CreateWidgetOutputBoundaryInt {

    createWidgetViewModelImp: CreateWidgetViewModelInt;

    constructor(createWidgetViewModelImp: CreateWidgetViewModelInt) {
        this.createWidgetViewModelImp = createWidgetViewModelImp;
    }

    execute(widget: WidgetType): void {
        this.createWidgetViewModelImp.execute(widget);
    }

}