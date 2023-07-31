type LoadingProps = {};

const Loading = ({}: LoadingProps) => (
    <div className="relative w-6 h-6">
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_0s_infinite] rotate-0"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.8s_infinite] rotate-45"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.7s_infinite] rotate-90"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.6s_infinite] rotate-[135deg]"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.5s_infinite] rotate-180"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.4s_infinite] rotate-[225deg]"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.3s_infinite] rotate-[270deg]"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.2s_infinite] rotate-[315deg]"></div>
        <div className="relative origin-[0.75rem_0.75rem] after:absolute after:top-0 after:left-1/2 after:w-0.5 after:h-1.5 after:-translate-x-1/2 after:bg-color-2 after:rounded-sm animate-[fadeDown_0.9s_-0.1s_infinite] rotate-[360deg]"></div>
    </div>
);

export default Loading;
