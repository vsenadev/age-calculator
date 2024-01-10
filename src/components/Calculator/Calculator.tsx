import {useContext} from "react";
import {GlobalContext} from "../../store/GlobalState";

export default function Calculator(){
    const { result, setResult }: any = useContext(GlobalContext);

    return (
        <div>
            <div>
                <span>{ !result.years ? '- -' : result.years }</span>
                <span>years</span>
            </div>
            <div>
                <span>{!result.month ? '- -' : result.month}</span>
                <span>months</span>
            </div>
            <div>
                <span>{!result.days ? '- -' : result.days}</span>
                <span>days</span>
            </div>
        </div>
    )
}