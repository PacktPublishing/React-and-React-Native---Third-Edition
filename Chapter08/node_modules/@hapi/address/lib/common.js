'use strict';

const Punycode = require('punycode');


const internals = {
    minDomainSegments: 2
};


exports.nonAsciiRx = /[^\x00-\x7f]/;


internals.tldSegmentRx = /^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/;


internals.domainSegmentRx = /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/;


exports.domain = function (domain, options) {

    // https://tools.ietf.org/html/rfc1035 section 2.3.1

    const minDomainSegments = (options.minDomainSegments || internals.minDomainSegments);

    const segments = domain.split('.');
    if (segments.length < minDomainSegments) {
        return exports.error('Domain lacks the minimum required number of segments');
    }

    const tlds = options.tlds;
    if (tlds) {
        const tld = segments[segments.length - 1].toLowerCase();
        if (tlds.deny && tlds.deny.has(tld) ||
            tlds.allow && !tlds.allow.has(tld)) {

            return exports.error('Domain uses forbidden TLD');
        }
    }

    for (let i = 0; i < segments.length; ++i) {
        const segment = segments[i];

        if (!segment.length) {
            return exports.error('Domain contains empty dot-separated segment');
        }

        if (segment.length > 63) {
            return exports.error('Domain contains dot-separated segment that is too long');
        }

        if (i < segments.length - 1) {
            if (!internals.domainSegmentRx.test(segment)) {
                return exports.error('Domain contains invalid character');
            }
        }
        else {
            if (!internals.tldSegmentRx.test(segment)) {
                return exports.error('Domain contains invalid tld character');
            }
        }
    }
};


exports.error = function (reason) {

    return { error: reason };
};


exports.punycode = function (domain) {

    return Punycode.toASCII(domain);
};
