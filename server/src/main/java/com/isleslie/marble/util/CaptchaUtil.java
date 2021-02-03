package com.isleslie.marble.util;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class CaptchaUtil implements InitializingBean {
    private static Map<String, String> map;
    private static final int[] numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

    public void put(String email, String captcha){
        map.put(email, captcha);
    }

    public String get(String email){
        return map.get(email);
    }

    public String generateCaptcha(){
        StringBuilder builder = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 4; i++){
            builder.append(numbers[random.nextInt(10)]);
        }
        return builder.toString();
    }

    @Override
    public void afterPropertiesSet() {
        map = new ConcurrentHashMap<>();
    }
}
