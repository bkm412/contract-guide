import React from 'react';
import styled from 'styled-components';

export default class Code extends React.Component {

    constructor(props) {
        super(props);

        this.codeRef = React.createRef();
    }

    state = {
        result : ''
    };

    render() {
        const {title, call, code, permission, connect} = this.props;
        const {result} = this.state;
        return (
            <Wrapper>
                <Title
                    ref={this.codeRef}
                >
                    {title}
                </Title>
                <Type call={call}>
                    {call}
                </Type>
                <Method
                    dangerouslySetInnerHTML={{__html : code}}
                />

                <Permission>
                    Permission : {permission}
                </Permission>

                {
                    connect && <Example>
                        <button type="button" onClick={() => connect().then(result => this.setState({result}))}>Click for test</button>
                        <p>Result</p>
                        {
                            result && (typeof result === 'string' ? <ExampleLine>
                                    {result}
                            </ExampleLine> :
                                <ExampleLine>
                                    {"{"}
                                    {
                                        Object.keys(result).map(obj => {
                                            if(isNaN(+obj)){

                                                return (
                                                    <div className="result" key={obj}>{obj} : {Array.isArray(result[obj]) ? result[obj].map((item,index) => {
                                                        return (<span key={`${item} ${index}`}>{index !== 0 && ", "}{item}</span>)
                                                    }) : <span>{result[obj]}</span>}</div>
                                                )
                                            }
                                        })
                                    }

                                    {"}"}
                                </ExampleLine>)

                        }

                    </Example>
                }
            </Wrapper>
        )

    }
}

Code.defaultProps = {
    title : '',
    call : '',
    code : '',
    permission : '',
}

const Wrapper = styled.div`
    width: 100%;
    
`

const Title = styled.div`
    margin-top : 60px;
    font-size: 18px;
`

const Type = styled.div`
    width : 50px;
    height: 30px;
    background-color : ${({call}) => call === 'call' ? '#4070ec' : 'green'};
    color : #fff;
    font-weight: bold;
    margin-top : 20px;
    text-align: center;
    line-height: 30px;
    border-radius : 5px;
`

const Method = styled.div`
    width: 100%;
    background-color : black;
    color : #fff;
    height: 40px;
    line-height: 40px;
    text-indent : 10px;
    margin-top : 10px;
    border-radius : 5px;
    letter-spacing : 1px;
    
    span {
        color : #a7f8ff;
    }
`

const Permission = styled.div`
    color : gray;
    margin-top : 20px;
`

const Example = styled.div`
    margin-top : 20px;
    button {
        line-height: 20px;
        color: #333;
        text-align: center;
        text-shadow: 0 1px 1px rgba(255,255,255,0.75);
        width: 100px;
        height: 30px;
        border-radius : 5px;
        outline: 0;
        font-weight: bold;
        cursor : pointer;
    }
`

const ExampleLine = styled.div`
    width: 100%;
    margin-top : 5px;
    min-height: 30px;
    border-radius : 5px;
    background-color : black;
    color : #fff;
    font-weight: bold;
    padding: 10px;
    box-sizing: border-box;
    .result {
        text-indent : 10px;
    }
`

