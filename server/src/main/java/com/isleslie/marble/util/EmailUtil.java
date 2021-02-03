package com.isleslie.marble.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailUtil {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String email, String captcha) {
        SimpleMailMessage message = new SimpleMailMessage();
        //发件人
        message.setFrom("we_found_404@163.com");
        //收件人
        message.setTo(email);
        //邮件标题
        message.setSubject("Marble应用-注册验证码");
        //邮件内容
        message.setText("您好，这是一条[Marble应用]帐号注册的验证码邮件，验证码：" + captcha);
        //发送
        mailSender.send(message);
    }

}
