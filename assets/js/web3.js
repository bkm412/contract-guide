import Web3 from 'web3';
import abi from '../json/abi';

let web3Object, Contract, globalWeb3Object, globalContract;
if(typeof window !== 'undefined' && window.web3){
    web3Object = new Web3(window.web3.currentProvider);
    Contract = new web3Object.eth.Contract(abi , "0x1d406FFCA0d61df0e659887B2F501ead6Bb96426" );
}

const provider = new Web3.providers.HttpProvider(
    "https://kovan.infura.io/v3/f00d7a0545114321b4b6b8ea54f4feb0"
);

globalWeb3Object = new Web3(provider);
globalContract = new globalWeb3Object.eth.Contract(abi , "0x1d406FFCA0d61df0e659887B2F501ead6Bb96426" );
const testAddress = "0x1283798F83dd68d23C91344b1677315608e6864B"

export const getFactoryID = async() => {
    return await globalContract.methods.GetFactoryId().call({
        from : testAddress
    });
};

export const getFactoryInfo = async() => {
    return await globalContract.methods.GetFactoryInfo(1).call({
        from : testAddress
    })
};

export const editFactoryInfo = async() => {
    return await globalContract.methods.EditFactoryInfo().call({
        from : testAddress
    })
}

export const getChimneyInfo = async() => {
    return await globalContract.methods.GetChimneyInfo(1).call({
        from : testAddress
    })
}

export const getRecordData = async() => {
    return await globalContract.methods.GetRecordData(10,1,1).call({
        from : testAddress
    })
}