import {IErrors} from "../interface/IHome.interface";

export default function validateFields(errors: IErrors, day: string, month: string, year: string){
    const monthsWithThirtyOneDays: number[] = [1, 3, 5, 7, 8, 10, 12]

    if(!day){
        errors.inputs[0].empty = true
    }else if (parseInt(day) <= 0 || parseInt(day) > 31){
        errors.inputs[0].invalid = true
    }else if(parseInt(day) === 31 && !monthsWithThirtyOneDays.includes(parseInt(month))){
        errors.inputs[0].whole = true
    }else if((parseInt(day) > 29 && isLeapYear(parseInt(year)) || (parseInt(day) > 28 && parseInt(month) === 2 && !isLeapYear(parseInt(month))))){

    }
}

function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}