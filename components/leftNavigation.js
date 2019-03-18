import React from 'react';
import list from '../assets/js/apiList';
import styled from 'styled-components';

export default class LeftNavigation extends React.Component {

    state = {
        selectedTab : '',
        selectedMenu : '',
    };

    render() {
        const {moveMenu} = this.props;
        const {selectedTab, selectedMenu} = this.state;
        return(
            <Wrapper>
                <h3>Menu</h3>
                {
                    list.map((label,index) => {
                        return(
                            <div key={label.name}>
                            <LabelSelect
                                selected={selectedMenu === label.name}
                                onClick={() => {
                                    moveMenu(label.name);
                                    this.setState({
                                        selectedTab : label.name,
                                        selectedMenu : label.name
                                    });
                                }}
                            >
                                {label.name}
                            </LabelSelect>
                                { label.name === selectedTab &&
                                    label.contents.map(item => {
                                        return(
                                            <SubMenu
                                                key={item.title}
                                                selected={selectedMenu === item.title}
                                                onClick={() => {
                                                    moveMenu(item.title);
                                                    this.setState({
                                                        selectedMenu : item.title
                                                    })
                                                }}
                                            >
                                                {item.title}
                                            </SubMenu>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    left: 0;
    top: 0;
    position : fixed;
    width: 230px;
    padding: 20px;
    background-color : #eee;
    height: 100%;
`


const LabelSelect = styled.div`
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-indent : 10px;
    margin-bottom : 15px;
    background-color : ${({selected}) => selected ? '#3c92ca' : '#fff'};
    color : ${({selected}) => selected ? '#fff' : '#3c92ca'};
    font-weight: bold;
    cursor : pointer;
`


const SubMenu = styled.div`
    height: 25px;
    font-size: 15px;
    line-height: 25px;
    margin-bottom : 10px;
    color : ${({selected}) => selected ? '#fff' : '#3c92ca'};
    background-color : ${({selected}) => selected ? '#3c92ca' : '#eee'};
    text-indent : 15px;
    cursor : pointer;
`
