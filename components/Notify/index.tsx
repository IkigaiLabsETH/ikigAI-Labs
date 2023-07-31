import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type NotifyProps = {
    className?: string;
    iconCheck?: boolean;
    iconDelete?: boolean;
    children: React.ReactNode;
};

const Notify = ({
    className,
    iconCheck,
    iconDelete,
    children,
}: NotifyProps) => (
    <div
        className={twMerge(
            `flex items-center p-4 rounded-full shadow-modal bg-n-7 text-n-1 md:-mb-5 ${
                className || ""
            }`
        )}
    >
        {iconCheck && (
            <div className="shrink-0">
                <Icon className="w-8 h-8 fill-color-3" name="check-circle" />
            </div>
        )}
        {iconDelete && (
            <div className="flex justify-center items-center shrink-0 w-8 h-8 rounded-full bg-color-5">
                <Icon className="fill-n-1" name="trash" />
            </div>
        )}
        {children}
    </div>
);

export default Notify;
