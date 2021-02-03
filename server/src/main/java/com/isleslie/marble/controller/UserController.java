package com.isleslie.marble.controller;

import com.isleslie.marble.domain.common.ResponseBean;
import com.isleslie.marble.domain.dto.LoginDTO;
import com.isleslie.marble.domain.dto.RegisterDTO;
import com.isleslie.marble.domain.exception.ClientException;
import com.isleslie.marble.domain.exception.ServerException;
import com.isleslie.marble.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private IUserService userService;

    @PostMapping("/login")
    public ResponseBean<Object> login(@RequestBody LoginDTO dto) throws ClientException, ServerException {
        String token = userService.login(dto);
        return new ResponseBean<>().success("登录成功！", token);
    }

    @GetMapping("/sendCaptcha")
    public ResponseBean<Object> sendCaptcha(String email) throws ServerException, ClientException {
        userService.sendCaptcha(email);
        return new ResponseBean<>().success("发送验证码成功，请查收！");
    }

    @PostMapping("/register")
    public ResponseBean<Object> register(@RequestBody RegisterDTO dto) throws ServerException, ClientException {
        String token = userService.register(dto);
        return new ResponseBean<>().success("注册成功！", token);
    }

}
