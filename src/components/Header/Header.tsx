import React, {useCallback, useState} from 'react';
import {HeaderStyled, Container, Filters} from "./Header.styled";
import MenuBtn from "../../ui/MenuBtn/MenuBtn";
import Select from "../../ui/Select/Select";
import {genres, platforms, sortBy} from "../../types/types"
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/store";
import {setGenre, setPlatform, setSortBy} from "../../store/FiltersStore";

const Header = () => {

    const [platformsAreVisible, setPlatformsAreVisible] = useState(false)
    const [genresAreVisible, setGenresAreVisible] = useState(false)
    const [sortIsVisible, setSortIsVisible] = useState(false)

    const onClickBefore = useCallback(() => {
        setPlatformsAreVisible(false)
        setGenresAreVisible(false)
        setSortIsVisible(false)
    }, [])

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    return (
        <HeaderStyled>
            <Container>
                <img
                    src={require('../../images/freetogame-logo.png')}
                    onClick={() => {
                        navigate('/')
                    }}
                />
                <Filters>
                    <Select
                        title={"platform"}
                        options={platforms}
                        dropdownIsVisible={platformsAreVisible}
                        setDropdownIsVisible={setPlatformsAreVisible}
                        onClickBefore={() => {
                            onClickBefore()
                        }}
                        onChoice={value => {
                            dispatch(setPlatform(value))
                        }}
                    />
                    <Select
                        title={"genre"}
                        options={genres}
                        dropdownIsVisible={genresAreVisible}
                        setDropdownIsVisible={setGenresAreVisible}
                        onClickBefore={() => {
                            onClickBefore()
                        }}
                        onChoice={value => {
                            dispatch(setGenre(value))
                        }}
                    />
                    <Select
                        title={"Сортировать по"}
                        options={sortBy}
                        dropdownIsVisible={sortIsVisible}
                        setDropdownIsVisible={setSortIsVisible}
                        onClickBefore={() => {
                            onClickBefore()
                        }}
                        onChoice={value => {
                            dispatch(setSortBy(value))
                        }}
                    />
                </Filters>
            </Container>
            <Container>
                <MenuBtn/>
            </Container>

        </HeaderStyled>
    );
};

export default Header;