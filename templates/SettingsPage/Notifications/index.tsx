import { useState } from "react";
import Switch from "@/components/Switch";
import Checkbox from "@/components/Checkbox";
import Icon from "@/components/Icon";

type NotificationsProps = {};

const Notifications = ({}: NotificationsProps) => {
    const [notifications, setNotifications] = useState<boolean>(true);

    const [checkboxes, setCheckboxes] = useState([
        {
            id: "0",
            title: "UI8 Platform",
            checkboxs: [
                { id: "0", title: "New notifications", isChecked: false },
                {
                    id: "1",
                    title: "Someone invite you to new chat",
                    isChecked: true,
                },
                { id: "2", title: "Mentioned", isChecked: false },
                { id: "3", title: "New messages from bots", isChecked: false },
            ],
        },
        {
            id: "1",
            title: "From team",
            checkboxs: [
                { id: "0", title: "New notifications", isChecked: false },
                {
                    id: "1",
                    title: "Someone invite you to new chat",
                    isChecked: false,
                },
                { id: "2", title: "Mentioned", isChecked: true },
            ],
        },
        {
            id: "2",
            title: "From Synapse",
            checkboxs: [{ id: "0", title: "Mentioned", isChecked: true }],
        },
    ]);

    const handleCheckboxChange = (groupId: string, checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const groupIndex = updatedCheckboxes.findIndex(
            (group) => group.id === groupId
        );
        const checkboxIndex = updatedCheckboxes[groupIndex].checkboxs.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[groupIndex].checkboxs[checkboxIndex].isChecked =
            !updatedCheckboxes[groupIndex].checkboxs[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleNotificationsChange = (value: boolean) => {
        setNotifications(value);
        const updatedCheckboxes = [...checkboxes];
        for (let group of updatedCheckboxes) {
            for (let checkbox of group.checkboxs) {
                checkbox.isChecked = value;
            }
        }
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <form className="" action="" onSubmit={() => console.log("Submit")}>
            <div className="flex items-center mb-8">
                <div className="mr-auto text-h3">Notifications</div>
                <Switch
                    value={notifications}
                    setValue={handleNotificationsChange}
                />
            </div>
            <div>
                {checkboxes.map((group) => (
                    <div
                        className="mt-12 pt-6 border-t border-n-3 lg:mt-8 dark:border-n-5"
                        key={group.id}
                    >
                        <div className="mb-5 text-h5">{group.title}</div>
                        {group.checkboxs.map((checkbox) => (
                            <Checkbox
                                className="mb-5 last:mb-0"
                                label={checkbox.title}
                                key={checkbox.id}
                                value={checkbox.isChecked}
                                onChange={() =>
                                    handleCheckboxChange(group.id, checkbox.id)
                                }
                                reverse
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex mt-18 lg:mt-12 md:mt-8">
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

export default Notifications;
