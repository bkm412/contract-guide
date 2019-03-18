import Code from "../../pages";
import React from "react";
import { getFactoryID, getFactoryInfo, getChimneyInfo, getRecordData } from './web3';


const list = [
    {
        name : "Contract",
        contents : [
            {
                title :"Create new web3 object",
                call : "Func",
                code : "const web3Object = new Web3(window.web3.currentProvider);",
                permission :"-"
            },
            {
                title :"Create new Contract object",
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
                title :"Get factory ID",
                call : "call",
                code : "Contract.methods.GetFactoryId().call({ from : <span>*accountAddress</span> })",
                permission :"All",
                connect : getFactoryID
            },
            {
                title :"Get factory Info",
                call : "call",
                code : "Contract.methods.GetFactoryInfo(<span>*factoryId</span>).call({ from : <span>*accountAddress</span> })",
                permission :"All",
                connect : getFactoryInfo
            },
            {
                title :"Add Factory",
                call : "send",
                code : "Contract.methods.AddFactory(<span>*factoryAddress</span>, <span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Contract"
            },
            {
                title :"Edit Factory Info",
                call : "send",
                code : "Contract.methods.EditFactoryInfo(<span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory"
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
                connect : getChimneyInfo
            },
            {
                title :"Add Chimney",
                call : "send",
                code : "Contract.methods.AddChimney(<span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory"
            },

            {
                title :"Edit Chimney",
                call : "send",
                code : "Contract.methods.EditChimneyInfo(<span>*chimneyId</span>,<span>*name</span>, <span>*location</span>, <span>*detail</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory"
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
                permission :"Owner of Each Factory"
            },
            {
                title :"Write name to Para",
                call : "send",
                code : "Contract.methods.WriteNameToPara(<span>*chimneyId</span>, <span>*paraN</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory"
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
                connect : getRecordData
            },
            {
                title :"Record Data",
                call : "send",
                code : "Contract.methods.WriteNameToPara(<span>*chimneyId</span>, <span>*paraN</span>).send({ from : <span>*accountAddress</span> })",
                permission :"Owner of Each Factory"
            }
        ]
    }
];

export default list;