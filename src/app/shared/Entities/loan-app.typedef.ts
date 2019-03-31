export class BorrowerInfoModel {
    BorFirstName: string;
    BorMiddleName: string;
    BorNameSuffix: string;
    BorLastName: string;
    BorEmailId: string;
    BorPrimaryPhoneNumber: string;
    BorRentOwn: string;
    BorMailingAddrIsSameAsPrimaryAddr = false;
    ApplyingWithSpouse = '';
    ServedInMilitary = '';
    BorMaritalStatus = '';
}

export class AddressModel {
    StreetAddr1: string;
    StreetAddr2: string;
    City: string;
    State: string;
    ZipCode: string;
}

export class BorAddressModel {
    BorAddress: AddressModel;
    YearsAtAddress: number;
    MailingAddrIsSameAsPrimaryAddr = false;
}

export class SubjectPropertyModel {
    SubjPropertyToBeDetermined: boolean;
    Address: AddressModel;
    NumberOfUnits: number;
    PropertyType: string;
    OccupancyType: string;
}
export class LoanDetailModel {
    CreditScore: string;
    IntRatePct: number;
    PurchasePriceAmt: number;
    LoanAmt: number;
    DownPmtPct: number;
    DownPmtAmt: number;
    AmortTermMonths: number;
    MaturityTermMonths: number;
    ImpoundsFlag: string;
    MortgageInsruanceType: string;
    VestingType: string;
    ManerTitleHeldType: string;
    EstateHeldType: string;


}
export class LoanAssignmentModel {
    LoanBranchId: string;
    LoanMloId: string;
}

export class OrderViewCreditModel {
    ConsentForPrimaryBorrwerFlag: boolean;
    ConsentForSpouseFlag: boolean;
    TypeOfCreditReport: string;
}
export class CreditReportDataModel {
    CreditReportDate: string;
    CreditReportIdentifier: string;
    ApplicaitonIdentifier: string;
  }
