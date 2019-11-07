export interface iElapsed
{
    days : number,
    hours : number,
    minutes: number,
    seconds: number
}

export class TimeHelpers
{
    static getElapsed(fromDate : Date, localDate : Date) : iElapsed
    {
        let elapsed : iElapsed = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        
        const fromUTCOffset = fromDate.getTimezoneOffset() * 60000;
        const fromUTC : Date = new Date(fromDate.getTime() - fromUTCOffset);
    
        //convert localDate to UTC
        const nowUTCOffset = localDate.getTimezoneOffset() * 60000;
        const nowUTC : Date = new Date(localDate.getTime() - nowUTCOffset);
    
        let diffMillis = Math.round(localDate.getTime() - fromDate.getTime());

        
        elapsed.days = Math.floor(diffMillis / 86400000);
        diffMillis -= elapsed.days * 86400000;
        elapsed.hours = Math.floor(diffMillis / 3600000);
        diffMillis -= elapsed.hours * 3600000;
        elapsed.minutes = Math.floor(diffMillis / 60000);
        diffMillis -= elapsed.minutes * 60000;
        elapsed.seconds = Math.floor(diffMillis / 1000);
      
        return elapsed
    }

}
