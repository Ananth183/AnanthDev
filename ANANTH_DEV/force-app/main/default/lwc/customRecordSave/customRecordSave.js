import { LightningElement, track, wire } from 'lwc';
import sobjectRecordSave from '@salesforce/apex/CustomRecordSaveController.sobjectRecordSave';
import getAllObjects from '@salesforce/apex/getSObjects.getAllObjects';
import getReqFields from '@salesforce/apex/getRequiredFields.getReqFields';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CustomRecordSave extends LightningElement {
    @track objectApiName;
    @track fieldApi1;
    @track fieldApi2;
    @track fieldApi3;
    @track fieldApi4;
    @track fieldApi5;
    @track fieldValue1;
    @track fieldValue2;
    @track fieldValue3;
    @track fieldValue4;
    @track fieldValue5;
    @track isLoadingSpinner = false;
    selectedObject;

    objects =[];
    requiredFields =[];
    error;
 
    

    @wire(getAllObjects,{})
    objectsData({error,data}){
        if(data){
            this.objects=this.createOptions(data);
        }else if(error){
            console.log('Error..',error);
        }
    }

    @wire(getReqFields,{objectName:'$selectedObject'})
    reqFieldsData({error,data}){
        if(data){
            this.requiredFields=this.createReqFields(data);
            console.log('Required fields..get fields.',data);
            console.log('Required fields..after formatting.',this.requiredFields);
        }else if(error){
            console.log('Error..',error);
        }
    }
   

    createReqFields(data){
        let options=[];
        for (let i=0;i<data.length;i++){
            if(i===0){
                this.fieldApi1=data[0];
            }else if(i===1){
                this.fieldApi2=data[1];
            }
            else if(i===2){
                this.fieldApi3=data[2];
            }else{
                console.log('else..');
            }
            //this.fieldApi[i]=data[i];
            let recordJSON={
                label:data[i],
                value:data[i]
            }
            options.push(recordJSON);
        }
        return options;
    }
    createOptions(data){
        let options=[];
        for (let i=0;i<data.length;i++){
            let recordJSON={
                label:data[i],
                value:data[i]
            }
            options.push(recordJSON);
        }
        return options;
    }


    objectSelection(event) {
        console.log(event.detail.value);
        this.selectedObject = event.detail.value;
        //const objectName=event.detail.value;
        
    }

    handleRecordSave() {
        this.isLoadingSpinner = true;
        //const iterator1 = this.fieldMap.values();
        //alert('Hello');
        var inp = this.template.querySelectorAll("lightning-input");
        console.log('inp===>', inp);
        inp.forEach(function (element) {
            if (element.name == "objectApiName")
                //this.objectApiName=element.value;
                this.objectApiName = this.selectedObject;
            else if (element.name == "fieldApi1")
                this.fieldApi1 = element.value;
            else if (element.name == "fieldApi2")
                this.fieldApi2 = element.value;
            else if (element.name == "fieldApi3")
                this.fieldApi3 = element.value;
            else if (element.name == "fieldApi4")
                this.fieldApi4 = element.value;
            else if (element.name == "fieldApi5")
                this.fieldApi5 = element.value;
            else if (element.name == "fieldValue1")
                this.fieldValue1 = element.value;
            else if (element.name == "fieldValue2")
                this.fieldValue2 = element.value;
            else if (element.name == "fieldValue3")
                this.fieldValue3 = element.value;
            else if (element.name == "fieldValue4")
                this.fieldValue4 = element.value;
            else if (element.name == "fieldValue5")
                this.fieldValue5 = element.value;
        }, this);
        console.log('objectApiName==>', this.objectApiName);
        console.log('fieldApi1==>', this.fieldApi1);
        console.log('fieldApi2==>', this.fieldApi2);
        console.log('fieldApi3==>', this.fieldApi3);
        console.log('fieldApi4==>', this.fieldApi4);
        console.log('fieldApi5==>', this.fieldApi5);
        console.log('fieldValue1==>', this.fieldValue1);
        console.log('fieldValue2==>', this.fieldValue2);
        console.log('fieldValue3==>', this.fieldValue3);
        console.log('fieldValue4==>', this.fieldValue4);
        console.log('fieldValue5==>', this.fieldValue5);
        sobjectRecordSave({
            "objectApiName": this.objectApiName,
            "fieldApi1": this.fieldApi1,
            "fieldApi2": this.fieldApi2,
            "fieldApi3": this.fieldApi3,
            "fieldApi4": this.fieldApi4,
            "fieldApi5": this.fieldApi5,
            "fieldValue1": this.fieldValue1,
            "fieldValue2": this.fieldValue2,
            "fieldValue3": this.fieldValue3,
            "fieldValue4": this.fieldValue4,
            "fieldValue5": this.fieldValue5
        })
            .then(result => {
                this.isLoadingSpinner = false;
                //this.contacts = result;
                console.log('Success');
                const event = new ShowToastEvent({
                    title: 'Success',
                    message: this.objectApiName + ' Record Save Successfully',
                    variant: 'success',
                    mode: 'dismissable'
                });
                this.dispatchEvent(event);
                this.handleCancel();
            })
            .catch(error => {
                console.log('error is >> ' + JSON.stringify(error));
                console.log('error is only');
                this.isLoadingSpinner = false;
                this.error = error.body.message;
                const event = new ShowToastEvent({
                    title: 'Error',
                    message: this.error,
                    variant: 'error',
                    mode: 'dismissable'
                });
                this.dispatchEvent(event);
            })
    }

    handleCancel() {
        eval("$A.get('e.force:refreshView').fire();");
    }

}