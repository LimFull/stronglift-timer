import React, {useEffect, useRef} from "react";

type SetListProps = {
    times: String[];
};

export const SetList: React.FC<SetListProps> = ({
                                                    times = ["sdsd", "sdsd"],
                                                }) => {
    const listRef = useRef<HTMLDivElement>(null)
    const horizontalBar = () => <div className="w-full h-[1px] bg-slate-400"/>;

    useEffect(() => {
        listRef?.current?.scroll(0, listRef?.current?.scrollHeight);
    }, [JSON.stringify(times)])

    return (
        <div ref={listRef} className="flex flex-col w-full flex-1 overflow-y-scroll">
            {times.map((time, i) => {
                return (
                    <div key={i} className="flex flex-col w-full h-[calc(50px+2vmin)]  text-[calc(20px+2vmin)]">
                        <div className="flex flex-row, justify-between m-1">
                            <div className="ml-3">세트 {i + 1}</div>
                            <div className="mr-3">{time}</div>
                        </div>

                        {horizontalBar()}
                    </div>
                );
            })}
        </div>
    );
};

export default SetList;
