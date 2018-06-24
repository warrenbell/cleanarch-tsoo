// Layer 1 (yellow) dependencies from domain
import { WidgetType } from "../../../domain/src/index";

// Lives in Layer 3 (green) in delivery
export interface CreateWidgetRequestInt {
    execute(widget: WidgetType): void;
}