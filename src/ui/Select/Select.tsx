import React, {FC, useState} from 'react';
import {SelectStyled, Dropdown} from "./Select.styled";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ISelect {
    title: string,
    options: string[],
    dropdownIsVisible: boolean,
    setDropdownIsVisible: (isVisible: boolean) => void,
    onClickBefore?: () => void,
    onChoice: (value: string) => void
}

const Select: FC<ISelect> = ({
                                 title,
                                 options,
                                 dropdownIsVisible,
                                 setDropdownIsVisible,
                                 onClickBefore,
                                 onChoice
                             }) => {

    return (
        <SelectStyled
            onClick={() => {
                onClickBefore?.()
                setDropdownIsVisible(!dropdownIsVisible)
            }}
        >
            <p>{title}</p>
            <ArrowDropDownIcon/>
            <Dropdown
                $showDropdown={dropdownIsVisible}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                {options.map(opt =>
                    <p
                        key={opt}
                        onClick={() => {
                            onChoice(opt)
                            onClickBefore?.()
                        }}
                    >
                        {opt}
                    </p>)}
            </Dropdown>
        </SelectStyled>
    );
};

export default Select;