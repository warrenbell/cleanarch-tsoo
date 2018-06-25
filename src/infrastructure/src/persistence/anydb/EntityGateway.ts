// Layer 1 (yellow) dependencies from domain
import { WidgetType, IEntityGateway } from "../../../../domain/src/index";

// Lives in Layer 4 (blue) in infrastructure
export class EntityGateway implements IEntityGateway {
    
    saveWidget(widget: WidgetType): Promise<WidgetType> {
         return new Promise<WidgetType>((resolve: any, reject: any) => {
            // Implement CouchDB code here
            resolve({id: "5etr3546ug78", rev: "763574903849", name: "Widget Name"});
         });
    }
}