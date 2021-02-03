package com.isleslie.marble.mapper;

import com.isleslie.marble.domain.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface IUserMapper {

    User findUserByEmail(String email);

    boolean insertUser(User user);
}
