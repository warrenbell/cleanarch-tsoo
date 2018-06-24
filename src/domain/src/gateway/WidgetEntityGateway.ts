// Level 1 local dependencies from domain
import { WidgetType } from "../../../domain/src/index";

// Level 1 in domain
export interface WidgetEntityGateway {
    saveWidget(widget: WidgetType): Promise<WidgetType>;
}