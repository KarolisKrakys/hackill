

export default function CalculatTime(time_start: number, time_end:number): string {
    let start_time: Date = new Date(0);
    start_time.setUTCSeconds(time_start);
    let end_time: Date = new Date(0);
    end_time.setUTCSeconds(time_end);
    return (start_time.toLocaleDateString()+ " from "+start_time.toLocaleTimeString() + " to " + end_time.toLocaleTimeString());
}