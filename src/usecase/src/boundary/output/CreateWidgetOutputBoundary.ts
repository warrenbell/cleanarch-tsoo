// Level 1 dependencies from domain
import { WidgetType } from "../../../../domain/src/index";

// Level 2 in usecase
export interface CreateWidgetOutputBoundary {
    execute(widget: WidgetType): void;
}