"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n        <form method='POST'>\n            <div>\n                <label> Email ! </label>\n                <input name='email' />\n            </div>\n            <div>\n                <label> Password ! </label>\n                <input name='password' type='password' />\n            </div>\n            <button> Submit</button>\n        </form>\n        ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // marked as logged in & redirect to home
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
