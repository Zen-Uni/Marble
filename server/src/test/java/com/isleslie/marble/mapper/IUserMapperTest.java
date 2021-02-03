package com.isleslie.marble.mapper;

import com.isleslie.marble.domain.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@SpringBootTest
@RunWith(SpringRunner.class)
public class IUserMapperTest {
    @Autowired
    private IUserMapper userMapper;

    @Test
    public void findUserByEmail() {
        User userByEmail = userMapper.findUserByEmail("wjpang69@foxmail.com");
        System.out.println(userByEmail);
    }
}