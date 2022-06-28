

export interface TimeFrameObj {
    data: TimeFrame[];
}

export interface TimeFrame {
    id: number;
    title: string;
    limit: number;
    limit_display: number;
    limit_delete: number;
    display_date: boolean;
    display_time: boolean;
    order_limits: number;
}
