declare const isString: any;
declare const storages = "xxrequire('@system.storage')xx";
declare const storage: {
    save(key: any, value: any): void;
    fetch(key: any): Promise<unknown>;
    remove(key: any): void;
    clear(): void;
};
