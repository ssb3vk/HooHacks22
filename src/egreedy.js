// JS implementation of Egreedy algorithm found here
// https://github.com/antonismand/Personalized-News-Recommendation/blob/master/bandits.py

class Egreedy {

    constructor(epsilon) {
        this.e = epsilon; // Is it neccessary to round this?
        this.q = new Array(dataset.n_arms).fill(0);
        this.n = new Array(dataset.n_arms).fill(0);
    }

    choose_arm(pool_idx) {
        const p = Math.random();
        if (p > this.e) {
            let argmax = 0;
            let max = 0;
            for (i=0; i < pool_idx.length; i++) {
                if (this.q[i] > max) {
                    argmax = i;
                    max = this.q[i];
                }
            }
            return argmax;
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