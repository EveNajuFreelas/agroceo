import { useState } from "react"
import { menuItems } from "../SidebarList";
import { Link } from "react-router-dom";
import {
    SidebarDropRightDiv,
    SidebarDropRightSectionTitle,
    SidebarDropRightSectionParts,
    SidebarDropRightSectionBody
} from "./styles";


export const SidebarDropRight = ({ defaultValue, items, icon, isOpen }) => {
    return (
        <div>
            <SidebarDropRightDiv isOpen={isOpen}>
                <SidebarDropRightSectionTitle> {defaultValue} </SidebarDropRightSectionTitle>
                {
                    items.map((item) => (
                        <SidebarDropRightSectionBody>
                            <Link to={item.url}>
                                <SidebarDropRightSectionParts>
                                    {item.text}
                                </SidebarDropRightSectionParts>
                            </Link>
                        </SidebarDropRightSectionBody>
                    ))
                }
            </SidebarDropRightDiv>
        </div>
    )
}
export default SidebarDropRight;