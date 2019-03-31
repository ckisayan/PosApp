
export class ScreenInfo {
    public ScreenName: string;
    public NavigatingFromScreen: string;
    public NextActionRequest: string;

}

export class SessionInfoModel {
    private static  LoanNumber: string;
    private static LeadNumber: string;
    private static  SessionId: string;
    static SetSessionContextToLoan(loanNumber: string) {
        this.LoanNumber = loanNumber;
        this.LeadNumber = '';

    }
    static SetSessionContextToLead(leadNumber: string) {
        this.LoanNumber = '';
        this.LeadNumber = leadNumber;
    }
    static IsLoanContext(): boolean {
        if (typeof this.LoanNumber === 'undefined' || this.LoanNumber === null || this.LoanNumber.length <= 0) {
            return false;
        } else {
            return true;
        }

    }
    static IsLeadContext(): boolean {
        if (typeof this.LeadNumber === 'undefined' || this.LeadNumber === null || this.LeadNumber.length <= 0) {
            return false;
        } else {
            return true;
        }
    }
    static SanitizeSession() {
        this.LoanNumber = '';
        this.LeadNumber = '';
    }
}
