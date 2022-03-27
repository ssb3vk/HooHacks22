// JS implementation of Egreedy algorithm found here
// https://github.com/antonismand/Personalized-News-Recommendation/blob/master/bandits.py

// Dataset declaration
let dataset = {
    'n_arms': 20
};

// Find the index of the maximum value in an array
function argmax(array) {
    let max = array[0];
    let argmax = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            argmax = i;
            max = array[i];
        }
    }
    return argmax;
}

// Restrict values in array to specified indices
function restrict(array, indices) {
    let restricted = new Array(indices.length);

    for (let i = 0; i < indices.length; i++) {
        restricted[i] = array[indices[i]];
    }
    return restricted;
}

class Egreedy {

    constructor(epsilon) {
        this.e = epsilon; // Is it neccessary to round this?
        this.q = new Array(dataset.n_arms).fill(0);
        this.n = new Array(dataset.n_arms).fill(0);
    }

    choose_arm(pool_idx) {
        const p = Math.random();
        if (p > this.e) {
            // console.log(restrict(this.q, pool_idx));
            return argmax(restrict(this.q, pool_idx));
        }
        else {
            return (Math.random() * pool_idx.length);
        }
    }

    update(displayed, reward, pool_idx) {
        const a = pool_idx[displayed];
        this.n[a] += 1;
        this.q[a] += (reward - this.q[a]) / this.n[a];
    }

}

// Function testing
// const l1 = [1, 2, 11, 4, 5, 6, 7, 8];
// const l2 = [0, 2, 4, 6];
// console.log(argmax(l1));
// console.log(restrict(l1, l2))

// const eg = new Egreedy(0.2);
// eg.choose_arm([3]);