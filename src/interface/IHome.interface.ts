export interface IErrors {
    day: {
            whole: boolean | undefined,
            invalid: boolean | undefined,
            empty: boolean | undefined,
    };
    month: {
            invalid: boolean | undefined,
            empty: boolean | undefined,
    };
    year: {
            invalid: boolean | undefined,
            empty: boolean | undefined,
    };
}

export interface ILifetime {
    days: number;
    months: number;
    years: number;
}