package com.isleslie.marble.service.impl;

import com.isleslie.marble.domain.convert.UserConvert;
import com.isleslie.marble.domain.dto.LoginDTO;
import com.isleslie.marble.domain.dto.RegisterDTO;
import com.isleslie.marble.domain.entity.User;
import com.isleslie.marble.domain.exception.ClientException;
import com.isleslie.marble.domain.exception.ServerException;
import com.isleslie.marble.mapper.IUserMapper;
import com.isleslie.marble.service.IUserService;
import com.isleslie.marble.util.CaptchaUtil;
import com.isleslie.marble.util.EmailUtil;
import com.isleslie.marble.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserMapper userMapper;
    @Autowired
    private CaptchaUtil captchaUtil;
    @Autowired
    private EmailUtil emailUtil;

    @Override
    public String login(LoginDTO dto) throws ClientException, ServerException {
        //检查登录数据是否正确
        User userByEmail = userMapper.findUserByEmail(dto.getEmail());
        if (userByEmail == null){
            throw new ClientException("用户名不存在！");
        }
        boolean equals = userByEmail.getPassword().equals(dto.getPassword());
        if (!equals){
            throw new ClientException("登录邮箱或密码错误！");
        }
        //签发token
        return "Bearer " + JwtUtil.signToken(dto.getEmail());
    }

    @Override
    public void sendCaptcha(String email) {
        //生成验证码
        String captcha = captchaUtil.generateCaptcha();
        captchaUtil.put(email, captcha);
        //发送验证码
        emailUtil.sendEmail(email, captcha);
    }

    @Override
    public String register(RegisterDTO dto) throws ClientException, ServerException {
        //检查email是否存在
        User userByEmail = userMapper.findUserByEmail(dto.getEmail());
        if (userByEmail != null){
            throw new ClientException("所注册邮箱已存在，请更换！");
        }
        //检查captcha是否正确
        String serverCaptcha = captchaUtil.get(dto.getEmail());
        if (serverCaptcha == null){
            throw new ClientException("请发送验证码后再注册！");
        }
        if (!serverCaptcha.equals(dto.getCaptcha())){
            throw new ClientException("邮箱验证码错误，请检查！");
        }
        //写入数据库
        User user = UserConvert.INSTANCE.toUser(dto);
        boolean insertFlag = userMapper.insertUser(user);
        if (!insertFlag){
            throw new ServerException("插入新用户失败！");
        }
        return "Bearer " + JwtUtil.signToken(dto.getEmail());
    }
}
