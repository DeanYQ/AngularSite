import { isNullOrUndefined } from 'util';
import { ICallback } from '../interface';

export class IndexDbSvc {

    private name: string;
    private ver: number;
    private db: IDBDatabase;

    static GetTargetDB(dbName: string): IndexDbSvc {
        const svc = new IndexDbSvc(dbName);
        svc.init();
        return svc;
    }

    private constructor(dbName: string) {
        this.name = dbName;
        this.ver = 1;
    }

    private init(): void {
        const request = indexedDB.open(this.name);
        const svc = this;
        request.onsuccess = e => {
            svc.db = request.result;
            svc.ver = request.result.version;
        };

        request.onerror = e => {
            console.log('-- IndexedDB init error');
        };
    }

    private upgrade(callback: ICallback): void {
        this.db.close();
        const upgradeVer = this.ver + 1;
        const request = indexedDB.open(this.name, upgradeVer);
        request.onupgradeneeded = e => {
            this.db = (<IDBRequest>e.currentTarget).result;
            if (isNullOrUndefined(callback)) {
                callback(this.db);
            }
        };
    }

    fetchStore(name: string): DBStore {
        if (!this.db.objectStoreNames.contains(name)) {
            // this.db.createObjectStore(name, { keyPath: 'name' });
            this.upgrade(database => {
                (<IDBDatabase>database).createObjectStore(name, { keyPath: 'name' });
            });
        }
        return new DBStore(this.db, name);
    }
}

export class DBStore {
    private _name: string;
    private _db: IDBDatabase;

    constructor(db: IDBDatabase, name: string) {
        this._name = name;
        this._db = db;
    }

    initTran(mode: IDBTransactionMode): IDBTransaction {
        const transaction = this._db.transaction([this._name], mode);
        transaction.oncomplete = e => {
            console.log('#debug: init transaction done.');
        };
        return transaction;
    }

    add(key: string, value: any): void {
        const tran = this.initTran('readwrite');
        const request = tran.objectStore(this._name).add(value, key);
        request.onerror = e => {
            console.log(`#debug: ADD key: ${key} failure`);
        };
    }

    update(key: string, value: any): void {
        const tran = this.initTran('readwrite');
        const request = tran.objectStore(this._name).put(value, key);
        request.onerror = e => {
            console.log(`#debug: UPDATE key: ${key} failure`);
        };
    }

    delete(key: string): void {
        const tran = this.initTran('readonly');
        const request = tran.objectStore(this._name).delete(key);
        request.onerror = e => {
            console.log(`#debug: DELETE key: ${key} failure`);
        };
    }

    get(key: string, callback: ICallback): void {
        const tran = this.initTran('readonly');
        const request = tran.objectStore(this._name).get(key);
        request.onsuccess = e => {
            const value = (<IDBRequest>e.currentTarget).result;
            if (callback && value) {
                callback(value);
            }
        };

        request.onerror = e => {
            console.log(`#debug: GET key: ${key} failure`);
        };
    }

    close(): void {
        this._db.close();
    }
}
