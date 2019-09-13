'use strict';

const Common = require('./common');


const internals = {};


exports.analyze = function (domain, options = {}) {

    if (typeof domain !== 'string') {
        throw new Error('Invalid input: domain must be a string');
    }

    if (!domain) {
        return Common.error('Domain must be a non-empty string');
    }

    if (domain.length > 256) {
        return Common.error('Domain too long');
    }

    const ascii = !Common.nonAsciiRx.test(domain);
    if (!ascii) {
        if (options.allowUnicode === false) {                                           // Defaults to true
            return Common.error('Domain contains forbidden Unicode characters');
        }

        const normalized = domain.normalize('NFC');
        domain = Common.punycode(normalized);
    }

    return Common.domain(domain, options);
};


exports.isValid = function (domain, options) {

    return !exports.analyze(domain, options);
};
