import Code from "../../pages";
import React from "react";
import { getFactoryID, getFactoryInfo, getChimneyInfo, getRecordData } from './web3';


const list = [
    {
        name : "Contract",
        contents : [
            {
                title :"Create New Web3 Object",
                call : "Func",
                code : "const web3Object = new Web3(window.web3.currentProvider);",
                permission :"-"
            },
            {
                title :"Create New Contract Object",
                call : "Func",
                code : "const Contract = new web3Object.eth.Contract(<span>*abi</span>, <span>*contractAddress</span>);",
                permission :"-"
            },
        ]
    },
    {
        name : "Factory",
        contents : [
            {
                title :"Get Factory ID",
                call : "call",
                code : "Contract.methods.GetFactoryId().call({ from : <span>*accountAddress</span> })",
                permission :"All",
                connect : getFactoryID,
                returnValue : [
                    {
                        name : "null",
                        type : "number",
                        description: "Id of factory owned by Address called this function"
                    }
                ]
            },
            {
                title :"Get Factory Info",
                call : "call",
                code : "Contract.methods.GetFactoryInfo(<span>*factoryId</span>).call({ from : <span>*accountAddress</span> })",
                permission :"All",
                connect : getFactoryInfo,
                param : [
                    {
                        name : 'factoryId',
                        type : 'number',
                        description : 'The ID of the factory you want to check.'
                    }
                ],
                returnValue : [
                    {
                        name : "name",
                        type : "string",
                        description: "Name of factory"
                    },
                    {
                        name : "location",
                        type : "string",
                        description: "Location of factory"
                    },
                    {
                        name : "detail",
                        type : "string",
                        description: "Detail of factory"
                    },
                    {
                        name : "chimneyN",
                        type : "number",
                        description: "The number of chimneys the factory has."
                    },
                    {
                        name : "chimneyIds",
                        type : "array",
                        description: "The arrangement of the code of a chimney that factory."
                    },
                ]
            },
            {
                title :"Add Factory",
                call : "send",
                code : "Contract.methods.AddFactory(<span>*factoryAddress</span>, <span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Contract",
                param : [
                    {
                        name : 'factoryAddress',
                        type : 'string',
                        description : 'The Ethereum wallet address of the person who owns the factory.'
                    },
                    {
                        name : 'name',
                        type : 'string',
                        description : 'The name of the factory'
                    },
                    {
                        name : 'location',
                        type : 'string',
                        description : 'The location of the factory'
                    },
                    {
                        name : 'detail',
                        type : 'string',
                        description : 'The ID of the factory'
                    },
                ],
            },
            {
                title :"Edit Factory Info",
                call : "send",
                code : "Contract.methods.EditFactoryInfo(<span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory",
                param : [
                    {
                        name : 'name',
                        type : 'string',
                        description : 'The name of the factory you want to change'
                    },
                    {
                        name : 'location',
                        type : 'string',
                        description : 'The location of the factory you want to change'
                    },
                    {
                        name : 'detail',
                        type : 'string',
                        description : 'The detail of the factory you want to change'
                    }
                ]
            },
        ]
    },
    {
        name : "Chimney",
        contents : [
            {
                title :"Get Chimney Info",
                call : "call",
                code : "Contract.methods.GetChimneyInfo(<span>*chimneyId</span>).call({ from : <span>*accountAddress</span> })",
                permission :"All",
                connect : getChimneyInfo,
                param : [
                    {
                        name : 'chimneyId',
                        type : 'number',
                        description : 'The id of the chimney to be read information'
                    }
                ],
                returnValue : [
                    {
                        name : "name",
                        type : "string",
                        description: "Name of chimney"
                    },
                    {
                        name : "location",
                        type : "string",
                        description: "Location of chimney"
                    },
                    {
                        name : "detail",
                        type : "string",
                        description: "Detail of chimney"
                    },
                    {
                        name : "factoryId",
                        type : "number",
                        description: "The factory that owns this chimney"
                    },
                    {
                        name : "paraN",
                        type : "number",
                        description: "The number of types of pollutants emitted from chimneys"
                    },
                ]
            },
            {
                title :"Add Chimney",
                call : "send",
                code : "Contract.methods.AddChimney(<span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory",
                param : [
                    {
                        name : "name",
                        type : "string",
                        description : "The name of chimney"
                    },
                    {
                        name : "location",
                        type : "string",
                        description : "The location of chimney"
                    },
                    {
                        name : "detail",
                        type : "string",
                        description : "The detail of chimney"
                    }
                ]
            },

            {
                title :"Edit Chimney",
                call : "send",
                code : "Contract.methods.EditChimneyInfo(<span>*chimneyId</span>,<span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory",
                param : [
                    {
                        name : "chimneyId",
                        type : "number",
                        description : "The chimneyId you want to edit"
                    },
                    {
                        name : "name",
                        type : "string",
                        description : "The name of chimney you want to edit"
                    },
                    {
                        name : "location",
                        type : "string",
                        description : "The location of chimney you want to edit"
                    },
                    {
                        name : "detail",
                        type : "string",
                        description : "The detail of chimney you want to edit"
                    }
                ]
            },
        ]
    },
    {
        name : "Para",
        contents : [
            {
                title :"Add Para to Chimney",
                call : "send",
                code : "Contract.methods.AddParaToChimney(<span>*chimneyId</span>, <span>*paraN</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory",
                param : [
                    {
                        name : "chimneyId",
                        type : "number",
                        description : "The chimney ID for adding pollutant"
                    },
                    {
                        name : "paraN",
                        type : "number",
                        description : "The ID of the pollutant you want to add (new to create)"
                    }
                ]
            },
            {
                title :"Write name to Para",
                call : "send",
                code : "Contract.methods.WriteNameToPara(<span>*chimneyId</span>, <span>*paraN</span>, <span>*paraName</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory",
                param : [
                    {
                        name : "chimneyId",
                        type : "number",
                        description : "The chimney ID for editing pollutant"
                    },
                    {
                        name : "paraN",
                        type : "number",
                        description : "The pollutant ID for editing"
                    },
                    {
                        name : "paraName",
                        type : "number",
                        description : "The pollutant name you want to edit"
                    },
                ]
            }
        ]
    },
    {
        name : "Data",
        contents : [
            {
                title :"Get Record Data",
                call : "call",
                code : "Contract.methods.GetRecordData(<span>*rowNumber</span>, <span>*chimneyId</span>, <span>*paraId</span>).call({ from : <span>*accountAddress</span> })",
                permission :"All",
                connect : getRecordData,
                param : [
                    {
                        name : "rowNumber",
                        type : "number",
                        description : "The number of data you want to read at once "
                    },
                    {
                        name : "chimneyId",
                        type : "number",
                        description : "The ID of chimney you want to read"
                    },
                    {
                        name : "paraId",
                        type : "number",
                        description : "The ID of pollutant of chimney you want to read"
                    }
                ],
                returnValue : [
                    {
                        name : "name",
                        type : "string",
                        description : "The pollutant name"
                    },
                    {
                        name : "timestamps",
                        type : "array",
                        description : "The time the data was recorded."
                    },
                    {
                        name : "datas",
                        type : "array",
                        description : "The data recorded at each timestamp"
                    }
                ]

            },
            {
                title :"Record Data",
                call : "send",
                code : "Contract.methods.WriteNameToPara(<span>*chimneyId</span>, <span>*paraId</span>, <span>*data</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory",
                param : [
                    {
                        name : "chimneyId",
                        type : "number",
                        description : "The ID of chimney you want to read"
                    },
                    {
                        name : "paraId",
                        type : "array of number",
                        description : "The array of pollutant ID to add data"
                    },
                    {
                        name : "data",
                        type : "array of number",
                        description : "The Array of data to be added (must be in the same order as paraId)"
                    }
                ]
            }
        ]
    }
];

export default list;