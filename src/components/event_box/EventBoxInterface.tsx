interface EventInfo{
    id:string,
    name:string,
    description:string,
    startTime?:number,
    endTime?:number,
    locations: [string, string[], number, number]
    sponsor: string,
    eventType: string,
    isAsync?: boolean
}

export default EventInfo