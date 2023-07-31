import Icon from "@/components/Icon";
import Member from "./Member";

import { members } from "@/mocks/members";

type TeamProps = {};

const Team = ({}: TeamProps) => (
    <>
        <div className="flex items-center mb-12 pb-12 border-b border-n-3 lg:mb-8 lg:pb-8 md:block dark:border-n-5">
            <div className="mr-auto text-h3 md:mr-0 md:mb-4">Members</div>
            <button className="btn-gradient md:w-full">
                <span>Invite member</span>
                <Icon name="plus" />
            </button>
        </div>
        <div className="flex items-center mb-12 p-3 rounded-lg bg-color-2/10 text-base-1 font-semibold lg:mb-8">
            <Icon
                className="shrink-0 w-6 h-6 mr-7 dark:fill-n-2"
                name="info-circle-thin"
            />
            You logged in to two devices using two different web browsers.
        </div>
        <div className="">
            {members.map((member) => (
                <Member item={member} key={member.id} />
            ))}
        </div>
    </>
);

export default Team;
