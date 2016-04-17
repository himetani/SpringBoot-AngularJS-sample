package com.yusei.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class MainController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String base() {
        return "base";
    }

    @RequestMapping(value = "/templates/index", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/templates/hello", method = RequestMethod.GET)
    public String hello() {
        return "hello";
    }

    @RequestMapping(value = "/*", method = RequestMethod.GET)
    public String except() {
        return "base";
    }
}
