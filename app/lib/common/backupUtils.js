import {ChainConfig} from "bitsharesjs-ws";
ChainConfig.setChainId(
    "8dff0ec2ef11269647d0a30e6bd0b91ea9cca4f2a303c15e4b84c73d964ed34e"
);
ChainConfig.setPrefix("DNA");

export function backupName(walletName, date = new Date()) {
    let name = walletName;
    let address_prefix = ChainConfig.address_prefix.toLowerCase();
    if (name.indexOf(address_prefix) !== 0) name = address_prefix + "_" + name;

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let stampedName = `${name}_${date.getFullYear()}${
        month >= 10 ? month : "0" + month
    }${day >= 10 ? day : "0" + day}`;

    name = stampedName + ".bin";
    return name;
}
