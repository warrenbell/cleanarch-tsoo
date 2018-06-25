// Layer 1 (yellow) dependencies from domain
import { WidgetType } from "../../../domain/src/index";
// Layer 2 (red) dependencies from usecase
import { IOutputBoundary } from "../../../usecase/src/index";
// Layer 3 (green) local dependencies from delivery
import { IViewModel } from "../../../delivery/src/index";

// Lives in Layer 3 (green) in delivery
export class Presenter implements IOutputBoundary {

    viewModel: IViewModel;

    constructor(viewModel: IViewModel) {
        this.viewModel = viewModel;
    }

    presentWidget(widget: WidgetType): void {
        this.viewModel.presentWidget(widget);
    }

}