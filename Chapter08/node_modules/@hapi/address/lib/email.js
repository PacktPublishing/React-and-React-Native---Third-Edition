'use strict';

const Abnf = require('./abnf');
const Common = require('./common');


const internals = {};


exports.analyze = function (email, options) {

    return internals.email(email, options);
};


exports.isValid = function (email, options) {

    return !internals.email(email, options);
};


internals.email = function (email, options = {}) {

    if (typeof email !== 'string') {
        throw new Error('Invalid input: email must be a string');
    }

    if (!email) {
        return Common.error('Address must be a non-empty string');
    }

    // Unicode

    const ascii = !Common.nonAsciiRx.test(email);
    if (!ascii) {
        if (options.allowUnicode === false) {                                                   // Defaults to true
            return Common.error('Address contains forbidden Unicode characters');
        }

        const normalized = email.normalize('NFC');
        email = Common.punycode(normalized);
    }

    // Basic structure

    const parts = email.split('@');
    if (parts.length !== 2) {
        return Common.error(parts.length > 2 ? 'Address cannot contain more than one @ character' : 'Address must contain one @ character');
    }

    const local = parts[0];
    const domain = parts[1];

    if (!local) {
        return Common.error('Address local part cannot be empty');
    }

    if (!domain) {
        return Common.error('Domain cannot be empty');
    }

    if (!options.ignoreLength) {
        if (email.length > 254) {                                           // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
            return Common.error('Address too long');
        }

        if (Buffer.byteLength(local, 'utf-8') > 64) {                       // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1
            return Common.error('Address local part too long');
        }
    }

    // Validate parts

    return internals.local(local, ascii) || Common.domain(domain, options);
};


internals.local = function (local, ascii) {

    const segments = local.split('.');
    for (const segment of segments) {
        if (!segment.length) {
            return Common.error('Address local part contains empty dot-separated segment');
        }

        if (ascii) {
            if (!Abnf.atextRx.test(segment)) {
                return Common.error('Address local part contains invalid character');
            }
        }
        else {
            for (const char of segment) {
                const binary = Buffer.from(char).toString('binary');
                if (!Abnf.atomRx.test(binary)) {
                    return Common.error('Address local part contains invalid character');
                }
            }
        }
    }
};
