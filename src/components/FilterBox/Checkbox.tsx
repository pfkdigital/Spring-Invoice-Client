import Image from "next/image";
import checkIcon from "@/../public/assets/icon-check.svg"

type CheckboxTypes = {
    checked: boolean,
    handleClick: () => void
}

const Checkbox = ({checked, handleClick}: CheckboxTypes) => {
    return (
        <div
            className={`w-4 h-4 flex justify-center items-center rounded-sm ${checked ? "bg-purple" : "bg-dark-navy"} hover:border-purple z-20`}
            onClick={handleClick}>
            {checked && <Image src={checkIcon} alt={"Checked icon"}/>}
        </div>
    );
};

export default Checkbox;