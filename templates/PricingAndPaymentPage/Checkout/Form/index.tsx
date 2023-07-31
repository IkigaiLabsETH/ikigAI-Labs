import { useState } from "react";
import InputMask from "react-input-mask";
import Icon from "@/components/Icon";
import RadioGroup from "./RadioGroup";
import Foot from "./Foot";

const plans = [
    {
        id: "0",
        title: "monthly",
        value: 29,
    },
    {
        id: "1",
        title: "yearly",
        value: 300,
        save: 20,
    },
];

type FormProps = {};

const Form = ({}: FormProps) => {
    const [plan, setPlan] = useState<any>(plans[0]);
    const [email, setEmail] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<any>({
        value: "",
        mask: "9999-9999-9999-9999",
    });
    const [date, setDate] = useState<string>("");
    const [code, setCode] = useState<string>("");

    const onChange = (e: any) => {
        if (e.target && e.target.value && setCardNumber) {
            let value = e.target.value;
            let newState = {
                mask: "9999-9999-9999-9999",
                value: value,
            };
            if (/^3[47]/.test(value)) {
                newState.mask = "9999-999999-99999";
            }
            setCardNumber(newState);
        }
    };

    const styleInput =
        "w-full h-6 border-none bg-transparent text-base-1 outline-none placeholder:text-n-4";

    return (
        <form
            className="flex flex-col grow"
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <div className="mb-3 p-5 rounded-2xl bg-primary-7">
                <div className="mb-1 text-h2 text-primary-3">Pro</div>
                <div className="text-body-1 dark:text-n-7">
                    $20.00/month/1 team member
                </div>
            </div>
            <RadioGroup items={plans} value={plan} setValue={setPlan} />
            <div className="mb-3 border border-n-3 rounded-xl dark:border-n-5">
                <div className="p-5">
                    <div className="mb-3 text-base-2 text-n-5 dark:text-n-3">
                        Billing email
                    </div>
                    <div className="relative">
                        <Icon
                            className="absolute top-0 left-0 w-6 h-6 pointer-events-none fill-n-4"
                            name="email"
                        />
                        <input
                            className={`${styleInput} pl-11`}
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="p-5 border-t border-n-3 dark:border-n-5">
                    <div className="mb-3 text-base-2 text-n-5 dark:text-n-3">
                        Card details
                    </div>
                    <div className="flex md:flex-wrap">
                        <div className="relative grow md:w-full md:mb-4">
                            <Icon
                                className="absolute top-0 left-0 w-6 h-6 pointer-events-none fill-n-4"
                                name="credit-card"
                            />
                            <InputMask
                                className={`${styleInput} pl-11`}
                                {...cardNumber}
                                type="tel"
                                onChange={onChange}
                                placeholder="Card number"
                                required
                            />
                        </div>
                        <div className="shrink-0 w-20 mx-8 md:ml-0 md:mr-auto">
                            <InputMask
                                className={`${styleInput} text-center md:text-left`}
                                mask="99 / 99"
                                placeholder="MM / YY"
                                type="tel"
                                value={date}
                                onChange={(e: any) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="shrink-0 w-10">
                            <InputMask
                                className={`${styleInput} text-center`}
                                mask="999"
                                placeholder="CVC"
                                type="tel"
                                value={code}
                                onChange={(e: any) => setCode(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center mb-8 text-small text-n-4">
                <Icon className="w-4 h-4 mr-2 fill-color-3" name="lock" />
                Secured form with UI8 Banking
            </div>
            <Foot />
        </form>
    );
};

export default Form;
