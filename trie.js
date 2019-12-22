class Trie {
    constructor(arr) {
        this.arr = arr;
        this.root = {};
        this.convertArr2Trie();
    }

    convertArr2Trie(arr = this.arr) {
        for (let i of arr) {
            this.addWord(i)
        }
    }

    addWord([word, meaning]) {
        let currentNode = this.root;
        for (let i of word) {
            if (!currentNode[i]) {
                currentNode[i] = {}
            }
            currentNode = currentNode[i];
        }
        currentNode.meaning = meaning;
    }

    searchDictionary(word) {
        let out = [];
        let currentNode = this.root;
        for (let i of word) {
            if (!currentNode[i]) return [];
            currentNode = currentNode[i];
        }
        const DFS = (obj, k = "") => {
            if (typeof obj !== 'object' || !Object.keys(obj).length) return "";
            if (obj.meaning) out.push([k , obj.meaning]);
            for (let i in obj) {
                DFS(obj[i], k + i);
            }
        };

        DFS(currentNode, word);
        return out;
    }

}

export default Trie;
