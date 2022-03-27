// JS implementation of Egreedy algorithm found here
// https://github.com/antonismand/Personalized-News-Recommendation/blob/master/bandits.py

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

class Egreedy {

    constructor(epsilon) {
        this.e = epsilon; // Is it neccessary to round this?
        this.q = new Array(dataset.n_arms).fill(0);
        this.n = new Array(dataset.n_arms).fill(0);
    }

    choose_arm(pool_idx) {
        const p = Math.random();
        if (p > this.e) {
            return argmax(this.q[pool_idx]);
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

// TODO: Add dataset
// const eg = new Egreedy(0.2);

// argmax testing
// const li = [1, 0, 2, 5, 6, 4, 3];
// console.log(argmax(li));