// Layer 1 (yellow) dependencies from domain
import { WidgetType } from "../../../../domain/src/index";

// Lives in Layer 2 (red) in usecase
export interface IInputBoundary {
    createWidget(widget: WidgetType): void;
}