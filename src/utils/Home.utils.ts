import {IErrors, ILifetime} from "../interface/IHome.interface";

export default function validateFields(day: string, month: string, year: string, errors: IErrors): IErrors{
    const intDay = parseInt(day);
    const intMonth = parseInt(month);
    const intYear = parseInt(year);
    const monthsWithThirtyOneDays: number[] = [1, 3, 5, 7, 8, 10, 12]

    if (isEmpty(intDay)) {
        errors.day.empty = true;
    } else if (intDay <= 0 || intDay > 31) {
        errors.day.invalid = true;
    } else if (intDay === 31 && !monthsWithThirtyOneDays.includes(intMonth)) {
        errors.day.whole = true;
    } else if ((intDay > 29 && isLeapYear(intYear)) || (intDay > 28 && intMonth === 2 && !isLeapYear(intYear))) {
        errors.day.whole = true;
    }

    if(isEmpty(intMonth)){
        errors.month.empty = true
    }else if(intMonth > 12 || intMonth <= 0){
        errors.month.invalid = true
    }

    if(isEmpty(intYear)){
        errors.year.empty = true
    }else if(intYear > new Date().getFullYear()){
        errors.year.invalid = true
    }

    return errors
}

export function calculateLifetime(day: string, month: string, year: string): ILifetime {
    const today = new Date();
    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const lastDayOfPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += lastDayOfPreviousMonth;
        months--;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}

function isEmpty(value: number | undefined) {
    return !value;
}

function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}