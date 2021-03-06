import React from 'react';
import styled from 'styled-components';

export default class Code extends React.Component {

    constructor(props) {
        super(props);

        this.codeRef = React.createRef();
    }

    state = {
        result : '',
        params : {},
        pending : false
    };

    handleInputChange = (e,index) => {
        this.setState({
            params : {
                ...this.state.params,
                [index] : e.target.value
            }
        })
    };

    render() {
        const {title, call, code, permission, connect, param, returnValue} = this.props;
        const {result, params, pending} = this.state;
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
                    param && <Param>
                        <h4>Parameter</h4>
                        <table>
                            <thead>
                            <tr>
                                <th width="15%">Field</th>
                                <th width="15%">Type</th>
                                <th width="70%">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    param.map(par => {
                                        return (
                                            <tr key={par.name}>
                                                <td>{par.name}</td>
                                                <td>{par.type}</td>
                                                <td>{par.description}</td>
                                            </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                    </Param>
                }

                {
                    returnValue && <Param>
                        <h4>Response</h4>
                        <table>
                            <thead>
                            <tr>
                                <th width="15%">Field</th>
                                <th width="15%">Type</th>
                                <th width="70%">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                returnValue.map(par => {
                                    return (
                                        <tr key={par.name}>
                                            <td>{par.name}</td>
                                            <td>{par.type}</td>
                                            <td>{par.description}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </Param>
                }
                {
                    param && <Test>
                        <h4>Input parameter for test</h4>
                        {
                            param.map((obj,index) => {
                                return (
                                    <div className="inputDiv" key={obj.name}>
                                        <label>{obj.name}</label><input type="text" value={params[index] || ''} onChange={(e) => this.handleInputChange(e,index)}/>
                                    </div>
                                )
                            })
                        }
                    </Test>
                }
                {
                    connect && <Example>
                        <button type="button" onClick={() => {
                            if(param && (Object.values(params).length !== param.length)){
                                alert('입력항목을 모두 채워주세요')
                                return;
                            }
                            this.setState({
                                params : {},
                                pending : true
                            });
                            connect(params).then(result => this.setState({result, pending : false}));

                        }}>Click for test</button>
                        <p>Result :</p>
                        {
                            pending && <ExampleLine>Loading ... </ExampleLine>
                        }
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
    font-size: 22px;
    font-weight: bold;
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
    margin-top : 10px;
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

const Param = styled.div`
    width: 100%;
    margin-top : 30px;
    table {
        width: 100%;
        text-align : left;
        border: 1px solid #404040;
        border-collapse: collapse;
        
        th, td {
            border : 1px solid #404040;
            height: 30px;
            text-indent : 10px;
        }
        
        th {
            background : #eee;
        }
    }
`

const Test = styled.div`
    .inputDiv {
        height: 40px;
        label {
            width: 120px;
            display: inline-block;
        }
        input {
            width: 500px;
            height: 25px;
            border-radius: 5px;
        }
    }
`
