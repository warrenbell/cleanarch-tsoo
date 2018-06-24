import { AnyDBWidgetEntityGateway } from "./persistence/anydb/AnyDBWidgetEntityGateway";
import { MobileCreateWidgetRequest } from "./ui/mobileapp/request/MobileCreateWidgetRequest";
import { MobileCreateWidgetViewModel } from "./ui/mobileapp/viewmodel/MobileCreateWidgetViewModel";

// This is where you can wire up different implementations of WidgetEntityGateway
import { AnyDBWidgetEntityGateway as WidgetEntityGatewayIMPL } from "./persistence/anydb/AnyDBWidgetEntityGateway";

export { AnyDBWidgetEntityGateway, MobileCreateWidgetRequest, MobileCreateWidgetViewModel, WidgetEntityGatewayIMPL };
