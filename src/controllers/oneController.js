const express = require("express")

const controller = {
    one: (req, res) => {
        res.render("../views/one.ejs")
    }
}

module.exports = controller