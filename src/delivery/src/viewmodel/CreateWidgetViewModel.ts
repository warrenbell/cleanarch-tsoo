// Level 1 dependencies from domain
import { WidgetType } from "../../../domain/src/index";

// Level 3 in delivery
export interface CreateWidgetViewModel {
    execute(widget: WidgetType): void;
}