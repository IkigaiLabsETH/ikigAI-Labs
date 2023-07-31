import { useState } from "react";
import Field from "@/components/Field";
import Icon from "@/components/Icon";

type DeleteAccountProps = {};

const DeleteAccount = ({}: DeleteAccountProps) => {
    const [password, setPassword] = useState<string>("123456789123");

    return (
        <form className="" action="" onSubmit={() => console.log("Submit")}>
            <div className="mb-12 pb-12 border-b border-n-3 text-h3 lg:mb-8 lg:pb-8 dark:border-n-5">
                We’re sorry to see you go
            </div>
            <div className="mb-12 text-base-1 text-n-4 lg:mb-8">
                Warning: Deleting your account will permanently remove all of
                your data and cannot be undone. This includes your profile,
                conversations, comments, and any other information associated
                with your account. Are you sure you want to proceed with
                deleting your account?
            </div>
            <Field
                className="mb-8"
                label="Your password"
                note="Minimum 12 characters"
                placeholder="Password"
                type="password"
                icon="lock-1"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
            />
            <div className="flex">
                <button className="btn-red md:grow">
                    <span>Delete my account</span>
                    <Icon name="trash-1" />
                </button>
                <button className="btn-stroke ml-3">Cancel</button>
            </div>
        </form>
    );
};

export default DeleteAccount;
