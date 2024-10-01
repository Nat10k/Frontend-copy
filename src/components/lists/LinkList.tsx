import React, { FC } from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LinkListProps } from '../interface/AllInterfaceAndTypes';

const LinkList: FC<LinkListProps> = ({ links }) => {
    return (
        <div className="flex flex-col w-full">
            {links.map((item, i) => {
                return (
                    <a href={item.url} key={i} className="flex flex-row items-center pb-6 sm:pb-7">
                        <ArrowForwardIosIcon fontSize="large" sx={{ color: "#1C1B1F" }} />
                        <h2 className="text-lg md:text-3xl font-semibold">
                            {item.name}
                        </h2>
                    </a>
                )
            })}
            
        </div>
    )
}

export default LinkList
