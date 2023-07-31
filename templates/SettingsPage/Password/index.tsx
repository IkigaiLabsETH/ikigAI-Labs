import { useState } from "react";
import Field from "@/components/Field";
import Icon from "@/components/Icon";

type PasswordProps = {};

const Password = ({}: PasswordProps) => {
    const [oldPassword, setOldPassword] = useState<string>("123456789101");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    return (
        <form className="" action="" onSubmit={() => console.log("Submit")}>
            <div className="mb-12 text-h3 lg:mb-8">Password</div>
            <Field
                className="mb-10 lg:mb-8"
                label="Password"
                placeholder="Password"
                type="password"
                icon="lock-1"
                value={oldPassword}
                onChange={(e: any) => setOldPassword(e.target.value)}
                required
            />
            <Field
                className="mb-10 lg:mb-8"
                label="New password"
                placeholder="New password"
                note="Minimum 12 characters"
                type="password"
                icon="lock-1"
                value={newPassword}
                onChange={(e: any) => setNewPassword(e.target.value)}
                required
            />
            <Field
                className="mb-10 lg:mb-8"
                label="Confirm new password"
                placeholder="Confirm new password"
                note="Minimum 12 characters"
                type="password"
                icon="lock-1"
                value={confirmPassword}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
                required
            />
            <div className="flex">
                <button className="btn-gradient md:grow" type="submit">
                    <span>Save change</span>
                    <Icon name="check" />
                </button>
                <button className="btn-stroke ml-3" type="button">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default Password;
