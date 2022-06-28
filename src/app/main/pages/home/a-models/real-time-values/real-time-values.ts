/*  */
/*  */
/*  */


export class RealTimeValuesObj {
    title: string;
    dataArr: AvgData[];

     constructor(title: string, dataArr: AvgData[]) {
        this.title = title
        this.dataArr = dataArr
    } 
}


/*  */
export class AvgData {
    min: number;
    value: number;
    max: number;
    unit: string;
    title: string;
    type: string;

    constructor(
        min: number,
        value: number,
        max: number,
        unit: string,
        title: string,
        type: string
    ) {
        this.min = min
        this.value = value
        this.max = max
        this.unit = unit
        this.title = title
        this.type = type
    }
}
/*  */
/*  */
