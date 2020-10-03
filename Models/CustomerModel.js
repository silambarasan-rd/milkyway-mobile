interface CustomerModel {
  id: number;
  customerName: string;
  customerMobile?: any;
  customerAddress?: any;
  customerConsumeQuantity: number;
  customerConsumeUnit: string;
  customerPaymentTerm: number;
  customerAddedDate: string;
  customerLastPaid?: any;
  customerStatus: number;
}
