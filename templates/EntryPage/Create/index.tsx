import { useState } from "react";
import Field from "@/components/Field";

type CreateProps = {};

const Create = ({}: CreateProps) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <form action="" onSubmit={() => console.log("Submit")}>
            <Field
                className="mb-3.5"
                label="Email"
                placeholder="Enter email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
            />
            <Field
                className="mb-8"
                label="Password"
                note="At least 12 characters"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
            />
            <button className="btn-gradient w-full" type="submit">
                Join Synapse
            </button>
            <div className="mt-4 text-center text-small text-n-4">
                By creating an account, you agree to our Terms of Service and
                Privacy & Cookie Statement.
            </div>
        </form>
    );
};

export default Create;
