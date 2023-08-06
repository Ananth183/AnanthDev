public class SendEmail {
    public static void sendEmailtoUsers(){
        list<Messaging.SingleEmailMessage> mlist =new List<Messaging.SingleEmailMessage>(); 
        String [] Addresses=new String[0]; 
        
        String [] CCAddresses=new String[0];
        Messaging.SingleEmailMessage email=new Messaging.SingleEmailMessage();
        addresses.add('ananth12731@gmail.com');
        CCAddresses.add('ananth12731@gmail.com');
        email.SetToaddresses(addresses);
        email.setCcAddresses(CCAddresses);
        
        
        email.setSubject('Quote From Cloudwaale');
		email.setPlainTextBody('Please find attached quotation');
        
        
        Messaging.SendEmailResult [] result=Messaging.sendEmail(mlist);
        
        system.debug('result'+result);

    }
}