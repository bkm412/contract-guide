import Web3 from 'web3';
import abi from '../json/abi';

let globalWeb3Object, globalContract;

//declare provider with infura
const provider = new Web3.providers.HttpProvider(
    "https://kovan.infura.io/v3/f00d7a0545114321b4b6b8ea54f4feb0"
);

globalWeb3Object = new Web3(provider); // make web3 object with provider

// make wallet with private key
const account = globalWeb3Object.eth.accounts.privateKeyToAccount('0x' + "1219B15C8D1DFE3699DDE53E80885079F0DF2B8988077B2C92C52A4CE4201782");

globalWeb3Object.eth.accounts.wallet.add(account); // add account to web3 object

globalWeb3Object.eth.defaultAccount = account.address; //set default account

//make contract
globalContract = new globalWeb3Object.eth.Contract(abi, "0x1d406FFCA0d61df0e659887B2F501ead6Bb96426", {
    from: account.address,
    gasPrice: '1000000000', // 1 wei
    gas: '500000'
});


//function list
export const getFactoryID = async () => {
    try {
        return await globalContract.methods.GetFactoryId().call();
    } catch(e) {
        console.log(e)
    }
};

export const getFactoryInfo = async (params) => {
    try {
        const paramArray = Object.values(params);
        return await globalContract.methods.GetFactoryInfo(paramArray[0]).call();
    } catch (e) {
        console.log(e);
    }

};

export const editFactoryInfo = (params) => {
    try {
        const paramArray = Object.values(params);
        return globalContract.methods.EditFactoryInfo(paramArray[0], paramArray[1], paramArray[2]).send()
            .then(() => "success")
            .catch(() => "error");
    } catch (e) {
        console.log(e);
    }
};

export const getChimneyInfo = async (params) => {
    try {
        const paramArray = Object.values(params);
        return await globalContract.methods.GetChimneyInfo(paramArray[0]).call()
    } catch (e) {
        console.log(e);
    }
};

export const getRecordData = async (params) => {
    try {
        const paramArray = Object.values(params);
        return await globalContract.methods.GetRecordData(paramArray[0], paramArray[1], paramArray[2]).call()
    } catch (e) {
        console.log(e);
    }
};

export const addChimney = (params) => {
    try {

        const paramArray = Object.values(params);
        return globalContract.methods.AddChimney(paramArray[0], paramArray[1], paramArray[2]).send()
            .then((res) => res.events.NewChimney.returnValues)
            .catch(() => "error")
    } catch(e) {
        console.log(e)
    }
};

export const editChimney = (params) => {
    try {
        const paramArray = Object.values(params);
        return globalContract.methods.EditChimneyInfo(paramArray[0], paramArray[1], paramArray[2], paramArray[3]).send()
            .then(() => "success")
            .catch(() => "error");
    } catch (e) {
        console.log(e);
    }
};


export const addPara = (params) => {
    try {
        const paramArray = Object.values(params);
        return globalContract.methods.AddParaToChimney(paramArray[0], paramArray[1]).send()
            .then((res) => res.events.NewParameter.returnValues)
            .catch(() => "error");
    } catch (e) {
        console.log(e);
    }
};

export const editPara = (params) => {
    try {
        const paramArray = Object.values(params);
        return globalContract.methods.WriteNameToPara(paramArray[0], paramArray[1], paramArray[2]).send()
            .then((res) => res.events.NewNameToPara.returnValues)
            .catch(() => "error");
    } catch (e) {
        console.log(e);
    }
};

export const addData = (params) => {
    try {
        const paramArray = Object.values(params);
        return globalContract.methods.RecordData(paramArray[0], paramArray[1].replace(/\[|\]/g,'').split(',') , paramArray[2].replace(/\[|\]/g,'').split(',')).send()
            .then((res) => res.events.AddData.returnValues)
            .catch(() => "error");
    } catch (e) {
        console.log(e);
    }
};