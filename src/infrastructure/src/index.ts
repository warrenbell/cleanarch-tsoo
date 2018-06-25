// Layer 4 (blue) local dependencies from infrastructure
// This is were we can wire together different implementations of IEntityGateway using the from path
import { EntityGateway } from "./persistence/anydb/EntityGateway"

export { EntityGateway };