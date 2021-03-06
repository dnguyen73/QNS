import { Stock } from "./stock";
import { SelectColor } from "./selectcolor";
import { FileObject } from "./fileobject";

export class Product {
    id: string;     //unique string generated by LB
    productCode: string //unique 6-digit id generated by A..Z0..9
    parentId: number; //Category code
    productName: string;
    description: string;
    price: number;
    availableSizes: string[];
    availableColors: SelectColor[];
    images: FileObject[];
    stocks: Stock[];
    totalQuantity: number;
    isOnSale: boolean;
    discount: number;
    createdDate: Date;
    originalVendor: string;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
