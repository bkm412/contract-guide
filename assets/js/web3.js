import Web3 from 'web3';
import abi from '../json/abi';

let web3Object, Contract;
if(typeof window !== 'undefined'){
    web3Object = new Web3(window.web3.currentProvider);
    Contract = new web3Object.eth.Contract(abi , "0x1d406FFCA0d61df0e659887B2F501ead6Bb96426" );
}


export const getFactoryID = async() => {
    const account = await web3Object.eth.getAccounts();
    return await Contract.methods.GetFactoryId().call({
        from : account[0]
    });
};

export const getFactoryInfo = async() => {
    const account = await web3Object.eth.getAccounts();
    return await Contract.methods.GetFactoryInfo(1).call({
        from : account[0]
    })
};

export const addFactory = async(address, name, location, detail) => {
    const account = await web3Object.eth.getAccounts();
    return await Contract.methods.AddFactory(address, name, location, detail).send({
        from : account[0]
    })
}

export const editFactoryInfo = async() => {
    const account = await web3Object.eth.getAccounts();
    return await Contract.methods.EditFactoryInfo().call({
        from : account[0]
    })
}

export const getChimneyInfo = async() => {
    const account = await web3Object.eth.getAccounts();
    return await Contract.methods.GetChimneyInfo(1).call({
        from : account[0]
    })
}

export const getRecordData = async() => {
    const account = await web3Object.eth.getAccounts();
    return await Contract.methods.GetRecordData(10,1,1).call({
        from : account[0]
    })
}