import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import Code from '../components/code';
import list from '../assets/js/apiList';
import LeftNavigation from '../components/leftNavigation';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.menu = {};
    }

    state = {
        select : ''
    };

    moveMenu = (ref) => {
        const location = this.menu[ref].offsetTop || this.menu[ref].codeRef.current.offsetTop;
        window.scroll({top : location - 20, left : 0, behavior: 'smooth'})
    };

    render() {
        return (
            <Wrapper>
                <LeftNavigation
                    moveMenu={this.moveMenu}
                />
                <div>
                    <h1>Smart Contract guide</h1>
                    <h3>How to use factory smart contract.</h3>
                </div>
                {
                    list.map(label => {
                        return (
                            <Content key={label.name}


                            >
                                <h1 className="label"
                                    tabIndex="0"
                                    ref={ref => this.menu[label.name] = ref}
                                >{label.name}</h1>
                                {
                                    label.contents.map(obj => {
                                        return (
                                            <Code
                                                ref={ref => this.menu[obj.title] = ref}
                                                key={obj.title}
                                                title={obj.title}
                                                call={obj.call}
                                                code={obj.code}
                                                permission={obj.permission}
                                                connect={obj.connect}
                                            />
                                        )
                                    })
                                }
                            </Content>
                        )
                    })
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    margin-left : 270px;
    width: 1000px;
    padding: 20px;
`

const Content = styled.div`

    margin-top : 50px;
`
