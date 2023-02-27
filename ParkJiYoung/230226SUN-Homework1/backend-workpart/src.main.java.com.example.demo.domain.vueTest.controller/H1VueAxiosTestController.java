package com.example.demo.domain.vueTest.controller;

import com.example.demo.domain.vueTest.controller.request.H1VueRequestTestData;
import com.example.demo.domain.vueTest.controller.request.VueRequestTestData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/vue/second")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
public class H1VueAxiosTestController {
    @PostMapping("/receive-winner")
    public void receiveWinnerTest (@RequestBody H1VueRequestTestData h1VueRequestTestData) {
        log.info("승자 : " + h1VueRequestTestData);
    }

}
