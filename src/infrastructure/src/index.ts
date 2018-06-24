// Layer 4 (blue) local dependencies from infrastructure
// This is were we can wire together different implementations of SaveWidgetEntityGatewayInt
import { SaveWidgetEntityGatewayAnyDBImp as SaveWidgetEntityGatewayImp } from "./persistence/anydb/EntityGatewayImp"

export { SaveWidgetEntityGatewayImp };