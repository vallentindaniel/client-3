

export class RealTimeValuesChartObj {

    chartDataArr: chartDataArr[];
    constructor(chartDataArr: chartDataArr[]) {
        this.chartDataArr = chartDataArr
    }

}


export class chartDataArr {
    title: string;
    category: string;
    dataset: any;
    labelData: any;

    constructor(
        title: string,
        category: string,
        dataset: any,
        labelData: any,
    ) {
        this.title = title
        this.category = category
        this.dataset = dataset
        this.labelData = labelData
    }

}




export class ChartType {

    data: chartInfo[];
    constructor(data: chartInfo[]) {
        this.data = data
    }

}


export class chartInfo {
    id: number;
    title: string;
    type: string;

    constructor(
        id: number,
        title: string,
        type: string

    ) {
        this.id = id
        this.title = title
        this.type = type
    }

}
