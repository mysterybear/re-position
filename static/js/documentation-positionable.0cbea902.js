(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./documentation/Positionable.mdx":function(e,A,n){"use strict";n.r(A),n.d(A,"default",function(){return C});var o=n("./node_modules/react/index.js"),t=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),g=n("./node_modules/docz/dist/index.m.js"),i=n("./src/Positionable.tsx");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,A){if(null==e)return{};var n,o,t=function(e,A){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],A.indexOf(n)>=0||(t[n]=e[n]);return t}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],A.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function l(e,A){for(var n=0;n<A.length;n++){var o=A[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,A){return!A||"object"!==r(A)&&"function"!==typeof A?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):A}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,A){return(p=Object.setPrototypeOf||function(e,A){return e.__proto__=A,e})(e,A)}var C=function(e){function A(e){var n;return function(e,A){if(!(e instanceof A))throw new TypeError("Cannot call a class as a function")}(this,A),(n=c(this,m(A).call(this,e))).layout=null,n}var n,o,r;return function(e,A){if("function"!==typeof A&&null!==A)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(A&&A.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),A&&p(e,A)}(A,t.a.Component),n=A,(o=[{key:"render",value:function(){var e=this.props,A=e.components,n=s(e,["components"]);return t.a.createElement(a.MDXTag,{name:"wrapper",components:A},t.a.createElement(a.MDXTag,{name:"h1",components:A,props:{id:"positionable"}},"Positionable"),t.a.createElement(a.MDXTag,{name:"p",components:A},t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"Positionable")," doesn't provide a container or transform handles. Instead it\nprovides the current position via render props. It requires a bit more work\nout of the box but is infinitely more flexible."),t.a.createElement(a.MDXTag,{name:"h2",components:A,props:{id:"example-usage"}},"Example Usage"),t.a.createElement(a.MDXTag,{name:"p",components:A},"The following is a simple example of a implementation that only provides a\nsingle resize handle in the bottom-right hand corner. Positionable does not\nrender any of its own elements, so you have all the flexibility you need\nto render things how you see fit."),t.a.createElement(a.MDXTag,{name:"p",components:A},"A more fully-featured example, with complete React project setup, is\n",t.a.createElement(a.MDXTag,{name:"a",components:A,parentName:"p",props:{href:"https://codesandbox.io/s/j3j31kz0zv"}},"available on CodeSandbox"),"."),t.a.createElement(g.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAAVKHyHtUFcDxYDdE12k9OABHISQYLggYEKQmB_QFe1NXNFC5QVc12jtDV2GAdhNB8eRyPlAABGAiBEPDAWFQjwVQXRUWOU4AC9nAIRJsXYbg6PWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ2UgAWTT2AANk07T1jAECADEfWgRJlP4ZxDkRR1MHYKChH4JZOJ-OA9MRKyaxsmhnAgETLnYABGIydPkfjBKmABBOZpPYSN6PIGwoHQcN2HkTlpLETKYxkdhUUkmBuGAQ8xIk7F5G3WtgBy6B8uCAAyLrxkSeZKGadq8oK7gxvlMBQgE-D2nYAB-DYOvDSNiquYbOtQRKaykGRq3fMxYVozAwDCKAphWkqyu2tKVxrRMgylHBbMyFJrwIFrazrHCXjwxDYFXT6unyES_qZO7Pv7WCfuoWrgABiHYDAAhlJUgBSEKIYhiIZhR9GdMxz7NggFJCGUgAmABWPH4c-3F0AmcmqYxgmLCEAhojwlHMBSZnMfkLbMY-iHgCyyc6GnbJvvgpYujAAAJSpYAEOwisu6Nwcx2NWBpiHZdq2WFYwJW4A-EDXDQDIBZZ2sqtgWGdcxlhAqgVwnPlNAoAti0kNObZeetiwhVw6hlK6F2YlYQj8YD2s6YZsWIy6dApbwnA47waOY98GBidJhOJeTqH4PwHOSYITOY48SVthSIQpvQRwoGFZSAGIu3Qf2Wf5h32CFlnGEC9wxDlhcm4AQikQfUD7gmtZ7wGYDAfXF8N9BjZwOAYHFYGYCtrPbZq4A4Y1mOg-hpT5UQuBKCgcIo_niGvBuSJlItCnLIrrP-jL1_360z-Y7p2UjFFSH8H6E1LnndoICwEnwDlXHYtc2gYEbs3eULcwAqRUp3a23c4EQy3D3HacYdacj3rWKQKdewEWrPDOe-CD723wRYJ25JXbKQ9l7H2OwcG0y4PHdolNqbMOzrnZG8ohG8NrPJRSAAZRe4joEcSkRYBBNc64oJvmg9obcADs6B9G6KkXgwWOsABy1ALRUPwshGQdDdyyFXFIB6BAnovTei1KQN09pmG_CADCWFrGgxwAQOAWAgK6FAgYcCxFaJGBCHYFxLFKJKlVKgWJDp6LODeOoLYUxmLGgogILAmgiKQTouMVw2wYAAFUaDQEKsk4pmhJCUDhNEYUcB_Q0UyaucgZpaApQSPqX4MBdQeE3gIVgoMK79IlLQbUGBxmTOmQRWZAyYAAGkYCJC8K4AQ6ARmR2WRkVZsB1nzK3vASKYyJmnJmX0jZooRBZBOVMh5m1kmekoHc95BEulpIyVMbKGz7Cex2G8s53QCnujQq035UK4CAnBX7QF5T6LWMaYUj0kgJLzABT04FfT4i9HDlcnekLQaOFQJAFIcBZkktCGS557NaCUoItS2l9LVy2FslNKUeEK4_NyVKOAKUujngAI6hHiBXTIGBIjiRnCkBKXzJDhGgEiogthyDdJoP1boQSCLiSyBlaxaSDpYBIpwPQAgTruSNbAbybS7DH0-sYUwGt4nOGGEynI8QoBGn5fBeILxkiBGOLYUG6AFrWFsP2QcGQJKVOqXAAG8SBxbGyAibooyjjFE4lC4oSxihA0iqDYtIQMDsFLS89mBE6jpr5ODJ20a5pXC8DfCUqALXgw9em9gd5jiL1OuXTgzQC2_ArZwOwxQ0SMkrU_fEnE8i0hyNU3ZlB9k5ELRxfQA79ndDoNG-oca7ADjaSEBIow7Abr2Qc72lId2jLesOdgEbW0EXQDgJtq5P2wG2Zu7dRy900Hbe-4QFIe38XdSYAd-oOKBGVnsZoExugVGPKkOuMx8zQEDUDZ06AB0RBhJKfEIhNgCHaHYfKrg5yVGOIOGEkcaAm1_eDJBoQZjgdRMq3tsHvW-ryuwQtBR31HpsdkBavJVyFtBuBztUH-O1n7V6hwKLmOuj8EbDI9RISuBregDAxQxbNGwLYUJSwJy4gSLkTeOQSNomrsRzYPQNMwBY6E-ouo0MCFxJvJYaGa2RPNi6AQJnZa4dsxG1d36rCEgHfGgzCEI7dBDJpmgSwfhTAM0kuAiQaCbBiOQDLrj2OfWoGC2I2xwORmiiM1d55PPFW4KVVglAuDKYsB6hwAa1FvuyxAMAyQRibHMNYsTfg7A5XcGkHIMnwbUBqTMdAWRavAwKFcaxLW2sdfQF19gPX7B9HDNBIueExORkRmO7GSx05LCJmXGWda8LFQW59M-8EtvneoAdnr4pE5eSY_EWgAgUtsG6CRvIYnSi5Q2iZ97tYpwZHAwD6c9g-vVz-yYdgPq2jCbLSJMTEbj1fuk82hewN5Mdsg927Hgn8c5DZhzFkJPJMxvYIj1mdbqcQa7e4enuOEI4do_R6thPIcjhmBAGoUA7CDQJPGtAoPplQHqFzyqwvLCUHA6gUIRAkP04Hc4YXvhhSRTNoG0XVamfXKim-6Xsv5eocJDalX8QB2RjzSMfotAiRa5HDZI4wx-giUt-wVXjI4CcnqM4McMRZyK7sJHsGEN4kkeKCpEz_74Bm9D-Hmbs54A_q9RTm2wuAAa2vdf68NzBlTcG1Mm9mBHpNsQ-zW4YxLh3MuFzO6T27-5UBPfe997nuAAejTClbyKdvgaU_R9j_HsTEx40p-IyOTP2eo3_Jn8Vvshe0hsdL6uCfswACa1erh64NxkNJW0zB4u6GjjIGOEj9ZkpGfZdKrgv4EG_qANRcVOlHbdgAAKWcArxwEvFAwIF7UOgdGVwyHtWf3Flf0xx2GANdVXGRyTmsW-2Dmg3BgNkVgyHuC8h-0kwAG0FR5ZSDlZ2gABde_fiBAqYcgF2OAOwR1I9LAUCdARJLUHAdcagfQRgVcHg51O4CuHgk1WgMwUqN1WsGYN4cFSqVlWIYdE6JlAgKQuwGSJQzGQnUGK4KgxgiueQA7FQpCTQs0E4VAJIdQrIAg8-UGOQmAKw_oaZWgUzVeY2DKQwiGELC2csdgFxD4J5ReRgOWSwfUWRGAjxFaHSHWIzdAX_IQuZLIcUMAaI2I-Iq8fQRsTkZI_BF0FlZwsIjIyInImIuIhIwopInWTeco2gdI80CIy5bI3IuogomgIogBCwOAEYFo6KcIzI2gLo2o_I2A_onWVAYYutUYqozoqIqY-ovoxogMUo7eG5Nox6cYq5GovI9Y96TYlmMou3JY9og4yY443o044onWclXYyo646o7o6YxIx4hhZ4qKPY1xG41Yu4mYs4gmOAHYv414_Y94tY-42YhhYYy4_4jorIoEnokE74lmREneZEwEo49Er4gY9geYiEq46ElY_Ez4hozE2sSw-vQOLw01coNESgRIAAEgyhdDGGyQ8BFQIEYHay4CKIO2SnRClGFEjAvTuBcJDQIj0OKkCM-gZDhElMHGjzSRZlXxNlRFNQMPYBwANKlJNk-zwkKg1NpPpP7FUM0M-A3BoG1C4AaxoAukVNrC1JwA8FCA6h5LgH6QgBmHgjgBWnNIsAf3BmsLUNtNEJoAAHU8M6kV1nSFSdZ3TmShB2ScAXQ-DgzVwwyBMB1ltVsfCGQJk_SAy8I7AGMkCwc-xMUhsCRugjSNhZt_xytlDrSSsozMwdQuBCyshVSPM9CZTfo5S1Tkz8F6yvdeS8kxUJVpV4hIx3SjSyQuhWB5Txyv4xw-giCu5LTPpkoKkTTqAlgDSwx4B8kMoly1SQygjqAhJ6IjyL5M01zKCTzDTVzt4LyZJny9CDtPpJyx5hUZzxUYApUZUoBJTXyE1BzKDOQNyY53TN4CB3DFzCQcAjT0LYKbzPo8yCYAKgLRUQKwKFygYx1nzPy4LZIRELB3TPTvS3hfT-hyy7ycz8FyFcLA4Oz84ox4LMYDzso4dwwZY0CjhmIZIryXU_zawDy9IuDJY1T0jE4ACgCFJ9CqLNzE5JZKCrhELWUYAiSF46CdNlYdK0KSDjLuU2KpKLBJzeVg08JIxcDKLXSjCtywduKBBJT_B7N5TsKLStiWZbK4A-VpoHL1pwxnKH4ugCBtzFoRo6AvK5Lk4xy_LQy9y3S8AhAxguT2BzwBAhBPKH52geCRM8gpguhEQIca1cCTNp9Yclo6ATN_APLVh39q5qJ8FPxczLTVM09etbNiglsVt-zOQTMpTx1IZCDphpttM5sS808y8GS2BTVtM15alhqfDP9QCXKJr1Ys4x4JK7gcAhqizugAAfM6h-Ai0JIi-ciC3SrIQLNCjCx898FmXi62aK7c1KwqdKmi56tU461APs2gVC2wDePSrq8GOkgKhvT1Pqvw9DBiv0jwFfEcBjKaEsxiiAVGxPbFdlbEeaz6DXAcZanwuivKH0sswMl0nWfih-HPRYBmnfADHZe9Q5F9fQAy6RKdNZK61AKrHYbm1mO3D5L-HnPm6izXWYbXYW6WmYKvSgOWs_GYS_JWnWMSpPdC68umu84Fdga7O7fhfETWh62gH6g8zjHDcSgGl1U8bDdgC6ycSoRVNEAoVilMtCtM1ktkzM7AAgD2_BR4dgGM7odsRYEIKYILKuLoETNAAUfXJYAzUoM2EIiLReImzGAC908yta5WU2GgULXTXofK_QD6lmL6sHH6jiiGScyrFFcugmA4wW7YAmmALKcBWsBcWAxATuzGHOleegk2VIj4E7V0C6vurGMyweiygu9mEI0e0uzLB-IqSe9C_09u9mapOpGIe6r2889MtkuCterGlG9u-u6rKG3c2GzGYOyEYoRmytagRwoLDg6rPYBFUGKLQNCNA479HWScxmxu1ymKqujWv63auTAiYBoIjZRZdANujuqWz6but6Uy8G3O9eYIsLRe07OWz6K2_B2sVa2AXu5BgmAeoyvO4ejAXB8ey68h_u6eqhrB1OnBkuvByelW2WrhyvHhxh-WtWuW1egR9e-YRcqpWpepPe8G729k4-0R0-_oQIQOrOA4oZKAEDRBnalmVB_QdBk2TBsgueougQOh5egRwhyeyrJ0WAVorWkh9a06ohwYoTBuagSOEUbXKCDIREGgK4a7HANADg0IcoJ8dGGkgOERrOT6MRzeyRne6AMG4eg-n2hRmJ2sDeZG5R9urkxwYUAQy6RCscFCvJ4QA5aPKGh-ACnPQDdmkDN6GBlmA4uprdA5LRz-giJBjJzGPR_xrWox_O7B4useixnpiGGxv8ex90xxkG_SyepUtx6lTxggbx3x_Rg2hRIJgSW-MJ9oCJlxwqN68ZzJ6XcRreqR3e5JnAORo-45k5_UpRnG3JmAEYfJipoptCpC0p1595gQuCn6nC8Bm-2u5oRy0W6B9SmOA8iXNuzlYmNSuIKAUlVEilTp2AeFulVRmOWF9FmATFk2IPc8MjSMXQWlS6HRpuvW6YHTS85hxG5WKgsl4mM8lhjIMxH0GARg8xuAiBwKsFseRxppnFtyncnpmutRyItFlZUGbph5mEe4gx1lhlk2YZsxjh_QMeQ5wmUg7V2sSZ8kMcaKGZ0guZvVmitpNaagWlEJNpc1ycMRK1mlFl7-Qge1p-CIIgJ1m1j1yIe167b1llw2hZm2JZjxpNNZzCDZ9ObZkJvZg5kNwYgPe1lWxWlN4XIRye6J-VuJiR7e6R65259JnNp5lRrkzFVrLW75vSyMct2Cq-mOIqauiByc5netWAYViwGFxYuF61hFjKJFlFiYntvFgl7FgONt25GVjlPtulHAIlkl5lucStylvi6lxxuljBme6hpl2d5V-gjl48bljVmgay62ACoVqFh5yusVjJiV6Fp5Ed6d2AOVh5vp8RShlVkxhek9ggLVxNmlta-1g1ux41tC2Zja-ZgR7Nh53Ni5xJmRlJ3jNJ-5k5rJ0snJ2t15lo00yt4p5CmtrknD6gAFlehtvmbqzaVgq1I6EdHQigwg0GNJPxAJeFZ9-ASQVQbAEJLQCgECfQBgNgznNVANEDf0IT-JbFOFVI8Tmjh0ST2FT0O9NpjmyOWT61BT1CT0CXdTuJNVSd_0FjzCNj-5f5ZFarHjiJfjsCCCa1eiQpJrLm9gNurFWFZpAldJdFPpagOIAgfUWYCud9lKcuVcSAZWEL8GKIGYfhz6eD6RiudmGYVVKT9z1pdpCIBgtFOz4SI8fQBrTeEDNkpYQ8fXPLwYdajkmFLTyQbVX0vVaslA9TarNu3UZi1AbAvtSQdgKYhV2AuzDsSs99fweNIPK9QNQdplFndrzO3rtB7r4Et6FgrY3q-JewDZEINzd-jzV0T2VEdII4Ub9wWbk8QdLYMITeEIKUcCzbnYUrNNcweJVscTBNH5K8DmErUbw4PYXzD-9j-lAfH5djmdIb-zFDMAIoeJBXSdWLUYVAStaHzeXdStBjBHmALjEzbb1jU9SjReXiJ6o9bVG4bICHiPeIRkYHoLd96jGtFdezWHjHzzLLEQDb0oFFBnk8CH5tITg85ulFFzz_QI99hKK4Fulrtr6PK4NuxgfL0CzzUqFd7z9rlscr7UWHjkmSBzzzaX8rxzjYoX-UWn7IWHt8A7G9kTFXtX3N3WgSaIfzmYSMQ31XkYVAXXqYVrBm04UrmgGX5bX2s59uyesL1EUEjJuLq5krt6GXwr3NoLgO5MOCyJmJxLurClgD_8VENpKQujKb1i-VmEbWzHnUOjs6XP8VxPrOKL7XB3i353131D960hVcKGmGozrCJ_E2UJKzvQGzoTp_Bj8-DKFKOAJVAoOARgaxMxWvMgsQNJXvg1fv-CSf2_ZDGSXUMAMAJCpfpDOwXqCKKKLfsg9gXqYj1AA_gQeAuTqO-ftfjfscFKDAPf7oGSIfkf2cMfm_pC-_9AR_s_uAGfy1a1H3w_538H-NyX_hlGAEEBwBu_MAVP2VgX9AB1_dfkhUH7D83ab_RgJAN_7_8sy1qBrpKG6BYC4BHXT6AG2JJwCby2Ma_BQLMBhkhO-A9yD_2IFXtREP8cgcvxvJAJ2BdeKjlsXoG2pGuJ_M_iwLbacx1CfGWgdRzwECCCB7Ae_liBgBf8HSOpASDAHAGBFZspDbgXfj_QWZ3AiIagRwMkF8DL-fUeYJUR3iI1ZEpwKbtJFXBnV5QqADqp9AcHtAXQzg2sK4L4jgxXBm8DwRYF8H-DHa8oIYkENcEjAwhjgiIb2mDo1Jd6P0eAAANohADCejASwEsE2Ty8vI1WNIUsHPBYA42MARgBugVzpD2AmQnAX3xf7oC6UaQrIfRCoJQQbU7AEoc0EsCMErgvGMTC3yUD-JjOGqOXDVx1SWdtAkSATjEnRTOdkBY4JYEQOX7_dSSVgmwfBFc5adPQ7fPVCt36pDtIcrmTQd0ECAEARgQQcwEcKlwdYse81BbNz2pb7CbwY4Y4XQBgjK41KkYLADFEMFIYlgiQD4doIECgE9qtYLAGTE-EZAK4iQEEX8LMAAj_OEwHANEHcBkxIwEI9gBaBaAxQlgwI1EewHeFvZYoAADhUjFQuusIvADgCggNAYhjeYTm_h2ENlI0Kg9yIcMeGnCRg5wl4VcK56mCDyTsdmKoPuFHCThzw1jBlDeG_Cb8Xw9EaCP-FqxVwwI6UeCMhESiwQH4VPuDAPJYAHS6_DKFiLRHvCbyB5RIFqOaAyQURaIn4ab1FbsBSRG8SVCKDeHGjhOmoobM0AADULQR0fEiNEujm-VI-GqtydCHo7AJGa6sGJHCbxug9ZNDBACOAL4QgsdGAHdSuHOcHCyQW0kGI275BZwyEWAJHDVwQ8SerEPSJkDlAGZbIMYoSNdULHFifQ76XHFsGoA5AqxD3LkdagPKhjbq13T_K4CuDAAlA76XsarAV6dcHA63fZJkESD94pSSaNsJy3u77lbhehCAdOUehnhdQzvKQjOMPbwAv85HIsEr3fRLjV-K41xGuI3GJoRQiQbcUGQ8BVMRxkIZUUcAVzTjZ8ueeNCwHX4XAxmKmLrqGPjFh1meiYr0qrn3TgxJyrgPQjgFgCzhCwY8caB4EgnQSUgEwGBmbxOhy4PClHULtPlJbUtxqCuCCWORYHuouukIOMQrgwyNkLxyaQ9MSUAl3UiSwdP8bROywwhpUy1aCaIAnJgtXAVBKUowXYBwSZIHgPiYOEYKdsxYoDcwOhM3jNtoaPVUic0GOEiZOwkYqOq7hOgCAlgzE2OoJC4AXAcgQEjiaBIXhSTxg6ITCZtD9Ek9lmSaYkq8ymG38o66NfsOs0LppAUMVaTKMWLLrHcaAnIpIQ6B57hsRQkAyNn4wIC6gBAUEXvHLlFGn4w2qAFZuFI2aKZu0FcHyf01hKwFoRasQaE5Ml7TCoBxAzkIVKcklQEpjOWyV40oA-Mo2NAHWAtFXa1gyBxQNksAA0SPgvcRUqCQokOz9hD0_k_KUhTjL0w8AeIkBESPkCoxi0ndKgTWnamdTIw3UpybaxwxddMpriYaWOBHhiIJpWCMhDNO5rkJPovYzuq1MWnIJHw201xNdjISaRZp5DeaW1I6lXSVpSFNafdKwCPSom1kh7mESuljdJqA_F8TEFzxXYFEgWO1rhjGkPZIEBAN6unnRp0hbUquTyUFlmBSl-gpqFWqT1vitkWxgU9gtSxVrWIAAamT1zyf4VaFM_GeQWbwzBaZUeUAmkJhB8FxYrqZqICJsqoAVC4iSwNCKuCWA1R_5HiV0BvAUYGZcAOpMdAtiPgaZlMypsRKRxWi0AfMm8jXTN7jI-SOADdEGTVnhAY8ScUIIiG5kQxSW44iAGCJaE7JtqD8A8gbIIBMyn-NqPmVQQ3TMF7ZJM4XM7IyjeViYqABmdrkAyRgN0SwBWXTL3HNNqW-wPmb7L4ACMn8FEn2ZTOkjjQ3BcA2aD1DMEwAFcjs-OenMfFBDxmC0JafnMpnhyU5-M-vj0yuDlz8ZZ7UybFW1l5J4RXBAOVlH7FxB8qVsrScrIDjuydkHQvYOEDjkVyyO1dIkn2ISRWAm-9-P6cJyH75AUg5gVNtrj2BHAVaatEIHMEHDYzaAL9FyY-RtmJAApuA2iAeX9kryg5lAQDKKI3SdCahlc2YM7PplVzmZIsm2AWByiZQN0MDOIBd3aDXZ2gZDTcmZIjlR4cAWAC2pSHlDpwQFUVK0RAuLzQK6asC9oNjAQVS0zeyCk2IkBgWALHshALBWAtiq4KcA-ClIsX2RiIKzJ9cReHLI1m0CF5q3TYLd3rJLp5akaa8PkBZAsTmessl0P_UJnnygptw8WZLOFzSyIwkAIRaKNwVXAGZr8nbKfnfkoK05MkehbIrzDZzyFyQMaJopkWML-IWw6lNfE9inUa03DSgPDzXk2Kk61aYoFvO1zFASecY5XOGIKDIRig30m3DWkSAmYF8Z8_gaDka5KLFZLArADXiMHgxEg0SngVtBuEHizw4SumfFPBjWL4lYI1RbMEVpZKtJOS1WlfihEfhFFai_QqVFfY4jOhfDEcAYtyBGK5FC0axewBqW5KYutYN2M4rqXjQtFcs-aPLXXltKil6tTaHeIYGEDR2s7EQduyVjbjH5Eg8GPNLSkC4cCjrPnEplXC-svWGyunKuDIErKiCYZA8qKHPDOAGgAALXPAAB9OWClDMTah4i1y2RLqHsApRLADQXUGYmcDpFLBpBawb5zwhmEMoVBVcG4P9huD744MdoFCs-jUZYVtYajBCtCEVx2gEQ1FfMRCiezlu1I-JAAHF9uWQabLOz6C2C4xq6SaIGlG4U0DIc4bvID1M6E0bJs7SsrHQprShp8iofEPkE8gMYqAYODIJlHxH7iuUzQiIOzCgAx5OeRM_cUJAm7MpLivbZ1nSnSU6sdMAKqbuQUWH_LlhQKgSTJFOXnKrlty-5Y8puUvK3lHyr5c4EFnOcplyq4Fe73BiOMNVgZHAFF0jAsAKqKwytlUsMoMt5lC0uqDGLyR4R5ApJH6RQ0taHZUAkgEJOeU9UhqBUJHIkq63EReg41fuAOl6tDUpqdY2yq4JICRTxrg-Oa5NR-CJJkDJAIwTNQmrLXwRE-RUO8Sct1CWB3lNyu5Q8qeUWr3lny75SCshXaQQhUcEIeiqiFMEWF7AAlWFiJUiriYpKlYeSs3iUqp8RwGlWJkna_dGVxeZlcqtZUHCvSZ0VdaRh_n8qwsmUIyHOpVVoBhwEqqVSIqSVyrGUzKJ9tuoJaijSpdq9jpi0dVCxRQra9tSaq7XmrXlva61e6tmCJrvVuHSpTtUGaBqXp9asNSMUjX91o13wWtaWqTUNrU16yjNSWuzXYbXsRJAtYdmLVZqoNuaitTrCrU1qCNlG8tY2tI44r_RAM-uBt0fFvoDMzwFjIPneRq5Gg44c9BVRpDDgk6yvVEPjHiRkxh05AAUH2CFAvCuNgpHIGACbgcxE8imrMJ1LEwZACqx-TnK2IvnUtOpoolPAqL42q5pRGUFSDgBiifrONw4hcQeKBj0cZINopaSnn6nVlVceInzfEBvJm9XRrms6La3LE1BHwZMX0SYtxUOA2FuwesgZmmTYyCIwPAzJNFCrUBgl3I6lnZUy3mBP8YAK4MiE_XNB40IVctRVPBjNBs5fY21q_xSAfAA0kYMAC1nTlUFrq7ACrfBEYKbDYt06jIKagMzyprQV6GYH4AtA34MgmhLobOGy1tiTNLtIgA1o_VVbPoHmpbStB1j1aahkYZMGZBrkWAN44KdulFuY69DWODKv5NiEkCidRkIwvjt32iS2daI9ENuksB5J8lVhRSEpB5yBQsDeRwTAgAh3sCzVsgFcSAGdGyWRcAuq4ckCbO2AVwhiLwHKHbwS4JN4utAppL9rS6DaMuHnQlBUkgGzCip4AqrhRANK4oDUf2yYTdLX4nFvtHoT0AMKRTWgyk2XXQCszCm1S3JkU6KbFJVhfJmdu9LVDqnq4yD3IGjDpux1a6BkWBwdHru-367-pBuVcfIHYEO62Z5Vmqmbu-yuDZTFuCk3KvcRxDDALuV2xFOJibiJ5HMrmSiauGDpW1v6YsQKI2LfRcrvulGOwLujegGbawVtBZQUD-xddutppEjEi0DQ-ckQ5vSOK-mrLmhTSU2IsFM2yAzcQORrWrKARU3B7ccbjfsFgEfSg9jw_gPoLAQCDdBOdSaPMCRgMyox0ZrmTaZVBuQzc4AiU5KTzvqkEAFMtOVZbwP5AS7ugUu0ZFBFdjqacggRAPeIKD2rgbpZUzfsQKW4yrL5wyUZCahFDq97J3JHJHkkYDIhhSS-24SvsjjngMAG-nKp9p3177WKj6nLEfqcZZAz9Dki_VKEYBD7I4I-ySFunQD76TBC2g8eozv389Mogve4hXCsaLYBatjI1kjrb0RsO9EUy8hZOF5yDADeLWXRWU_VS9IB8vIWHdsjhr6CAfvDembKVLfy8AdvZaXbKloHld0G-vA_ftoBEHxGk9MPkk3oMn70AR9Q5pDtByRhbACGZfmvzxXYZIwVtOCoc3h07AnwN0t8IcycztcyUDTfQN40oJ1ZQDlUWAzVLqkRTDtEMO8RX1GS-1S27dZqQuJT1XALolbdPT4WznWH265fAmE2z5YqyzJtB6uqhzvFbDVe9IvSJ_s7BYY2gOGBjBbq_pO6ogBAHKHNGlUCRctcAAQ0hiEMO1P8k-2bSkABG-Gx9VwN_TAA_1j6VF4ZUfV_vtqBGNFARrjL2gPLyG4AihzmjQBUNTVP8q4PXfNwJJc1Kpfqaqas3gOpSe9WxAESEYIhslJeeLTAaTuIFiB8jFWPFkwYD74IPV-kSAUGTp1gATiah2AgnyJKA7poIOsHY-AcMWAPVXspKUmm53aH9AUUmKU7hIMxxW9VUkKV0bOPfiMm77dCoNIvD3Ex4D8XQx4cnUpQuw9Iw_JGPMCG9gZKwmveYHNyKRIYyuM-ZfK7CLHRRkJtAHPrHC_8ARgJlE8VPmEAjAiZApE6gF6lIx2A7owE4SYi6xdo1-JtacSebJF41pCUKGq3xM7XaOOI9TvqMOs7Pb_t9nWUK71mF4tGdnQX7ezte1GhoAoOPyAF0qjbB_SMZXKPpUqhkG0dlSHDOTtNA462keOzpPV0mHE7HJ8--YYKcp0bCsuop5YycXDlIsxkKx-4kaeF2appAkQEU70nBiHoJZEwKWTLIYVCKwDJTcpUjuFzkzFZFcVJVHmS6Kd7Tgw2rrqlNOZIxuIGDg0V3jOr72Y6-pOnfrmaVcROd-500ShbSe9I-5XQrhXAj5ldV0vvOVEBPPL395N8EZ6HOIQ7hnqu0Z8XaEtkHwMxecuwIgrryJ-SpgsWGeQZjV0jdp8AaVqkOwrK67FWLRqkqeyN0nFTdsEXNHi3L3W65wtu9DJywd1dcndNmfDPAEIzu6yMnuw_j7v0B-6LAKRmoTnsV22mBzzVAzKmbPDHqQT8e8tRecA5aCDd-gHPc8nY3Hy4x4JyzX2AVxak_hLegPPkt_OAzig12QJanKAv-bI9LueNI-IgvtKdc0o6C-xrnRtJ4L-MrjSjPdzIWB8aFwpWrSgvGCzApisceYHGSsAgeEwaIDCEkw0YXoikMXMbpyn_SGMHEF4IN14wSg5QCuLjKdRyCPkDN1wnLf_rgZLIBTAvJo6AdXDgG1VQHQpR0qTYYWAzF-fhvICuAdm0D4vTAyMewOfyu21LR3mrwyia8xCMvV3o2EcZLB2ghvE4M7xN6Wkzell53jMeuMWAeDUYOrFcDsvNZLo_4UbLEHxD1L7NSwYOtdhu7bB5cqYlMpBvoMEGuDTRJU5BsCvWideIVpzTHH_DPl9A2oahaXwDjp9sYWfFIDn30PQsY538NAPEEgEZRzT9xNY400bk_i5B5AKgFNA5VHB7AzgZwOZPcBwAg8coX0vEFTx1WDxk15CDJDmvWnVj77WqwHGDqCQb4XAHGabjjHYprFz8hWrLUEba4jjQkXBRlBSXlLIw-1-Wmm2OuUBVr1sGg4YYyilnveRZww1bwEYerATz0SIMKK6PBX9AdWD4J7H0AV4lg_4N-voHPyWmpr4hrhjKZmBynoA7dKbO9cjjoByx7-gXfsetjzH0A6gMqrZGFAMyvcDVhCFAD1O4KEbicyDYNmGyyILM-3IMmId0OfRHrFdK0V0GlTVnPOU3es8eGkVXNaDxXAs2Wc3gVnMokxnpuwdP1-1sy7N2sFHNpI_HmFMW1jbSMm5-56RvI_Qd0GxRHd8T0JrMDXvN6rpSs0RnnmDr-tEAAb2uIG1mEaOLYKbFeBUTPopvn53bGSq09KNym-r6suVsupifAH5XzLB467KDpbKiiobYNmgBXmxH4mK8xIyqFaYNHUtsYUdovDHdBtWyaA5-RO57ZTuLWDsAFdPjYCRiAZUJVo5qWQMjtg65a80zOw3Y1pMKQW1tlsqKBZwZR670drrs3ZbLp2DxV8LO2kC7s9gMoNoq-KSzB3j2Bgj14OgCt2AkYWAdGXsHLh5RgtbNyYHe3WBCATJR7W8bu9nJHuz3u7jAdSNXbMm12FEATBRIfcbvRqB72drrr3ezulQ1IC0N-x5LvtIxD7wnC0BiNbtYSRxS9t9CHgtyF1h8YEsFlPYmQQy_7YO4qKVDgdBln7aQSKvgjN432kYv9ggA_YfjzSVIRJGGkCxBaL3fYb6FZnPhwI12aNt99gMQ5TJP22kBD6GvPI1sk8SroObVC6AmpBYQTSe3dDkApj9gBdG883rHRvXIhI00GrLTZLB0ZRAAWERf4AATTSY8CqPEZzaA8ujb86jIsbEOS433lFEYn9TqJkqWttrA2i4AdogOqSexjCcHHl6Ek2DrJNOO3Hd0vexTF-OE2yqwY1zDdNpNH5KoI4Ji-pKPS2nwnwPQIGJmEck8OZuQHDNI9BNh7JgwPFWvMAcxhPXMPG4IGRYe4k8zEra88FcEhCtBoQfgSOGUayd9m7AkYP4I-dczFAraY1fZD6ExKQ9Ux9IpXdE_jSxPE8b52gDkALD4hGn5tzeCTz3Py0jahYMcxRkFXvsiQxERwjZGvS4hE88QagI1qtu3C_HqIEmwIAZmImKb8QEO8QIOuvyylL8xWQCL6Rg7zn8w21XMO35mXdqbpyRbMGkWCLsg118pZg65tmTATbdxXkJExrC4snkAx5684ML0PcHG84mI1bVxxXXHLZMk0SXmn4n4g1J1F3Sduy5kRS3szGXmAWuBnKCr8v5zc8jmRhwXxLhBkVMetwmibe3BuIo9hf4IyBmT1PXFbRFYvkXkM5hzjHlpZPqTvL052rnxfsOPLVozsMy-GeH2OHLGop1xGGzJnqnFuw_tE4MyAnmhIJx8iTyT2nANWtucOFVQ3M2ofofYQ3laFh5g8Ppuzg8QzcSBM29uYWV4VeeVT9Gip0LsgjLYsD0HMzCtgOvREIZ2uxwRzc7coEu0rnJAynYDPdvZOPaokDAbk-MAFCCq1TQp0pLGf1r-W-5UXcOZlaS4ppLmDSTN6l01OZB8dOp7Li88P6ZvjT1O3MxUhulf9H-9O9QxShtN9cG3kZ1nU6ZzcVJK9oUoqSlJoAXHxHvb9VCLqGF1dB39EDdE73a5JmN0y2OAFmak6egWzvaCZeULZoqdpd269A3eRYHNHvzc5iA-uFA6Z7Lo2e9o3lE6NjvxEhyxfbGq67WB4A3QONwchPl2AQt44U4ZsAu5nmseZgA8ilFFD_qYy1yzZOeHPzXLtQDQU5fYCtXfLex7AKglxywCB7Zww8ut8hk1qBFxUWVeRPC_ohkDAHUMoV2pCUCrhiPowUUOsvI8MOMRw4aj4VArj0eRgy2dD2QOIdserggDjj3R_yqjAl3vHhh_x_mkxRhPVkpKLEa493zP80UVptujr5WOLALcx6HrMjAQeoPMHuDwh6Q_ngUPfa5wDHiw9r8Qbf8wSeNEAcVHxFWVJdxvsXew913ubPN3wdnJZUq7UNS-aJ-48zAXPOyNdz5c8-2BFPtszw7FrW6XIvJLnaJ6Tikii4LQlQK0IOBJ68XCeAltEEJc8miWsg4lygpJaM1iKZLlyVT-01GRAGqlQvGfZAZT0wG7jxxrQ7zsQOMhkDlX1TlOyPdGWNP8Ypz5b396-XDsXXUOgqB6BlVIgFoEhhupgDzANNc4UZxtxiDHgnxeLHWJ56f6lQx4_4LoAt4RklEWYwdcUAd4aW70T5XGDKyjvIOQbtv_c28geI3Snf5kG-1b1GH49kwDpX18ZqwYgrjjRgvvPGyzAJvoBtckAurJDfuK03xmhxgRs5q52jvuj47_nVcYA6LNmv7ex4-Sbz5d17irx07CcU-Pw_lbk9JWxYE5sExnv8317-h2xoqNTD0lKA_Y0sOlQ7DR_XqHYZD64JKfIDWKtT4O9sl3Dc8mLSTz-OFMYodeyMCAjr31lW9Q2ITdBSSrFRzXQTgieYB64nESeN6oLEhpZCgXXMv7JIBaEzRJUBvowE-VcOiM36QgXYcH0VNVVd0rgXXvk4pZ7ozmtfqo31ZgbGOGmw7sqg4EVLbc3IWrQf0AVFA7ewF2rZdIe2dZuRr8R9p2DKF2-Wv4_NpRPvce2JdDY-5Y5uMPFA-T_x-wAifk8OnGE62aVIMUWPwcGz-86yZbeJFoX4j_F-3jJcMROX5wCV_CXB4kD27zkGQfdQ0H2D_B8Q_IfUPzgKgv-A9nV_SqZ0f0mDaOAyRy7Cvu-QtFEdXAq_0r6-3C5oVS1RCOfvP-Hke61HbpfUx7joXn-9ziTV1MP9_2b3Bt8EmL2v53vr-z5G_x_2PSeEcfn-5_5IK_-6Nbdw_f8ElccKRVyZMBjG7QlwHtYCCe0U3SYRstMsL9W3VBTdzmbdAiLYylAdjFsiZpqtcU2h1PoAt1Pwi3CuFGdZEIlQIBbbJsx-0WkStw6RMufiFTdYRfoCYhkkKo3GspuC0HCNmAtALo9sxRQQwBlBPkURBf-CuEgFg_KKFEDb_JgXmEQzWARkCsdTd3WEm3edxn0pAovwtMcCF7GoBI_N6CR0rTHQLaMlleVDGthQcIzwgmAmXAMCnjCPFsBwKRwAFVlYKgKZ1p3B0zZ0VA10z4CBRFkQBtLKT6D1t-RB4SFELhSzGUs_TKlzDNNA-uG0sZgIMzpknAtCD7dZ3GM0J10A8W3etV0Ysz_Q0g_R3LMgvSs15tUQGszMDqAQW3gBGzBKQV8GgOAG8h4AezCK4FAxTiSDWzZAlkFSSTswrJT3ac3PdeWZ1VIJ9dBbh_N6vK9wz0LDLPT2xKBNpG71-cW9gdYy4KYM2VwYbZXmC9lcGGuxlg3vQx8Oje4yfd1gmYMyUsLQpTyUDgjJQzZilR8VfdjAGyVos7VBi2QDEvVixd1IoMTCO5bzbi2E4svfi0zFcvWsREtIOHIB3grff6SLF2nOUCV1NfW01G5wrH-RIwkvKkDtwCgasRBDPzboHBC-uA326AoGZCEcZrfaSzlUpWeP3ktgDN310DVwRyyGDmfKDk2CH3bYOR8-_edEpDy8GWlGUlSWpWiDM2JZTtY1lJ7C2URAT1grgH_PSwsECQmXSMthjdjlGMnJcQJgAcDFgWetV0Zz2steTLXkdtTiRywN5yuVyycFHrTyxr5UAHy0288AzymysVQ0AjCsbAH-SitiiUb02YiTN-h2BErJIGu8IjW73t5jQoOxoAqDLOEKtVyYq1KsVbXpghpM-QcGz54IcdiesY5PKDECgA0P0lCgAqwIDoVrQFiZ8DxG-HQAT-DKFEFtA7tzeho_D0KTDw7ISDYDTAqbgsCfAcSmMD2A-CFLD4w3MIRl8wgP1TsprZP30Dsw4G0TDnDAsKmBzrGSEutwgncRus7FA6zVpefR7yEhaDV62yCo-T62G9J6OHzz59hJQT0FVBW23ttKAFUJG9xmWOzzsCACG3R8u6XOxht7WJUitMAOcnz0NDmD1Qgd8_CVS_5X_ffCgBD7L3DygT-GHx6Y5w-VkxkkgcH3FdH-DcJ6ZUwqMLv8JAvcItYkuECNmC3WcCO2UjwlqQURTwsnwvDINT2EJ5tcSwGOF9UKCCwB9QeOiIB9cYHwJgPVUmXJdFZSl0ZlbnfCMdgLMIHSwCi8PY0OZSA8gNttrrCuwIAqgmoKSp0rb60g0AOJuEwJAoPJDntKAP8IyYAItQKig04Y2n6lRI2MKAj_wIhS4k8-M8I5tEI-3gA4bpQ5zJlbA-IDMVmbASESBhImJmkjP-IAJgiaKCsOLCqw6IGYDTItjxsi01GyOgjwI67HgiBGCiIhh3wh5mHdkKG5CfcDI_eE0MHjXnRsiXjdPw-MXI8ZjPCRwpuXcoebKPAIAiggWxLEyggtlnDDDQ5jescgyWzyDrGBr0NZ5CKWn9CjmEXzk8lXf6S1syUAJ26B_A9yENsITCmxNtnJDbhBNC-B1yEgFwgQKXDEQFcOCCHbd0L78zZJO29sKsT2yGibYX2xKUARQO0axmsLIz4DFwxkTUFmBX1Q0E-A4rU8DAgp4WCCljV220ki7EG2ht47SGwPD87RPmqjLgFIk6iYALwKCCXhcm0RdUACGwRdFIc_E5B9ouOx3Cjog6IIAXo_qUWsGTSdUsBjAslCrQFBPxTOjgnXNGaAN2cPUUcb1HwAYxEgEnjzYxMVMMnAtAiExdxInPrg8VLuXqw9DYTddkP8oHW8Ib9tItl0yhUwk_mlE7nDwIUF5ooQPxYHnOQTmiOohaN_5bVaQJhdFCUFxyw-Aru1Xt2uOwXwRlpdqPQBBA_W0Pt4RPgMTtnw9GLxEbRCkRTsYoQkUtFt_fBC4FRY8WNUFJY8GPiQbRKgCDJ9hfmIgBRrPG3ki1oumNZiGYnWMujhOGxzQAv8PmM7ATY9rkbVFXai1i0boRwivDw8BjGodG_HVxDFhMKnjsBH-AmOHs5gL8MoAope6PiBH-R3wsAjIkAVkjMTKUJEDVwZZV6NghPpR9MuQvOEOVs4xpXB0eQ5-B2UC4hwRzji41YIYdy4hpR-ciML30qUzHTmN9dU4oANDtuY9UTwlKCUjz79nI_BAWgk4-KKAD3HXFzSAJIsaR1grgIeKlCyTbvyEhHybXGto2PRqT2BIwsSOACXHCGLb8y4KeLXj6XGSLDjsYeeKmBHyUaULAZIfuJZhB49eMPjm9MvzRFSTdOD3i01VeJniR4svzHiwrY2j3j342SIniJgE-NSdqAXaTLhLyNpDfjb44yP_j5I7EVJN5IveO2VIEg-OgSw42BK_id4wgF_ioE5OLQT4ZVWNiodqMgUfJe4jF2jVF4zkPVjjaK4DPjjaIknNjgE1AFATIIqVxKiPY1jSZtCeekXjizbQUX1QxHWXDjpPOfXFYFCAPxRjZWoqYGQiXgVCPQiJITCOwjhEuUGdsPsbSnMdh42SPZjSldRLTilo2DVXBTyR8grgGEm0SiAsASMC-8yQSgkwTDvVcC4FTE1wHMTLExhIATxpf6M4d_pe-luM_UJexMx40OdAslK0ILHP0bkKZzwxnuIPERAcgHGKCwL0P4EwAVdeYClBnaHsHDihIXiO2Ah-JJIIBBI0UX8BskwSOpi1YPiSgpvEvKCXth5UFXBhAIluMcCeQ6YLMBxJNuM0S9ElgQAoyk9ACXsr7WKkfIQXGB28lrEsvw2lrE2BNKh8kgSJZxuk9ymalDE18gfgGEx8lcT-pcZKlBBIkhz6TRZAZMIIlk4ZO2TYEi-xWSckyZIe9sHB-FmTCCOWi4FFk2BPiRDktZOAd5JEFjN5ek9W1KjhOPlHQAPJILDisGMRxxvUCmQVRIxqkebxJ5Yk9ZghwcgP4AZAFNSgnpFKJNJMD8nJDSK0iHwu8l0jyAfRSugKsHBI0TH-ZpNqTfAt0nMiBAYoNQBSwoKysiZcBLkmCacaYLlQxEXYIrglg2lKgx-QhRF2D_bSpS5Iakl4h5T9-EqXxS5ArmNlCIw9xgcC1KKFLsDhQN1yfCUE3BJuRAsYlNJTSwzP2pYymcVIyhJU7SOlSyCLDhGA-UhUyLCSUksMpSsAR6zsYIYt2z-EbyC1MBMvba1MtJJybZQ58bQhGQe9ATBOxkh1Ut1z9ooFGWLFSfUl0CgULaMHQLsvU35h1T86INOSBeXakPFTfUyhWhoFWC7knJHHbOTTV_5MHU9TN9ewJ9ShiP1NjSA04xnzTUFfBDtTOSCNPjT80mNP3jc04tJGAKFDWWTTIxMFkccnaLxx2oPUitLeZI07Un_AfAQtLrT86TeGDS6aUNO7Sh0vtIoV_UydI3h_wRNJwpm091KzSJ03tMzIG0gdNrS10-YlHSy08dPDSe0-NJ3Sa01MNnTj0jZJcNCEnf2vxXmA1PcdH4rNLIShXblI3jRXCGNhsdYLgRfS748SPuwdYBhO_TUE5vXkiLCd2NjUYve4wESFwXHBD8zbOEAik6MSGJ8M3janjDjJE_cRWZH-J9wTiNDTHzgNsfFlPSk4dN436DWjBqUbitk8-EFT-U7E2oztve93cYWvQKM71V4xnwulXpeuGWlFkuKw2lW_G6XPjxpYTkmlDpVDQQpo1F6SWlIKbZMcdeM07GOoipZhLdT4kYTOmlRMgOAYSJMt6RDYpM8-BsT-pTaXkynJRTP2kVITuhEyiGLgU0zOMnTOLghkgaTkz-M42hMzzMnuBOlawM6XIZ2MpaW4yFEL6TUzrYZ6UulOMxZOxg_Mohg0ygsjABszU4eSLCzO6SzMizHwRZPTg4skRB6Eo3YzggCOOSdmgCxhGzlTcEAsdBc5y3YU3ncxTKHXzcpTZHWdC7eFAI1N0ubUx3dJhIQTgE7TKnXxQ0AtGI0IswhnSncWdR0xtAysu4Q2jUAHwOex2NPrJndt3FIKyDcudIIK40o2bK95MoirnyC4ohKLrMko4W2gB4grdzF0d3AfQBk9KdoJPcQDd326CbyRxlIzZzHoIqxco0DlGDb3cYKotwMzW2uD6LRi3SdYQv9xexNnDX17N32TL2rQ-LUJC-CzQYS2aACvYZy6ypuQEOE5gQksT7MZzLi1fRIQ80PxAYQyTBhzi4REMRyN2VENfR0QmPS_psQh9VxD2CR9mOzCQ2ryUtegnTCFR7s6A1oFf8V9RZNj3V2LFDt1RgBazl-GUMCI5QzeAVCNeJUNss-ohy11Z1QmHjcttQq0S8s9Qn7wJhPPN0OmjfJStjNCIrUo2itrQuKztCErPYCSsESG7woNlczeHU9_fXRgL5PMEq20IS-QqJQZAwmIODDqrUMKiiurGpAu5X6fQEFUichnQfNsc00i00FImawXjYUpf3x8zwCWXrgCgKrH0BxQKUDKtww4eywBbAbNNrDDMkaUkj3RHzKJNpNFOzJh6wy-WTy4AMNMygXjG6UUyaTELMvRc8_qXzyOw60Ni8htINHy0CQZi210dbDGWliCJB-FisLYJwlnxNnCJx6Avcp8UxiUckyWDzeYhQVtsUoIvL9l1owUU2jboxxJTyk6IvJejOrTsMm8l6HJPRiMw9GJrD2w6g1y10kGIHiB5Bea0np9hGfKLy3o7cMeitwmG2KhH40Zl3zusoglOtyqRYg30MoqcMjh9QriPt4qjF9XfzHY6fNlBZ82wCsxT8k2KgAL8mAGLYA4V3JFozJWKL5tazPCFKDtsiCknpJ2eoIEZf88rgrMco4YPyis4QqJg52AaLTeT4kFKGbzKtaJ3bzc8TvNBjDbOiVQALQQ6FB5A80FJydGyYIJe54kgbnszOWUHFN1ggCPRXxXMDLXLUz5KoT4Duo5XHKi6A0UWw8_hb4SKTK2c4I8SaRZ9VNQgsWRT7BMw8wDV08wFkAEdyuann2FyIUFMN8R8kIDnzgjcV39z9fMfMIASAPswRSRrBQyyI98lRNrB9hZQoy5Zo8Av-tggoIuFAK4eOjPy4C1aImi1YKaNNyZoo7Km5hBf3wdlUZPsCX8N4FiNX9Yodf0Yc7NIBOsKZIJaR1hAivQoy4788G0-j3on6LRFoi2AvgKiSJC2KjaHNWIrp0Yq4Bel9heQG5hRMmGnSy-hLCCyzRdX0lyzOTOAOy53ADApKCko5wByhsgJlGtlCs6AuIt-TIHhKzs3GbJbQqI7Y2kZD7HAM-g83CuEIDIuDIDSAkdVMwIA4yCYHR182XehIC8QMgKzVKAhoNQgK3BrPoDf9YzQPFCCjIJethcyIFd5teFXI2IMopy0N5d0dy1EViZP4snCiCoL0VDgS5ULFzPVbIMhLyuLjBhKD9J7x2Ql3dd2RKiAEEpd85edErmyx0doA3RNQmEpt9V3O4A31CsxgFJKGiCEvlAN0bEui9WNawDZgCAZCCO4EvdGmmRoAL-hmLSUknhlA5xc7waQDMTeF0AcgFzkiBPgpLUpk4c-JARyfg6YyQCWTN9H8gXgYUFxzaxPq2gAOSBL3Sc3aTEEP4jucWF1LqAfUuVRDS4S0ZyfCZSmrh6CsE3Sdl5Sm2907SjLkmxmqcWARCycv_SEg0CwoP5tNshs2kYcMrLKGNtSqFF31UARIDEAK4Y0qgA4yqXj30Gc0gpgAb3SthU1OUkVOHsIyzAqSiN9JC0jB-PMUsSjOWBYs2B0AZYv-EgEiYF5LYATg3nzZi1AFKCACrEmeLGI2UCnJ2OJM0jBrlbSQRRsgUAg1d0APGz-8aXaRiPo2ipZUypeQtsqMNsmZ5j9Umfcw2ltLodn1sNnS-wwsIZcsyRbKVy7ICF9Xk9hJJ4qg-kRZKswQ7hPlhIZ3iiMRFB2TgBAMTUJjtnffdzU88rUqGAD5-epSpKdkGksnUFYSqKV9QeHUh8ICJR8sBMcgZkROFxgNkTu4XywzTA88JIGHsx3CcCsOLVC78qAwDkPkxaACK9mjNyhYXAD756lU-SfxJ1RUqUkisSjA0MFfYHiN9w0HOETxNgYTE1CvC5wDlgGgWyEsADPeD3sBdQbUHPAMoGKDMhZ-cnOYqkYNiKwrzyznJZNGAQ5SyFXPZ3nc8Zw84oUh26ekvXdE-Lb1CtdZHZEcBPIepT4qBKoSuH9rlUSvErTovYswCDi3YwHIkqHCv8BDixPg9VbAD8th5E-HUhFBbivABa14gTeHfBGTC7X6EZ3a0AmLYAiYTs5VwT8MSAVDZXAh1ZQBrQrhSwhLiVT4go1NJTOA01JrdRTA1JED1E0qoJS2sk0x0L8VcNwMKmUZC3KkEHG7Ghk_0_6RAyXC1UXV9kcl4xxCQyxFKAzm_BnX8KLAM9wGDyMn3x_TFov330Tq4-FzLyipUhIzjo1eaqckl4p4rGkrgFaozzYZUkPhlNq_H3Lz4ZdxJoKp1Wqtcwfk6tEccbpfvBeCAc9QzDgOYapxIxPggzN6rfiysSKl4wmOy6CxqhGR9cV-GatIEGHLarHBFqjkKFcQarozAixlSdQJUh80yB3hPJW6riJPCt6rK84_QattNlPH6rIy_qmDJozhUqpS4FIagTOMS9qzwsOqxEY6qvL_pOGogrf2DqqRr_slGp6rgy96q_z38r6uxrzs36oc1Ws9IoztDQcsNGtKw8wNNTD86Hxn9MgAWLUop7PkSRE_OD0kCxQwVwGPLYqV0UcpnY0a2E5pfQkX6kFYhoDgowtXvEfB7NMDK2E4auFKtMmaj33x8rASRkrJbMPOVCQgcxEAz5kMHGMlA8Y1xDkEuCUrjsB4Y6tBRBra2iSAlsXNGrhKzrFsKGrS8nGpuy-a5fjedKjIWtSAm4KuCgBAYkWosixat2iwAJa9Yxn96IVwCWASsU2n1AZ_Ra0ntogMkVsd7RAzFuSaTErHiRyANWvcoS7S8teySeS2qCw8q60VNSP6L7S6rWa9CthKGwvKpNTc6rmtjqea3Gs_VSw_r0KQGtRciVSJ65gIa186xpi5KSeD90m9cI01yeqV6lYS4CZcG2pDjQUpVMrJq0eZzK1Qc_W3dqukbwpMCSUkr1xKhILEB-R4gTOva5Ra6gGrDWwp2yxS8fGepuzbVeeoFqDxPzkQMs641MsjJ6_-oTDJax1LBYQot4xOJ_5PCTeNYiC6zTrP6w-pzrmAmsIfgUGwn3uJSEH6jN48qxcn1AyQTBv1A9xTWStE_Oc2tIlMAepGTRSw-oC9jEgKQvjR_3OwBvUfgR-p_rpuDCoPEGgcSrMQPlSwHg99Qd5VFAGgCvGuVnASwHkazEPFQyhnLU1Ol8lgfj349WPXRs5A-tK4NggAgLKkmR8wV2DfRnzV-lfyhG7OpZBj6nwC6qTiebXZq7GmBvwaZcdevgacM0atxrbVVIyTqSZRqBdkNnVy1PAxwdcDvhv-EJtrCsseqsZcTNeADc0miEJoibdCaiUSBnZJ8AtBjhDwBlNLQPKrfBHaBhhZgD4dJs3FLxbJvaBOAygBEgLQIpuKgJ6BhDSazwSpokhqmzgLgAGmpVOKbmmsptaaxwdpqybKZHJsoAem6BptAmm0prBJBmjJsrcOm0ZowVem6Zp1hxG88EkaGgaRuuVZGlRoUalGvZrUbS7MFn_dSjNwVEJimuDStF1mzZu2bdm-RsUblG1RrxUL0lAtip_3c2pi9Ki7oFGwLgekRsg-gIsA1SuqgnJMl4kaZwjRXAJGEFUkqsTEGthrcerdUI6hsK1TUUjVOGqw3XFN5SN49OKWUdlUsMLL-c9dniAwAATJjCBq7-LGla8mfz8AoAeWHhlyW-VPEjYErrjrzyHLriXlSuAE3sKfc203jRKynRvvVnNISHmIAiapVRFaW0lroSSKiVpJaK80h2TCRWl2Xog1CyVtJqZWmbzlaGWhVq3yhiMVrULNWulvVa3YSVvlaK65VvFa1W6VpNatW9vxhptzdgDMQHJXiNsECJLwGqdA8ysmhajgWFpt08GhxtNSZuSo1FaZIJKpSrnSYgCywRgVVIga-HUNsjjkq2qWCDFyIgCywECmf1CQxgeNvJBE2gGxTbC3GNsLCLubNqji82yNsqh02o3X4AQMfgGHzbUTyQZ1-sZ6tBy-XTFpm5Tk0ohGAPMrODUKCAHdJ8B3RK1qpaAA19If8s4N2D7aG05IEHbbWsBJHbJq-kw1oiSF0G7aY4XtqDSB26YCNbM8zFtnix2mOAnbo0mk1NaGW-dopbF2tiiJIhiVdoDhe2ktOPaSWslrPamW_8H3aA4CdurSH2ulorzn2rFvEiQAxwyvbooZqTvb-0r9qlbh23dpHi3262A_b508Dp_aoO_-IA6-YUDNeS_EIKG2BEMgCGvhUALvmTdwIJQn4AEIY8H4ArgfgCBBiQKoG8AMgTgqwAfQQ1l8h1gfgE8ZeFAMCQB2AfgAr9O_JjprB-AcoGpo8IMjs46QAOgvyA_wNmQY7bEebybhEgPMGhxE8M0ClALQSjpBAaOgQF46LAfgCiA0AYTv4AsPHDs06ROzAHmAIwASCtk00DjsCJ-AJTtEAOO_gAAA9KSpwAzIHjpAAK4fgA4guIagD06QAJzu46AATiM6tOwQF-1fOhztc6K_YLpE7EWvCAKrc68LpihO_Nzo87BALUBtciARLtc7Iu_gHWAtoeQBY41O3ACXYcO6gHw7xhEADhgQAWgF9AsgMjoo6NkC0Fs7UvOYH4ACu_mHkAgAA",__position:0,__code:"<Positionable\n  resizable\n  position={{\n    left: '0%',\n    top: '0%',\n    height: '25%',\n    width: '25%',\n    rotation: '0deg',\n  }}\n>\n  {({ renderedPosition, refHandlers }) => (\n    <div\n      ref={refHandlers.container}\n      style={{\n        display: 'inline-block',\n        position: 'relative',\n        width: renderedPosition.width,\n        height: renderedPosition.height,\n        backgroundColor: '#ddd',\n      }}\n    >\n      <span>Hello!</span>\n      <div\n        ref={refHandlers.seResize}\n        style={{\n          position: 'absolute',\n          bottom: '-5px',\n          right: '-5px',\n          width: '10px',\n          height: '10px',\n          backgroundColor: '#f00',\n        }}\n      />\n    </div>\n  )}\n</Positionable>\n\n<div\n  style={{\n    display: 'inline-block',\n    width: '25%',\n    height: '25%',\n    marginLeft: '1em',\n    backgroundColor: '#d7d7d7',\n  }}\n>\n  Non-Positionable div\n</div>",__scope:{props:this?this.props:n,Positionable:i.b},style:{backgroundColor:"#f0f0f0",height:"400px",overflow:"hidden",padding:0,position:"relative"}},t.a.createElement(i.b,{resizable:!0,position:{left:"0%",top:"0%",height:"25%",width:"25%",rotation:"0deg"}},function(e){var A=e.renderedPosition,n=e.refHandlers;return t.a.createElement("div",{ref:n.container,style:{display:"inline-block",position:"relative",width:A.width,height:A.height,backgroundColor:"#ddd"}},t.a.createElement("span",null,"Hello!"),t.a.createElement("div",{ref:n.seResize,style:{position:"absolute",bottom:"-5px",right:"-5px",width:"10px",height:"10px",backgroundColor:"#f00"}}))}),t.a.createElement("div",{style:{display:"inline-block",width:"25%",height:"25%",marginLeft:"1em",backgroundColor:"#d7d7d7"}},"Non-Positionable div")),t.a.createElement(a.MDXTag,{name:"h2",components:A,props:{id:"props"}},"Props"),t.a.createElement(g.f,{of:i.b}),t.a.createElement(a.MDXTag,{name:"h2",components:A,props:{id:"render-callback"}},"Render Callback"),t.a.createElement(a.MDXTag,{name:"p",components:A},"You can use Positionable by provided a function as ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"children")," or via the\n",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"render")," props. Both receive an object containing the current position\n(",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"position"),") and the ref handlers (",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"refHandlers"),")."),t.a.createElement(a.MDXTag,{name:"h3",components:A,props:{id:"children"}},"Children"),t.a.createElement(a.MDXTag,{name:"pre",components:A},t.a.createElement(a.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-ts"}},"<Positionable>\n    {({ position, refHandlers }) => (\n        <div ref={refHandlers.container} style={position} />\n    )}\n</Positionable>\n")),t.a.createElement(a.MDXTag,{name:"h3",components:A,props:{id:"render-prop"}},"Render Prop"),t.a.createElement(a.MDXTag,{name:"pre",components:A},t.a.createElement(a.MDXTag,{name:"code",components:A,parentName:"pre",props:{className:"language-ts"}},"<Positionable\n    render={({ position, refHandlers }) => (\n        <div ref={refHandlers.container} style={position} />\n    )}\n/>\n")),t.a.createElement(a.MDXTag,{name:"h2",components:A,props:{id:"ref-handlers"}},"Ref Handlers"),t.a.createElement(a.MDXTag,{name:"p",components:A},"Positionable provides ref handlers for the container element, 4 corner rotate\nelements, and 8 resize directions elements. The only required ref is for the\ncontainer. The available refs are attached to the ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"p"},"refHandlers")," property on the\nrender callback:"),t.a.createElement(a.MDXTag,{name:"ul",components:A},t.a.createElement(a.MDXTag,{name:"li",components:A,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"container")),t.a.createElement(a.MDXTag,{name:"li",components:A,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"nResize")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"neResize")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"eResize")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"seResize"),t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"sResize")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"swResize")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"wResize")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"nwResize")),t.a.createElement(a.MDXTag,{name:"li",components:A,parentName:"ul"},t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"neRotate")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"seRotate")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"swRotate")," ",t.a.createElement(a.MDXTag,{name:"inlineCode",components:A,parentName:"li"},"nwRotate"))))}}])&&l(n.prototype,o),r&&l(n,r),A}()}}]);
//# sourceMappingURL=documentation-positionable.81fad9ec5f0669f1bf5e.js.map