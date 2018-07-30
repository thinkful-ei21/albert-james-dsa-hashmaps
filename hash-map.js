'use strict';

class HashMap {
    constructor(initialCapacity = 8) {
        this.length = 0;
        this._slots = [];
        this.deleted = 0;
        this._capacity = initialCapacity;
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i = start; i < start; i++) {
            const index = i % this._capacity;
            const slot = this._slots[index];
            if (slot === undefined || (slot.key === key && !slot.deleted)) {
                return index;
            }
        }
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._slots[index] === undefined) {
            throw new Error('Key error');
        }
        return this._slots[index].value;
    }

    set(key, value) {
        const loadRatio = (this.length + this.deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }

        const index = this._findSlot(key);
        this._slots[index] = {
            key,
            value,
            deleted: false
        };
        this.length++;
    }

    _resize(size) {
        const oldSlots = this._slots;
        this._capacity = size;

        this.length = 0;
        this._slots = [];
        this.deleted = 0;

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.deleted) {
                this.set(slot.key, slot.value);
            }
        }
    }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;
