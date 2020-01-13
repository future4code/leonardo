import { Picture } from "./Picture";
import { Frame } from "./Frame";

export class Order {
  private picture: Picture  
  private frame: Frame 
  
  constructor(
        private id: string,
        private clientName: string,
        private clientEmail: string,
        private date: Date,
        private paymentMethod: string
      ) {}
      
      public getPicturePrice() {
        return this.picture.getTotalPrice
      }

      public getFramePrice() {
        return this.frame.getTotalPrice
      }

}