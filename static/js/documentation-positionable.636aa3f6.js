(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./documentation/Positionable.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return m});var t=o("./node_modules/react/index.js"),A=o.n(t),a=o("./node_modules/@mdx-js/tag/dist/index.js"),i=o("./node_modules/docz/dist/index.m.js"),r=o("./src/Positionable.tsx"),s=o("./documentation/PatchedPlayground.ts");function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var o,t,A=function(e,n){if(null==e)return{};var o,t,A={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(A[o]=e[o]);return A}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(A[o]=e[o])}return A}function c(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function p(e,n){return!n||"object"!==g(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,n){return(B=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var m=function(e){function n(e){var o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(o=p(this,d(n).call(this,e))).layout=null,o}var o,t,g;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&B(e,n)}(n,A.a.Component),o=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components,o=l(e,["components"]);return A.a.createElement(a.MDXTag,{name:"wrapper",components:n},A.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"positionable"}},"Positionable"),A.a.createElement(a.MDXTag,{name:"p",components:n},A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Positionable")," doesn't provide a container or transform handles. Instead it\nprovides the current position via render props. It requires a bit more work\nout of the box but is infinitely more flexible."),A.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"example-usage"}},"Example Usage"),A.a.createElement(a.MDXTag,{name:"p",components:n},"The following is a simple example of a implementation that only provides a\nsingle resize handle in the bottom-right hand corner. Positionable does not\nrender any of its own elements, so you have all the flexibility you need\nto render things how you see fit."),A.a.createElement(a.MDXTag,{name:"p",components:n},"A more fully-featured example, with complete React project setup, is\n",A.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://codesandbox.io/s/j3j31kz0zv"}},"available on CodeSandbox"),"."),A.a.createElement(s.a,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAAVKHyHtUFcDxYDdE12k9OABHISQYLggYEKQmB_QFe1oKgVxEhSIRQgwFC5TQ6RTlCa8CGiPDsOichNnQKCyIoqiMCIyD2CDKVaNNLV2nBVBdFRY5TgAL2cAhEmxdhuHYYB1iiARnlQK52gABnYZMZiwdp9xrGZOxYWd9IAFlM9gADZTPM9YwBAgAxH1oESfT-GcQ5EUdTB2CgoR-CWIhqFgqzETcmsPJoZwIHky52AARjsiz5CkmSpgAQTmNT2EjYANmgdBw3YeROTUsRSpjGR2FRFSYG4YBD0U5TsXkbda2ATjKuqgAyEbxkSeZKGaIaoCq4JuEW-UwGoqU8PadgAH4Krm8NIzqq5Zvm1BcprKQZGrd8zFhDVjhgMAwigKZ9vqxqzqKlca0TESCBwTzMhSZj-trOscJePDENgVcQa6fJ5MhpkvpB_tYPB6gOs0pHkfYWAwAIfSDIAUgS7GQYiGYCeJizSdrTYIBSQh9IAJgAVip6HkdxdAJmZtmSZpycRFY6gCcwFJ-ex-RTux4HkeAMrJzoadsjB-Cli6MAAAlKlgAQ7Fq17oyx5HY1YDnsY1jqNe1jBdbgD4QNcNAMmlgWLFa2AMfN0mWDgclyP0tAoGdi0kNObYJbdlHcJF8SyJiVhCOpqOLC5nnFYjLpuNR-CcDTvBk5TumGfxjPlezmPUHwGB6cIQuo48SVtkotoMEcKBhX0gBiLt0Ejmmpe9ixZZpxg_fcMRNYXDuAEIpHH1AR9J02h-Ry3gGtnWMntuAYHFOGYFdlOPfa4BMZTkGhUr_TELgSgoHCJPV-xrwbkifSLRZ1z65T_oS4_r-Zkf5R3zvpDKBlv7P2RsXRm8pwGQONm7RuOwW7UXQO3Tu8ou5gAMgZfuAtB6IORluVe504ze05EfWsUhVYQwItWDmK8iEny9kQiwvt_Z-XlEHEOYcdj4JBqA-UrN2ZsN8DXf-wi-bAJBtpXSAAZe6pd2gZRgDaGRtZkHN34ug--mD2g9wAOzoGMYYgRNUqHD29gAOWoBaWhvYCLHDYIw3cshVxSB-n9AGQMYySA-pdMw34QAYSwg4_CsAcAEDgFgICuhQIGHAsRW6RgQh2B-mJBU5pBIkQ0uwZwbx1BbCmPITJAgsCaH9HaW65UWLbBgAAVRoNAGqZSKlwEkJQOE0RhRwByTU1c5AzS0AKgkfUvwYC6g8LvAQrAEb1yGRKWg2oMBTJmXMgiCzhkwAANIwESF4VwAh0DjMTmsjIGzYBbKWXveAqVJnTIufMwZ2zRRC1oOc2ZzyTqZM9JQR5XyCJ9NVKgZJDpyrhNacaOinplLzGBdU8Fgz4i9Hjrcg-nzLkwEcKgSAKQ4ALJRaENFbyWIfIBVinFeKCWrlsJ5VaatVz_KKVKOABUujngAI6hHiPXTIGBIhKRnCkHKvzJDhGgB0ogthyBVJoJNbo4SEZKSyCVcJILrpYFyWgWgAgHrBSVQRcKXS7Dn1rMYUwWNUnOGGMSnI8QoBGgZRDYOyl2CBGcRUAi6BtrWFsP2QcGQ3V1PgNDVJA4tjZARN0CZRxijRSxcUJYxRYapQRkmkINEU3vPTTgMNfIka-wRj6q4Xh74SlQBqpGFqw3sH1GowIes9jNAmN0Cox5UhURmPmaAjrYbOnQLWiIMJJT4hEJsAQ7Q7BVVcHOSoxxBwwkTjQe2-bVyoJmJtK4qJhVVpBha_Jtq5rsATQUd13Q6DFu2ryVcCaEZbvdcICklapL7pMA4B1WjhzsB-DEMAyQRibHMOEs9fg7CcXcGkHIN6kbUAaTMdAWQH2RjhgUK44S6rcAaqwSgXA93mvffYPo4ZoI5zwmeyMuMCBLHJksfOSwYHUcFmSvCdUYOXzI7HdVr6COpPFJnMKi74i6oQgnbow68hntKDYXadBijsHY7WKcGQH38enPYT9Td8MWAPc4BC3aZ1zpoqmtK36ZgQBqFAOw00CT-p1U8qA9RFPu305YSgD7UBMUbdp9gumj05BM2ej1l7vXXoLTDO58MCIPrLc-nzfm2jHqECxlkwWInZDC6uZL0R72lqfRWkFp0zBwu6GpjIGmEhfvUpGI5-KrhlYEBVqAWj2X4sww1AAUs4AAGjgS8aj9BVpug6ezerJSlaVuVzTOxWumqy5NrO4T0OcZfUjTettt7LcrgjAA2gqLWW89btAALqFaksNqY5AyJwDsIa5C2BQLoHSVqHA65qD6EYKuO7MBjV3Hrt9lVtAzANTNRYGYbxg7kBaixqHmAHrEoIL9uw6lQdr0iwjK4O3jv13kD58HSFYiK07NQJI0OshbbRulwHMA8f9DmbQRWB2NtNpR97eJTsXTlmEi9xZWRxRgEYJrSw-p5H9aBvtCy3t0AYHqzz1591BfC9F1efQjZOSS6IS6Ul5Pufmg-PLgXQuRdi9VxL72u9te0Fl3r3ntB-eK-NyrmgauNFwBGJb9KXjbe3MN0rk3zuzea_d-8z3cubn26N8rgbAf1c8exqgfe9zrdSn1-HhXkf_cEBd97LXkXQ824Nw7qP4vY9EPRUn3XKfvcR7907rPgeaYW7z8n361f0-1-j_X0vjfE9pRb6nvn7fHed-z8w93zfK-t8Lxnuvo-abj4Pv3tvvvh8l40agBfFevfT472v1cuO48BrYKq8oaJKCJAACQlRdGMApHgWUEEYDhrgaufP5XRFKYUkYBwmop_BBGSOdUqOIMDIcI3-g4cAn43sEwtgOAqIqqKO7AOAyBP-dwOAV8lONUIKIMRWSM-OkORYGY-g2oXA4y1EBAL0wBtYMB9sHgoQlUd-cAQyEAMw8EcA-02BtYuBl8EOhOnwG4NAAA6r2k0tFOQZQdAYSDgKfkIJfjgC6FgBQVAUjNwbxrWvBohgzgyNMswawXhHYPOqNghI6pChAC2psAGiahsJBv-GungbwVDvwe9jQCQegBoVkOATAKwEjn_nQrAIARpN7GYaVMysUmyhytyvEJGDQegRAWSF0N4RAZyEAVAl0AQH0KtgPIfiDPlHkhgWrEgcgbDCUiVDEagXAJwdjLkeVPkXhFcBGt4StksMgbEV4fvCUepA0Ujj5iDMEZGDPKEayuyjAFyjylAN_k0QGl4RhikWIhYDEbvAQNTtEVIeUegStsoVkQGEQn0QMffmEcMaMVEcUfEW0fAAQMkYEXMbZrQfQXNIwboWwRwd7FQqoWDg4WXFGLMTTNUTtMdOrAtq0upGURAT0bWLkVZDdirBAbLpnE1i1jpMjlcb_AtirCtlcAsWSjABohFkzugHbBiVIetvidvBogftsTTH0XSs6tQJGMpgIJcVQRbGOBkZ8QIN_v4LvNxEkZUcjG8cjFSXAPStJPBJGEdOGIyakSyQIOYOKXQByVCdySapsaTPyWTHgEIGMDfuwOeAIEIOyVAu0N9ienkFMF0IiGwN0CmgtvJsKOwNJsNHJmkmyasJVk3JJEQiqRYPyTWlah-gkPaXBghh4ZyPJqgZwM0LUSyGBtYbONkHmlauFrWAOMfgzn4Btu4QztVu1siaTH0VAjPCCSajgEGZod0AAD7llQKDHRKHGRHjGYlZA0arEQHrGVzvg0zfFRxpEZG8k4HZHUEtnFmlkeGNm0BelYGH6-nIypI2wkktRvBMH9AeBnrDrzrUTaFLkQArmzhiSYoIyrqJmrgpn07dB0EMGLmPH6ESFEK_FFrepRS_DzKKxwzPnZYsSbItSuYjilLAlDl3B9ngnUCyTlRUZ0ZcCFi_k3FwFYmAUWC5EbqlH_n2yIWVmTiVCCpogFDPEUmkwxEyHn4X7yEPY4VBHNCRj3mwDoBdluw9kylwU1QDkWC7ExHEl2wOw0Ac4ZAfDEb6A0UCx0WZGqlMURmlR3oET8U_HbIrLoD7kERlRQIgwLid6EmwFsXbwcUsTOwCA8V6n6A4mkwboGXYzpkkmICKV4VEn3RznsXS7oC6UkbsCVkWXYysXWWHb2zs7aUOX6VQK1QuVIHmbzDRGuD1JNIxANlSEEWX7JEBVwGXnLkwCkXXHe6jJQCnIPLrIIwKXXFKV16qX2zqV6yaVcU6W9B6U0DGXIxGUBXUDriwBW7QWmWwCZnYkBVwD-Y4qJwihuZQQZCIg0BXBUY4BoBXahDlBPjEzd4XwuazBuZVX-W5W1joEsFJUhrhXQArGwHRUX6xVLUWDxU6GJWRg36ODChPavQLFjjLGnXCDHKQHKFQLe57IHKUBHInITJyWwA5UzUWDKXMQFVhjuXM6eWOzeXlUkZVUgx1VOgNXpQxHNWNLBm0BQ21gdWJa6KoDdUEC9X9X6BDVKIjXSQPwTXtBTULUdm_UrXBXrXNKRXbXnGyG7WU0zWHVbmBAnUwAjBnX3WXVSGLE3Vc081PbJEMVqm1h9EmYIySWky5EmaZVPIERUr0xIlxBQCoqD4YoUoIzK34rJUola1ZVK3UDUo4AeQCDnijpikm30yvRMkCy5GI1IVqXA0kl6w7a6B4pA14m6zWI-gwDHY-U0Bgluy7GI0y0zWCUMVbEBVt6G2K3fX20pz_X43QVFWg2cXg28U0Azyo0mVbx53Iww1_iNUI1bytWF1kxdKHQ20pBRJdKV1Ka1ylye30xhjN2N0WCvwRBEA124pt3d2RCd04xKJ91e1gUBUgGdXUDY242YSp35xE1jWk3k2T1o3fmF2LW_XIzU1rWhWNJ01bX2w7V7Xb0gxs3MEc036QpYbQUC1Ymc0jAzHR1cETn9m4XYyS05oSW5luxy0h5fXYq12q1EokoAPa3G39162PXXHvkK2AqwC632zm2W2cTW1QN22x3AVTBO1_ku0-3bwe213e02UZB-3HiB0Q2DYiWUnkUzzh2_1n1R0BXi1_2vLgNG2J1r1_X5Vp2u3sVeWc5B0EC53cPTAbbD3F3khjjw1SGI0V0sMs1n270hVhWH34WM2EWn1n0HWbmX1JU36W54R82wH30eGGPvKsZv2qnWPen75mC4EXZ3Tw5PRhQrYIwgrBKHhMT6DCyoDsQECcQqy8SoIYBRJaAUAgT6AMBgpTCOCYD6gQB6l2nQryhAjSrJOTogqxN5I8TkShM5ClKpPtBdRyrxMwCJOZPSH3SPTRI4B_Bc0kT6i1ZoAlQND92grKRDZaq3Rw61NhQhM6KeNKAhKYSdIQPYiSCqDYDhNxJRNgQgBOOpLFOegOoZX-hLNip2UbM9MOjLPuj0T1KvXvXrMgqbMrOSDy07O5L7OoSehwP-jBKhKSAlb2zRJzN6ALNOMlZuOVwlQFRwBCoFBwCMDhLWJebbxiBnO7NTA_NgsQss7sC6hgBgCLHgtECNp2DjQpRpTouYvsDjRGPUB4sZDdO5I_PIuotjgFQYA4vdDqQAtAuzgguUuLE0voB0skt6xQuarksKpIsotsu0v3JctImstjiisEv5IisIsVHnYwsTTzACtUtTAMuAtYXMuMDisECis8sKHap6BjbBTauSuo5UZXCeYYukurjkwWsItnbbFOOjb6rdCcuyuMOMZ2tWsCC8lCKWveYOPysGu6ouvCSWPEsIuMPvl1HQ67qBuOsKvOvjbsA0tYgwDsskHwHSQwCmuriQawBesBuFq2AsTZuFvWsnRBu3Q_O94wCkPyKnB-NqSrjlnyioAekgytvtAugdu1hduEQtvyi7y9sWBdt9KDtTojAjtOXyhTsTsb5yqPDsANIRXgyhr6vVv8u6jSqP6WBLA7INTqRQSxDbCMB7s6lYDL0wCMBHM2bnsHt6s_OMsav4pnuHt5I7ZQScDmC3vNCWDHbbovuTmoBPNjMSpWaSDSpMGzPaDxLRNJJCTlTatLAmuytLC1v1uNvwRQoHPIEvMKoIrbHTmpIVYa0M6tqZppvnoEAjBBDmA0cjhCg6r2wJkKYFpOO5H5swA3hji0d0AwTMclSRhYAZTlsCBLCJCic_oIs5lGwgxYBMxif1yJCKfSfetmCyfNMTA4A5aoBMyRgqfsAWgtAZRLAKdGfsAidsaZQAAcBkdUkgda0QeAOAUEDQVaxH_pZH4mFhvspbwUgQNHdH4wIwjHuGK6rHMGHH2Dnq_n3HvHdHAnK6QnInSnJnYnsnq4CnSnq4KnYnGnmDSMuRWAJBKLJU5nxnInvJuRiQpXzQ6khnxnknPmglTn2ncAnKIowndXCmlnPXAA1C0D16krV2YWAMoeSWYJ5-uEcvAN-jWXYMOrvN0MEa2kk-wHMg_HN7NzCPWZF0i6gKTvwbNwYS1AUMhLAInI5kUJar1wAAJWSZByiuDsCeRJOyQ1k3fsAPdHI-jur5JbDUA5CffmBRcKu5ELd1ljFCeuBXDABKDupw8Gy32o5Lv2DbIhB6nkTWaRmBoihtj-1wCDIxeuBI4lRTIP6nhji6gjCoC_ZBqJDkPwA1YTm5EeBk_qQU_FJU8EA09094_KRM_sEeAwP7qOeQj-sZDNqWFwgxBzf-osAosXCVWrhLsLeY_dC_q7f0Gbf6C0rkWk-tmwCziFgzxLTs9G90ApATAR2KzpEylGjxC7y8n8nm2lQQmLo2aG_KmMNi-NDNCbeMg48tT-0y8M8a8_oiDa-8rexq_7GsoR9a8wDcrH7G-iA7EG87aoHHbsBm_qQeBZ-DjHa28Rb2_mAPRWY04vH2Mf2-bi_NC0cnqdgrewuEiO_id7Dx_RIR8yRcAXA5DJ86_xB69rbSn0fohV8nQecmBfddVBo_pc3KuLHfovdwgDUsRpDS_uClSPd8Uwh16Rfsfg8xe6DY3atz3r-6gCDHuWZIlydo3T1Y1BoX-p2xYVr1y7-DXsAz6d4Fe32RjTQVWVwVDt60gLADBWY4eqKuHRp2o5-PVSgH1Xno0BvY20JOsjHNb2kL8G8VuI-AAEQDfoVGXzP2Fm40ASy-A4QtzDwDWdwE9neQITCTQWVbWmA7AWgkjB4CVW9dbtI50_6_RABixKeM3WoG4JKE9AgypYlrBw8LKGA4oFgJ0TsDFiOAKjJQlMgMClqTAmQSwIwDyCxwnA5QVgFUFuxJu_jGfqD3yT6ZJA7RfoKJAdRb9zANZKdGpwyCxAvugfObsOiIAI4WCyEL3mp0bSH9eWt0XInAH0xc8pQAANXiBB8hOwQuau5gy6vQz2MIRQkrFNR9R7-zFVAODlLiWANOVwSwIV16J0MYhMwNzLb1a5oAshLvQ_K11CG_Qjm7BCoeEE5BA10AoQREOkORhikjk8IDvkcxzJoD4KMXRoQQAiFbcSowwnbEc1OxPUYu-wLIaMMZDNt9qirGADZmGELD6WS0btgi2nbb1tocg9YZEOxJflYhSjbelcEOFbcQ6aOMvkiy746cbs9MVAGVAR5xA9SEADIEsAGHIxJh-yADnsHCDzCjhFNMWhonh7OkchSMCblWiTbGsJmQDDBqjiKpM9AOcbJGEwLf7uBeSf8WBJiKEpd0RAPdPLOWixGrgMBeIh1mYFyKihzwzgBoAAC1zwAAfU1gFRrE2oUXEyPkS6h7ABUSwA0F1DWJnAsuA-JhziDwQscJUHbKuG7aRxu2T8JGO0AVEgwp0yo2sFOjlFu45RU7euN2x1FmBphRHEwb1wADi6QTILQHAy10-gTbVwXYDyD3RiURoO0ueTmhnp5anfThvAH25IMI-ro6UHaUVD4h8goUedFQBlJS9IwNnIsFAzsCtMIgLEKAM0Ju5H9ckuRNWt51raANfR1WVcIjQbbij9CIo-5GKL8aSj1INIukYyJZFsiORzI7kbyP5GCjnAuQu4V6N1rljZY-YrDvoRwBRAZgFFJJsUmMb_97ayI_2lcA0EsBzS8EeQLWwMF4Vq6vmfxlEnOKDiZxrGDRDiNLhehJAq41EOuOHHUBpqL8Qke_F8wdJ9xFBacUeI_AaIMBkgEYHuMtHXihxa0Y8TjlFp5QYuooXUJYD5HMjWR7IzkQ2L5ECihRUo-UeZCHZJwh2OottlO0NFTdjRqSM0ZziyBWioGNo7DnaNyC7wVojqN3q6Jshzg4GnohOt6Nn7AM_RdxAMUcCDFFgIxRwSMHZBjHUpv2w4RMcmNB6pjAhJ_UBnzg4YUScxpUTkMAPhEdic-WGVcL-P_GWBAJtYkCTyLAnNi-xswQ8e-PMCjjvY4448JOKwE3jNJc4kPAuNcpLjvgz4tcYZPggni14zdK4LuKvEaSbJGiQer3QvGWSDx1kzcd7AfFPinJ3kj8fvi_FGjbufGHASEF8FS81yrIZdN-11Sbd6gzYTgHYAjTkAaQw4JYNEBPSwRqMX3JmHdHSlRBHUTHZLmuWfw5AwAHcViLuVKlmkcBZ6DIPqUPJscAhDof-mgiE6uC0uo2TbmJxKgGQcAGUMSVFKOAo9ieqAWSLDARwlQtOLnOQa4KIG9T4g1nZaVAGxFj92A_XaaU9Hrpvcagj4JmNCKkjTdNgOwUSi9zmT9AEYKUyKStBFJ4R_BG7dqUMKFI0ktJpUMAFcGRAjTmg_qYUppKgFIxmgY0DSPIHrpMs66atcYuNzUhbCdsNZV7u9OOyLsUJ7ANCRkFVQvd-U1oEIFABmB-ALQlrJwVDh3QFAnp0XSaWaQwpEBIZQndrKuDmlhgaZ-0b2BDJfaRhkwTkM4ctTgCQ4kqR04ZsoGeb_IvRHSNZhMhg6RNPmiSCCLkiQ7wilgd-B_Dh1QjlJKk2TRDquD86jUCAG1KAPYHTJQZ64kAJ6J8NvSzAP-D8HYPXDdwvBOIzTGYPXFpoRVRUxTdWR0i6SYyIgR2GEYhyX5jgUO-AyVkU1w6woCO_ScFM2hVbItM8qsmFJ6HA4dJrQkcqYKjlP5Bpz-CAvGjQCv438FwNKJGMUNqEbDC5ocu5onIipSoZUcqWEd0DSoZVAGuoPQsBUYZLtI8-_TvASGyktR_M56HKZ02FDZBVejnedIBlgjdAMxxKPxkSD7kepG4XJPYFXFXAp0v-P_ZiPFkc6Z4cQwwXeORIQZzdAgHcXcsOgo7tpEYfvRCriADL9oge36BieOm3g5TE4zEFqbWA3SoiCgm8pGQ9JZDDpoZS84KC9wTRdzRs5oYxjGX4Jw17KTKVAPVRkbIYcyFU7-Tagxr9gsAocSkDkGPD-A-gneAIJPJnpBo8wMUwmNLwo48CzuaUVjg_wxpwCca2cpAQQBiz5ZSRtfJdm8k6m4S1ydIQ1pt3IVt9JeOlaAd-Q8z2t42_IQ1qGwbkTIoI5EaqTkFRwfzY2X8plPgPAEqtRWlI56ZdhJ5jIJkKqEUFfnUjallZxSRgMiFfxtTdFVMvGelQmTngMAxihfrfkKTmLLFOFSmbJAlmJxWqzi0xW4qlCMAZFicORSpDeroArFCbNMSf22QhL4GWKITqjlXl5SkYNVWDHAthoyNbZj_WeowvX6lEJ-ts78iVFM4OMrg8SpuS3MmkjTAGWrfAYe1lg-KYAhiggERSCpJVzcBYB2epJejjSUqMXEBc4uaV-KVGAVF2ZtWaWOL0Au1QuqbN1SRhbA9ab1sixNFdpIwG6ZIoXXJBtDtgT4PgWODfCF00Q7gPmVkAyrMReqK2DodvRSXD0YBc0ehS_xV7LCQC35AKjzOxii8o4Qyi-sdW-E5EsljVPpQ1CkZw0CW40MFTIwbxRxao1w0vqySGVi0lGMDTztqBHAUL5FESztG0G7TzpRZFEnFaEG7RRBAmeATaCmKpGvTlljaVZV2iE7KKyZs4WTlZHCWdgKl-i0JVis7AMy8C3K-yohUWjqQN0VaXIicsmlooLl-gK5X81zFIwUlVwdeb5SLm5Ln--S1_qwtQDFLYh-XD8IbAJUHyL84kr0fUs0WysxAvK6GvCPaWrUbltYfsTVi7Dat2CBy3nmAEzyRgUlyRWybInUnFyu-pclDN-S2VS4S2us_WYbJsKPgfV9q9STMKf4igs5iAy_tfwswFy7VbsB5ZjTyXJrlVtyg_jwMzwzwoEny9gCiun5hSU2XYAkJPKNkrdzAYhPeVGXo4jht-woemK0zqlPTOOTq_AXf3bW6QNFaLWVrJwgxxkh1ErEdYbDNaj09gf8NAIoKURbTYyaQRdXjGdlLiB1C68mMurHWrraMDjZQqBywgGqsUycsJu81g7zNZZOTcqNCnPDLomMgDeOaaHaSpy8k8yz4U3ydktRtgLBQQjJmOF2yyVjsmjLMBfWdB2knSbpD7MI6Io05Acp9cHPdblyE5-HeFO-vKhMFh-scuvBBrw5JyGINoTWfLLsUZVplF-LKZypaUsQjFVG-xb4uRowAr8qGj0JIGaWYbtZjEZiGQV3gZVKNXGo8PoF41I0BNo_blOcRpYCg_G_0QnvrLdm4dIONcmEVIuTYyUqlbBRhgqu_675qGaSrtJ_NnC8lEaiq3TcHQkXGDK16PG5JmjuGsAvR3cqYCFlUiGZdIRmHUnXi-7zo1ELwU7juglBygbMxKssjkGbUtSweMS2xd7nU3wiklK8uvPXHSUgxEaOUK4DFq9HNy2CtS-EaasWKNLGGuRRtTAHRW09nF96x9ZGBS3ygitJwWnm-Ba6bSitJW1ADauCrexP17JT1VcBE0Pq9-t9f8IBliD4ghVmUdXHXxHp4wegkObYNZkO6JBoC6k5pa0tmVdL7ZeAR2WwPSg9bH1_QqBP-AaLEEamCOHCsnRgpdJfss6PxvrSjhLsCo5AKgOQWdFHB7AzgZwOMH5RwBzacobDVDAGW2Kft9LFqGrUmTuq68nquvN8r_qDKJkzi7xjxsGAVMYdYy5YQ6r3UwB_okQJLgwu236BPVHwYOPoG6xLB_wV2D4TQAACaSwAHSGuWFwA_1MwADdACSpgYaAGVdAG91CVpqrMMat2CxAHG_ozCiQeRCW3NHsFNlpakGJDoEqbSugEm1EFJtJV4RZNx4OAPrMjBDKlgcO4TQjvgyUbRJQM7elMqcXEVFCrM64rYxqjlqHGFa2fgJMtE1rYu7gYKKkzbXzrzAdUlfjlIdFLoR-rU6SCfzrUY6iAWOtzDjqzByroabu7rDl1gxu7ydMekAsDt1WycttCO3rTQFqXIbQBBQoCrYqoyRq4yQnEnQTpoDdYLOW61AN1gc5A7h-1XGLuTAL2b9qsxesnQQHJ3l6491egHT5l2L_gOqZhAgC9TKGbTvhGA_PXWqqpMCG9E-l4lUNr7pi61ooYWCVHH02EiB0-mwnXtsW3xG9e8ZfepCZm3wxSi-4WFLqXYFjdgw6FgLOl7BWZ9epUQacmCf11gQg0yXfUvp7AQrX9cAd_cvsYDGRh9tw0fbOtX1xlJ9S4jfYXsc6gHN-DUIyNtBgPdACaeMXfb1wtBlKiE5Jd-iPPYAX7v0wwfoPJEdhQB79kYQ_dMkoxKJd9dUBqOQfYKQG0gkpIhK12AN4xkDBAXfeAYpjsADIZJOfTgbwPDpsasQeIPNiAO-TZ1vB6AhAa6ScH98hWG3aYO1AyMBA0qF0KJQo5FbpgdgEBTkBZj9gud1mI4NFC6AcTkQziDcdQB9F1qSogALCIasAAJuXUeAHDHZGDI7X8Cs6Jk7Oy0vnKsxCc0dE6nVlOuklIwmZHXLrmjs4G9cojO6wblEcIGpIEjSiOqP_pZiKHeutiP9MkGaX7zuqi3SYJFLR0cStDzar7jGVOBUMAsC4ViInG_QUc0A4MPsEVqtCjA7B-A7tTFwF3_phdqIUXQyoM0qLmV-q9RYhtFaWrawIypjURQUIUFyoRlaOcvzhVBIRmIs-ER0iOaHJjkGVKWcBBlkxN_ZMQY8EcFY2QaNZ8Gj9dAF1RRRLZLUbpettuMTLHUpxj2dBu9m9Ja5_skAfi1ON4dXmmGxY9S2FZpRcNneKnfclBPMR8NlcyVERoBMZzE1-A55bz1TW39oT4qKuUpqYIAmjmzWuAHrqObwZ8T-GrE7KhU0htk2L1LYx9TOTwjMt-hLTbwyVXmaMl8C2gIgtejILoBqq-Abmq_4UiLNS7awPAG6CbG3qxydgPUJfIzT4xmwPeSAtfkJlciBUUUL-MEJMidk54cnUyO1ANAaR9gJsUKLh7sAds0zLAIZpSD_DvjT8qCqjnZSalFEbBvJBgPQM0YlxRkJQKuHtOjBRQ9k507OtM7DhuDHp-uN6ZGDwZjTGA3g0GauDoGaooZ5JiMGa2RnJDbp7gxlHjPW7vxti2wGGZepF6rgVJ8U-gHT0XEDdtYWoTgHqGRgVTapjU1qZ1N6nzwBp8Cc4GaFmnkWeOvobnyWjoHRVJPRM81ucW4m2j-JlRh1sWXhFNSQ-5Qpx0TO66SohJu4K1qSoTncziZmcxkZI4Y9t-z6iYNlOc1zdDMFoSoFaEHBeaaIPm7vi9381_cgtTG0LStnC28SXpUW7ZEWZOafVYt1WZJQltgVsm2qKquhUQt5M5zVW72xkKlvYAfntjX5jLdUsgLlmLA3Q0YEOeR00wl2ghQiKYd6CohIgFoZqu6JgDzAapc4AsPiBe5HGpep6hGO1quNRh6WDUGeP-C6AkWLiGuDC453FBsXcgdNSU_smJWraQN6kxi771loxcjm3FpZM4qovslozTMYQehd-pPGas85mYCtpR2LauwbmbVp6uJ0Q6edAsB1WIwRNuqVWyJvOYYYzVn0s1Ty9VS8p0bYwUl6BEgReDrzFrXltYCXaTG8sWApdNMSS8Rekt_LtySVAFUBRLrpQQVS8gC1_qhW0AYVhg_y6TFa6BW2LF-ZFauFRWVqCoXYOwBlDIWRhwEZC4Iv3sm3-oI0ipOqKfIsKurbBOmkXB5t_6mDZT3QQKe0Yd1UMaASQC0JVcXkoWxgRzSLpSp0UxjvF2lygNqyE4rzCz-yak6WfrjabmT6fWTpnrNXZ7-lgK2xa6vZZ0sSoO14EyDo9Veqt9skDFGADkWOV1I5146wWtctFrWeswl0HyYICax21RBzio6musQmLrrlvOBBXxCpJBpBkDKKdYODPWwLYQoNCIa-tUKQdl1k8Ixl67A3Qbh-QrRMihMMtVTuodU5qe1O6n9Thp5wDtn_BTCwbJpJ6F4I-FjSYQcBGwHjHzPbR9DVwVG7XxYMSG2D1ZCG0wreuEHiDvXBUyeESMU2Yg5Iam1tOrL4Ddr9yNdakpphMD3sL1qGyKBhsC2MbJ4Hdakg8GU2xbUvQbgdY5Yy2D1KhBQyseFljMaLQKS5nnl2NwcFmt62iAtbbGEqXjb6kjQMmLaohw1dNXfYsFXAdb64_Y22fcdA2rhyL8iDCQQCD0Ka1ZUGr2RaI-N-zSNWnfoD4FOPirPtwoRXXYlJWp3ONSMVNrAAzYlsndObNDquG1bS20o9cSu4ddFb1w3WoAmO2hv-Pu2kUsGKW4dchN5qlM4bVAN3Ycto1gdA9uW9QQ-1fa_GKdizCPfrh_AGQ8QRwExLLm_IYTEHFOW3bTl5tZwsAHjkF347hdok9cPzqXd3t8c6eB9wuTDBwHaqZgJco4cvZWar3q52Jje4wy11eGHR_Go-9xu10OjddfKQfpJtBTZ3UAyu-APJu5MD6GgcAcKPAC5JibfjpJ2uapuChZi6TCFxkypQavF49NyWreKZtXy4Paw8VmABydvpcn0RXSFhSSPxGThm61DuLKuDckMOCsZIpRCw7YVT1gLCahhS9Y4e0PihbmMRd620XGBZ-O58wFMns2Er9zTm9LHYECy7lt-HclJReYH47s_NaIALdL2C1ZAcgB8Ya6YJ-5PdO5UJjuXHLd6DbOI989LC-VSgFAvuxjv7k7XMd4abMmhp8k4kRojWvFl2eXPHQPlxb5Vf5pGClv_NArALXD2ASBd4dgXClkFkRbEI3VOyssHdJh2eKID1wJ6J0YsSCfQdZbjVFE3LUCcNtpR8t6c6HQ6KHMlRytH2MPfXiq3tAatbR-rdUMa0I60LHS6yxOa611o09O216ANpsDWORtw0pYEu0IGk6dgs2pIEJZ6UDjen9T3bdcX20JFDtLjJQi_T-pnaZgF2lIFduStVFZhc0Wu6U8B0G26WI98HZ3gt1bWPuc0Ilh9OjbUArnJ1-NbJAzsT34IU9nwMCXHtZ3J70QVO684h1bOxrUwAHSVAB0gubn8K3PbJCGUlR37BAETfxqUszVjLnl5C9vfTYYBM2cXIPSHsoD1PrLty_Ha3qJ1iMlK5L_QJTqpdD3h-YjXy8jEMs0wHVBB1KMQfZbK2YgatXfQAIed92ad29TF45ZCBzAkgOlt3fEDpakvfq98WSp3bOfD0q6KTrF3ZJLgqvNEGTrVxYCoxMuPlhdB1cHB3ZuZLAtHeVFBCwCJNgHTEVl6TAdX-qH8gawR5QGFe_UdZIpCNXWujWF1w7kdoPShnpsEBoHsDxUhpZFdxr1XHcGbH7GKQf6Bgcrmagq9Od0t_rlAogSm6VdpvGMBr5Yfa-xiivHLrqzyMKDCG2AxiOKfIH0ekiJAk3F8LNyqyruROxXY905V87wg_PdXQZ7t9uO7duTu3-r9V8y8l1Guo3Yr0y3S2RP1vj4PJ2J0wu7fOXC17lvN9vWZeHObhrJWXUHwIAK6ZNT3cB4fQCoa6AqyLkTf_dqqZLIrJazK1CNNuhTbd6taefboo7H3s2YkV3R2vd0H3PdWhrwr7vcMk8cXxdrNoiEJcH3Q9_T10BHuIdR6E9sHr9_HtGm2yk9o0v_g1EWdQeM9FS4D3i5LvZtJW2kpGFx2-k4vT7iXC-wAKj1LAK95OzkHjtJ2E7idNLinbZLfeIhzKRCdj_Fz3vn3mOVHr90TrnWIf6PLepj7TcY-seiBAOnKNlcrWWAPtaKSjshHnTceV1MaZoE7X_k2HWmPgedPNtMGqMz0Cr5jE23ccWEUl8U1tfdtbgXFOjtijlx9cTHcvobfLmw9VgVePP4h__Le2mxA9xdd9OHvz3h9A9l3QBrYxu_i02vwupgXHJfdfsmlLCaYbArjv59Lu76dOOL8vYK5Sx6rUkTMtztXoyh2cGt4hohEIlS8heAvda6Qvh-Cj5fnODsdgnF87AQBTlhlz1sp9xfoB8X6Xmr2p4a_tc0ANWHF_F7a81Kcc975CTlYlfJBHP_N-dMIbVrqf5ux6FJQ4LTcjXOOs3qV1-5lf3JprsGE59m4rypuZWTdm1kuLxEzs0E90Z2H7bWx-nrvrbW75ABdAPeQYbk4kc-hu8Rg3v2QLJ7Oue-8W4c939D-7zrVXBIv28Na0KzOeEeQcE02SM2sdPgWh3NMbaI27h9pvCB8Rmr_nG9hXAsfJTnH0ojfwxdm1bmbtMCS6QoC9gx3pt4deiN4-bC1cZuoT_p-KvGfZzzgeT9sXNqKBhYdSOj9JiY-Gf2PmW_nAs5RGCfRCK4NuLp_E_d3TPqXyz7jLpuJgHPpX824194A-fyPlbAIJLilFafRCMX1z4l_UKkbxnKI7m7l-Po34RARX-L5J8y2kbav1dXb5phE-Xfyvnn4xlK-sl7aGAlH0og0RMDKfDdb2EIgF8A2NEnX5tUb7rjyGszD70wcLp3YO69rMUoLvKgMOWYT0jRjwXKCRtjyAb9n2SCa5eBmuLXykK1za4FBMRDvHGa-IhubeitWxZ33Fu6yI_n0UCTRPMRIlgRMyogWASMApbJArY2fJcWyUIhH-uAx_E_6OJTl1-l5ljaf3rpCGKBZqL98mf1MUDRCMgM0FHUxfci-7XzHUHqc2oiByA6oMVFhH_H8EwD2o43okC0QMAr9TAY32wAFvMClAJuRwarH8A__AgAADvPDDyz5JiHf3Dh_haUSRgu_ML0xZ64PEQNFYfV3278NrRHyRhdiaAJ2BADVkmbV-DbAPIpm1XXyIFSApGwahgA-N1P0xLCwHZtriFombUqqBPyn8pfUeVf9QA4WD4Ma-Ug1ID2A5f1zgkbf_WoD__WgLHER9KBCYCB_a4hj8p_JG1SRRArgJ7AeAlQjadbhQgNT9pvL7npR0ATfgo5CBedB3VWmc6mikRwepGIsvuChTxpLSHIDntoeZtQd1z5T_0BMo7MtwrcF7YChF1a3Zv2IdffZtyCN2_cu3RF_nVQ0BcsKc0za5U7ZJ34c-Ueh2-93-dJ0d9Ygthzxh-HcH0foEAwILrsR1bIPh8e_LALucDgR5WFBOcJEnsDPApewFcLfdAOOFPnAF2-cgXCzEetbFW6iXsSoCoINlSg7eEyCTvau3e123BoM7cmgrACl0GqdT2j1RpXknGC0dJDyEUe9cijckv9JQToCJg6_CFpug4qhdAcAHwGM4FXRezKDiKHYIYpZg9YO5pNg-2G2DkgPYJKCl7I4MSAXeffj3k-iHdVBltxW3jR0y9ExQ2C7gt3B2DsvXRF-CRgY4LZw61dvW-DzgoEJwBrgznwOCNKP4IeD98J4JW5yKHdTQoVg-2k-CzguEOKpd4f4JuDAQw4LxCsAE4LBDsQi4LgJ_wGEP2CKQvEMRCVCZENWCsQiEJxDLg4EN2DYQikI3wQQ28jJCWQrkOBDqQ24MODuQ-kOwNR-MrxpgMBG_AQDZbaXzrVKXIhCYEZQvoP_Ad1G3zBCNEP1i5pZQ-jG9hOvFUO58c3If1HtvSKb0s0qJHh3z8FwaVlMwYpNfl8ZN-cz26AeBDbxlstvE_hicp3ey3AsOhWyxidkTBIPcAP-VywIccHZAT1V_-ZtTyDofPWDQC_fPa1CMonEoJ4dkTOn3CtpBWQRwE2BUgMIFuBP61dVBfKgV64aBEQVMko4dQSzDWBCYkrhojfMJIwyBFViT8yzVJFLC6BcsLdhOvDQTkE16GsJX8kbesJPBXVZsKEEDICyjLDUaIRG7DswvsNzgBAngUbDFiIsNHCJw1eHEELASQSWpMwzQUfBcwlI3kAVBVGkrCdw2cMelyYPQQ7CBYLsKrCtBCgJNCLwycIBt9JE8P4CAbB8LXChZUZhPV1jS5hDxbba9QONSNWp0qpnbQJ1dtzjYByAj6LDviDs7jNbUdkINV43jsekX2SkgHbR5y5Z0TVuwuNyoZ537tQdLuV-Mn7OE1ftyoLjnI997ZjnVgIpIiIxNYTKDjJMcIwTR8YP7PjRh1v7ITVYjRNABzl1lfaTXggwHVXTppm7NjQYjkHCk1QchJA-XpNW5X8ywdlrYzXwdsHTPF5ISHK4GisKHXAmm4JHOzQc1ZHGEHkdTPGICUdzAFR081TBbzQ0dIpW80C1mgXR1oAAsPu0Md7uR7j-5LPVxy7lLHYZ3xBh0Q8yMjHpRx1ciS_LeGwcmrKE2dDn5G6W8ceJaxXBcegdhixJn1H83i0wTPMQLpwnSKygsPcDTX0JstE1QwiEWcpyR8WwDpzaMytWUFLNKtAumq0EdWrXbYpdVria0yo9F2RgenVPQdFSzHMiGchtOGXUgxncbUmdptGZwM9G8EO16V2o3eE6ic9N2FWd_3FwiO0noE7Sjg-9cmD2cDnOFx0xHOBpD3kKOdfmotzCboDjl_ASKTwiUYHVHecpgRwPUhnLM8BvAGpWcHsAS9UAOKQloqHW30sAWwC-DSoZy0LCAbZdT3DJtVJCOkiBJmDBdOOD6LgBwQ76IP5hwk0P-ip_TW3YBgYxzlBiaGc1Ec5rNLGSdRf5ejkKMp5NFAKNaQKji94oECZ2dgycFWyUdW-SeX0B9oh3UzwLorryD0CoCGJKhyIhLkoiV0GrAhihPBf1sA6PDaLiiurUAL7sSoPCJhdmIW5xi9v2JoygBC7elgCouOZmIhiGPJ6KE8xPKTxt9s6EWNy9BY_-ixJYdH-y4i0XLp2Pd1JDOzAZcvEbzTZlY2wCWBGjGIHiB5Y7RjdgN3BFQd5t3IB34ildA9yEiIqGd17sDYwujPcdddS0LoSHG9xeIrdKfhOk0ZAqGxjAZfSPxiMJB3S44P3SPlQALQG6EXk6pKwPv8XQn90f8--F_2IED3XVB3lggaGVXILCe6U0knpJ9hxdwPHVFI5n3O0mqxIgoRQk5wAqYNjirNO3R85ugN7z7BToheTzA_5CwiK0HBNOOhQrAiwj2ijgPmIMIaICvWHjRYiKMIASAUxxPAPQ2xQtjBJXL18DsXNNhbj44TBHlim4mgBPiUI-uAdi2vOWJxdk9Q2AmiRiHbXqw-7TCOi9BhHMz4U-wa6LpsB9Rm0yhmbHgyGl9fWLyy91IHsKIQuOK-J9lVYil2Y9JPNvTqhjOW-KdicXDRDWksrQPwd4xxPu2fCuOeQDFhyw8knJJj1OiLXtIgf8P2MEOeWTzYdvBAQPsTZWUEhl64LtxtZQgzJwcZMkeoLCD4IC0FzsLMT41I0EA-uzGM0OW0MQCbTFe3Q14AVGUrUzRamKdQAyOq0oN11Htx7RKBamFSRGMaiNy86oL3lMilcLeNIEfHY_m2tVQke0PiTE0uGWtO_VUIR9SoGdSdMfo_AVR9knK4FcTzLKPyRghELxKXC4_Qfz9N_EscGbDZPLc3RlIBAwKXUjArpFcDg-ZR2MS7lRWHjhLSb9F81S47eJijRrCHnwErE5vSZMzNC4iCNHEn6lrAMBEJIIB3Ey724NKkqn3CTe4r7kUSHdRyAPh6rMyM7wKZcxLOsfrOOQKT5IopJGlYw5HAw9UcPxJhjyBQJNCcTQzxImSmwk0IaSN_VCTHBCYnoG1j_IlkEMTQo5yzMTItKaT7t8k6GIGTCHbD1GlpouKJRdClQYL4ThgiIIli-Kcm0yAEvJEkP1S2fThRccADwBoxQwVwAajNpfrjpJWvU5V64irOziIECvBoGSI9pNNUfBhpc0M85mks-WB12kopPqBLAfegMIVEv6WiQLzREDwsm0O_xCAbPcgnqAAWBkBV1LOTNByAUQZFJ25B-eIC6S9kiF2HsCIzGyOSAaZSIh1-pT-IuTDQYVQ7hG4KAAU9rkkBx-d7kjPXJsyIpYChwoKFF3JtIXA_Ua8IjCghe5FA3dRiM_k24W70tAi0NMFEUiwl4S5QH5074VZLZJ2Tsk3xwGDJpDt2oAxU1lOg92U1OmWsRpY1KTDawaFEhloiThPCDU7SGXFSLiOTy-5hTNZO1tajcTG9TsOQRJ8AzUuvCnQrAzhKXj7ULFM4BrzbNnxS-kK1MztVDZ81iiEKAVPiBhU61KGDbUkYMOSOhJayKTWxV1MKDpYy5L-cRUn1Ont7UmgGudJYhYMdTSBZdxucmQin1cthcEqCxB_kAtIjTbk4F2bSKCPbTusSMBmM9IGKVrkNToifUDJA-0_UAnJ-SedP1B4UqzSEAbsd1E1IZkfMHIhv0M8E6t1kw1KbYo0-q0zwXA89MaCIgv1PHSi9QpJOTikoYznAeUoIR6hAdXEAFRgQs8HXBH4Dli_TW0_Smk5FwMBOlNXGPgGYQv0nnnp58eDYSfALQWjg8A_1S0ENS3wJyirIYMtqDgyBeRIEQz2gARMoB5IC0Awy6oZyhwzIkM8HgzlIQjIES4AMjM4TMMyjMbxYMmjPwz6MygCYyRUljOwy2M3DI4z47OjKOEnwcjPbS6SeABmkRtbtnexMM-2iXYHwfQBeBkgKNJoVmSW4SacRgoqyWBozaM0DM9MzkH9BxQ92PMAdpAgC3S-4p9yU9AMC4Ad0PIPoEYkyglFMasZ03rgv9-5VwDxgpeWYHJBEgM9Be03tW9N7FdkviVsVOg1kOsSLnU7wcTggsmHckfncHwqcHPeIDAAiw_a1VCyAlGPJs_AKAC1g4Y9SGiyrfOGOyypyRzjJSfGTq1pijgCKLjl_USMEMz1MuKI3wSocqEiCCLVLKLCu4ozlyz8s5umA4ighflazLOK4F6yusloFjNes5sIGzpYt3GGz2ssbLj8Js6YDyzpsrA1mzAdNrNGzOspbK4QpsuGKME_eaxEX4Y3Mz2aBEICZDOjkuLzN1RxXPzNXIR0lkDUzio8YBaz1IXzMldGEnVGiJMnH9BGAWgj53UN3shhKx0fspYBdAAc2FjmzgcvzKuVvs4gCp1_s8m2iRAdD7MSA4cltIRyWoGADP1HOfgAyp-AHoGqzpeOOS_Rh0DJJXjHUV1SayGAmmA3xNwlOEiCCAbkJ8BBuRbIzd9bTLOycU4LhGZzBQ5dX2z-sznKNCjbHxIHh18dKG-Emc7YNZyVstLL-jhcy33_BucqOF5yrggXNSzpsxXNqDOBMkldwRgBnKjgmcv4Nlz2cwsG1yEwmWxVy3YXnIRCNc1bLhiLcnX2Ntxc83ElyoEY3P_BTcnbI5zXAnX2tyBYW3KpD7cvrON8ncpnxdzVSSb1T9yEy20mYGI6hISRAImpEzRvY6gDAdnAIJlaFdYJYGAimMNaRQ5YtcCMI5b1bWTDUvXH2x9cTZaCMDtLZW9AyA0gW2Vo0CAYQgmBnZfeggdfEvEAjsXxaO24T3ZOOxg1E7KtlfNZIEOM_sYdGpwqjH1RgHqdGwZFyWAmnBHRAVWnHJJi5x83eAXN1IPPNnysPevAXyaoh0WJVV83NIkt9kPE3KjIgUs0YAYLEs0fV58o2KYx2gI5jqjV8y1KXNiTbfOnyPsW_NLMH8ziKfyjmY_MDTTBawGSwCAFT0kdYtcqSdgyIJxHcA08ikn2ZCeXiwiprIwHhohn1SIAyTLpI4WcjUkJx0C1rVUCMSV3BagBeBhQQKN-45QcgmgAr8Pc0KMsKTECflt-JWG_RooQeWFQqCkxxId_SZrCbgE47Dn0j8gFIGMIdDcgp9lQMY6KVgHHC1O6SzSQB3l1gHfdzk0-LGDwsA485jUKcD5CxVQBEgMQHrhaCqACNUSChGF0L9C-uBIcyHbDFwxB0SMJrSv47xWUKBIg92cU1pBrKylnCn2P9pM8riGJQMgKXTFUNSQkSophlLwvTzXClqMERu8gN1lAABa1SWBIwJkRo8KUbIBzJT1NIvD8O8w-iMLdqbBMPwJgcAtCKQrDmkxCIndSPSKr3aRgZxQZEh0StLdHBNxiii7IAysdUzzmgcHdX_MfUntSKSOY5IWngpVsk3IlsAXqOqILNoLOa2LMpo_rSiR-WGTJfyWnCJO1hVkvqzzB4CBnB8E-itHRyBAuM-xC4RwOaOiRBiv3Q944HbIGpxli32xS5ZrY5mOQnbLhC6K-tWWFwAfmEbUSBZi-YAiSsChvk2BW0I4DKtxwcDG1jScQIFAwFwHIDqiXA5wE1gGgTyEsB6zbU3sBdQbUHPBSlJyGhYmU3uSgcYHWGHgdtCrFEYA8Rd9hHNaeMc1NikYY4zSBIwD_Ijd3U6CM9VBnKs32RymXqPyQYSuEoRKmRJEpRK2PcvKlBvXKNU8JFSC4v8BfbWyQdURi_ZDqjbJeAhFBW8vAEjAK-XeHfAj1EZjihtgWdH_BNAagA-Yk88CDNR-ABCGPB-AK4H4AgQYkCqBvADICzisAH0GkZIodYH4B8jPCBNL2AfgGBscAMcJABk4fgHKAryagFdL-AeOPyA_wJITtLkITAHJBz8PMEkxdyM0ClALQc0pBArSgQAdKawfgCiA0AQMpUAIwDQCJ5vSx0pABIyybGkgPhfMsNyLAfgHjLRAJADdKQAAAD0MoJyBwBmyr0vrgqy9pGzL6y1ss9K0ykGDNLiwDJn1IuylmBwA7IDKF7KCypGF9KFILssGkMoJmBwAWYPstrB-AYLJzsRgrsonLgbFcsrLBALUFaMnfWsv4BGy5stbL-AdYFOh5AJ5mTLcAVujrptSkDivUaEkAE0gQAWgF9AsgE0rNLtkC0GrKTzOYH4BryqWHkAgAA",__position:0,__code:"<Positionable\n  resizable\n  position={{\n    left: '0%',\n    top: '0%',\n    height: '25%',\n    width: '25%',\n    rotation: '0deg',\n  }}\n>\n  {({ renderedPosition, refHandlers }) => (\n    <div\n      ref={refHandlers.container}\n      style={{\n        display: 'inline-block',\n        position: 'relative',\n        width: renderedPosition.width,\n        height: renderedPosition.height,\n        backgroundColor: '#ddd',\n      }}\n    >\n      <span>Hello!</span>\n      <div\n        ref={refHandlers.seResize}\n        style={{\n          position: 'absolute',\n          bottom: '-5px',\n          right: '-5px',\n          width: '10px',\n          height: '10px',\n          backgroundColor: '#f00',\n        }}\n      />\n    </div>\n  )}\n</Positionable>\n\n<div\n  style={{\n    display: 'inline-block',\n    width: '25%',\n    height: '25%',\n    marginLeft: '1em',\n    backgroundColor: '#d7d7d7',\n  }}\n>\n  Non-Positionable div\n</div>",__scope:{props:this?this.props:o,Positionable:r.b,Playground:s.a},style:{backgroundColor:"#f0f0f0",height:"400px",overflow:"hidden",padding:0,position:"relative"}},A.a.createElement(r.b,{resizable:!0,position:{left:"0%",top:"0%",height:"25%",width:"25%",rotation:"0deg"}},function(e){var n=e.renderedPosition,o=e.refHandlers;return A.a.createElement("div",{ref:o.container,style:{display:"inline-block",position:"relative",width:n.width,height:n.height,backgroundColor:"#ddd"}},A.a.createElement("span",null,"Hello!"),A.a.createElement("div",{ref:o.seResize,style:{position:"absolute",bottom:"-5px",right:"-5px",width:"10px",height:"10px",backgroundColor:"#f00"}}))}),A.a.createElement("div",{style:{display:"inline-block",width:"25%",height:"25%",marginLeft:"1em",backgroundColor:"#d7d7d7"}},"Non-Positionable div")),A.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),A.a.createElement(i.PropsTable,{of:r.b}),A.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"render-callback"}},"Render Callback"),A.a.createElement(a.MDXTag,{name:"p",components:n},"You can use Positionable by provided a function as ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," or via the\n",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"render")," props. Both receive an object containing the current position\n(",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"position"),") and the ref handlers (",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refHandlers"),")."),A.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"children"}},"Children"),A.a.createElement(a.MDXTag,{name:"pre",components:n},A.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts",metastring:null}},"<Positionable>\n    {({ position, refHandlers }) => (\n        <div ref={refHandlers.container} style={position} />\n    )}\n</Positionable>\n")),A.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"render-prop"}},"Render Prop"),A.a.createElement(a.MDXTag,{name:"pre",components:n},A.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts",metastring:null}},"<Positionable\n    render={({ position, refHandlers }) => (\n        <div ref={refHandlers.container} style={position} />\n    )}\n/>\n")),A.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"ref-handlers"}},"Ref Handlers"),A.a.createElement(a.MDXTag,{name:"p",components:n},"Positionable provides ref handlers for the container element, 4 corner rotate\nelements, and 8 resize directions elements. The only required ref is for the\ncontainer. The available refs are attached to the ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refHandlers")," property on the\nrender callback:"),A.a.createElement(a.MDXTag,{name:"ul",components:n},A.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"container")),A.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nResize")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"neResize")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"eResize")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"seResize"),A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sResize")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"swResize")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"wResize")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nwResize")),A.a.createElement(a.MDXTag,{name:"li",components:n,parentName:"ul"},A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"neRotate")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"seRotate")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"swRotate")," ",A.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nwRotate"))))}}])&&c(o.prototype,t),g&&c(o,g),n}()}}]);
//# sourceMappingURL=documentation-positionable.e93de1c55c5b62fcd064.js.map