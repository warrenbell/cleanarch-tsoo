// Level 1 dependencies from domain
import { WidgetType } from "../../../domain/src/index";
// Level 2 dependencies from usecase
import { CreateWidgetOutputBoundary } from "../../../usecase/src/index";
// Level 3 local dependencies from delivery
import { CreateWidgetViewModel } from "../../../delivery/src/index";

// Level 3 in delivery
export class CreateWidgetPresenter implements CreateWidgetOutputBoundary {

    createWidgetViewModel: CreateWidgetViewModel;

    constructor(createWidgetViewModel: CreateWidgetViewModel) {
        this.createWidgetViewModel = createWidgetViewModel;
    }

    execute(widget: WidgetType): void {
        this.createWidgetViewModel.execute(widget);
    }

}