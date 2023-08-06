import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHomehelper.getAccountList';
import getAccounts from '@salesforce/apex/AccountHomehelper.getAccounts';
import getContacts from '@salesforce/apex/AccountHomehelper.getContacts';
import person from '@salesforce/resourceUrl/Person';
import { NavigationMixin } from 'lightning/navigation';

const DELAY = 300;
export default class AccountHome extends NavigationMixin(LightningElement) {
    accountName = ''; //Search term Variable Creation
    appResources = {
        //person: `${person}/img/standing-bear-silhouette.png`,
        person: `${person}`,
    };
    @track accountList = [];
    @track ContactList = [];
    @track error;

    @wire(getAccounts, { actName: '$accountName' })
    retrieveAccounts({ error, data }) {
        if (data)
            this.accountList = data;
        else
            this.error = error;
    }

    @wire(getContacts, { AccountId: '$accountName' })
    retrieveContacts({ error, data }) {
        if (data)
            this.ContactList = data;
        else
            //this.error = error;
            this;
    }

    handleSearchTermChange(event) {
        //this.accountName = event.target.value;--DONOT REMOVE THIS COMMENT, To Analyse the component reload
        const searchString = event.target.value;
        window.clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => {
            this.accountName = searchString;
        }, 300);
    }

    get hasResults() {
        return (this.accountList.length > 0);
    }

    navigateToRecordPage(event) {
        console.log('Navigation Page Clicked..');
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.currentTarget.dataset.accountId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}