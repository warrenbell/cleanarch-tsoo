// Level 1 dependencies from domain
import { WidgetType } from "../../../../../domain/src/index";
// Level 3 dependencies from delivery
import { CreateWidgetViewModel } from "../../../../../delivery/src/index";

// Level 4 in infrastructure
export class MobileCreateWidgetViewModel implements CreateWidgetViewModel {
    
    execute(widget: WidgetType): void {
        // Main output point here
        // Update Mobile UI here
    }

}