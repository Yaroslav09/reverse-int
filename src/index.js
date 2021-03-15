module.exports = function reverse (n) {
    n = n + "";   
	return n.split("").filter((v) => /[^a-zа-я]/i.test(v)).reverse().join("").replace(/[-\+]/g,'');
}

