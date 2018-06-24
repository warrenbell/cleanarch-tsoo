// Level 1 dependencies from domain
import { WidgetType, WidgetEntityGateway } from "../../../../domain/src/index";

// Level 4 in infrastructure
export class AnyDBWidgetEntityGateway implements WidgetEntityGateway {
    
    saveWidget(widget: WidgetType): Promise<WidgetType> {
         return new Promise<WidgetType>((resolve: any, reject: any) => {
            // Implement CouchDB code here
            resolve({id: "5etr3546ug78", rev: "763574903849", name: "Widget Name"});
         });
    }
}