import WalletDb from "stores/WalletDb";
import WalletManagerStore from "stores/WalletManagerStore";
import AccountStore from "stores/AccountStore";
import PrivateKeyStore from "stores/PrivateKeyStore";

import {ChainStore, PrivateKey, PublicKey, Aes, key} from "bitsharesjs";
import {Apis, ChainConfig} from "bitsharesjs-ws";
import BackupActions from "actions/BackupActions";
import WalletActions from "actions/WalletActions";

import alt from "alt-instance";
import iDB from "idb-instance";

ChainConfig.setChainId(
    "8dff0ec2ef11269647d0a30e6bd0b91ea9cca4f2a303c15e4b84c73d964ed34e"
);
ChainConfig.setPrefix("DNA");

const utils = {
    PrivateKey,
    PublicKey,
    Aes,
    key,
    WalletDb,
    WalletManagerStore,
    PrivateKeyStore,
    AccountStore,
    BackupActions,
    WalletActions,
    ChainStore,

    alt,
    iDB,
    Apis,
    db: () => Apis.instance().db_api(),

    resolve: (object, atty = "_") => {
        if (!object["then"]) {
            console.log(object);
            return object;
        }
        return new Promise((resolve, reject) => {
            object
                .then(result => {
                    console.log(result);
                    resolve(result);
                    window[atty] = result;
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                    window[atty] = error;
                });
        });
    },

    init: context => {
        if (!context) return;
        for (var obj in module.exports) {
            if (obj === "init") continue;
            context[obj] = module.exports[obj];
        }
    }
};

export default utils;
