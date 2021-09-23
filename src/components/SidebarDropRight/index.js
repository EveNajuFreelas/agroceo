import { useState } from "react"
import { menuItems } from "../SidebarList";
import { Link } from "react-router-dom";
import {
    SidebarDropRightDiv, SidebarDropRightSectionBody, SidebarDropRightSectionParts,
    SidebarDropRightSectionTitle, SidebarDropRightSubDiv
} from "./styles";


const SidebarDropRight = ({ defaultValue, items, icon, isOpen }) => {
    return (
        <div>
            <SidebarDropRightDiv>
                <SidebarDropRightSubDiv>
                    <SidebarDropRightSectionBody>
                        <SidebarDropRightSectionTitle>
                            {defaultValue}
                        </SidebarDropRightSectionTitle>
                        {
                            items.map((item) => (
                                <Link to={item.url}>
                                    <SidebarDropRightSectionParts>
                                        {item.text}
                                    </SidebarDropRightSectionParts>
                                </Link>
                            ))
                        }
                    </SidebarDropRightSectionBody>
                </SidebarDropRightSubDiv>
            </SidebarDropRightDiv>

            {/*
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
    </SidebarDropRightDiv>*/}
        </div>
    )
}
export default SidebarDropRight;